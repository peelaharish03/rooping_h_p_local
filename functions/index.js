// Import the new V2 triggers and logger
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
// We still need the main package to access config variables
const functions = require("firebase-functions");
const axios = require("axios");

// --- CONSTANTS ---
const ACCOUNTS_URL = "https://accounts.zoho.in";
const API_URL = "https://www.zohoapis.in";

// Note: In V2, we use 'onRequest' directly
exports.submitToZoho = onRequest(async (req, res) => {
  // 1. Enable CORS
  res.set("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  // Retrieve secrets (still using the config method for now)
  const config = functions.config().zoho;

  if (!config || !config.client_id || !config.client_secret) {
    logger.error("Missing Zoho Configuration."); // Using logger!
    res.status(500).send({error: "Server Misconfiguration"});
    return;
  }

  const formData = req.body;

  try {
    // 2. Get a fresh Access Token
    const tokenResponse = await axios.post(
        `${ACCOUNTS_URL}/oauth/v2/token`,
        null,
        {
          params: {
            grant_type: "refresh_token",
            client_id: config.client_id,
            client_secret: config.client_secret,
            refresh_token: config.refresh_token,
          },
        },
    );

    const accessToken = tokenResponse.data.access_token;

    // 3. Send Data to Zoho CRM
    const zohoData = {
      data: [
        {
          Last_Name: formData.lastName,
          First_Name: formData.firstName,
          Email: formData.workEmail,
          Phone: formData.phone,
          Company: formData.company || "Unknown",
          Lead_Source: formData.leadSource,
          Description: `Source: ${formData.leadSource}. Web Form.`,
        },
      ],
    };

    await axios.post(
        `${API_URL}/crm/v2/Leads`,
        zohoData,
        {
          headers: {
            Authorization: `Zoho-oauthtoken ${accessToken}`,
          },
        },
    );

    res.status(200).send({success: true, message: "Lead added to Zoho"});
  } catch (error) {
    // Using logger instead of console
    logger.error("Zoho Error:",
        error.response ? error.response.data : error.message);

    const errorMsg = error.response && error.response.data &&
                     error.response.data.data && error.response.data.data[0] ?
                     JSON.stringify(error.response.data.data[0]) :
                     "Failed to add lead";

    res.status(500).send({success: false, error: errorMsg});
  }
});
