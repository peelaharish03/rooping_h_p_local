import React from 'react';
import Footer from '../components/Footer';
import './PrivacyPage.css';

type TermsPageProps = {
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
};

export default function TermsPage({ onNavigate, onOpenDemo }: TermsPageProps) {
  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="privacy-container">
          <h1 className="privacy-title">Rootping Terms of Service</h1>
          <div className="privacy-updated">Last updated: 11/25/2025</div>
          <p className="privacy-intro">
            Welcome to Rootping. These Terms of Service ("Terms") govern your access to and use of the Rootping
            website, platform, and services, including our Threat Exposure Management and Threat Intelligence
            products (collectively, the "Services").
          </p>
          <p className="privacy-intro">
            By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, do not use the Services.
          </p>
          <p className="privacy-intro">
            "Rootping," "we," "us," and "our" refer to Rootping and its affiliates.
          </p>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">1. Eligibility</h2>
            <p className="privacy-paragraph">To use the Services, you must:</p>
            <ul className="privacy-list">
              <li>Be at least 18 years old</li>
              <li>Have the authority to enter into a legally binding agreement</li>
              <li>Use the Services in compliance with all applicable laws and regulations</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">2. Services Provided</h2>
            <p className="privacy-paragraph">Rootping provides cybersecurity solutions including, but not limited to:</p>
            <ul className="privacy-list">
              <li>Threat Exposure Management</li>
              <li>Threat Intelligence & Monitoring</li>
              <li>Credential and asset exposure detection</li>
              <li>Attack surface analysis</li>
              <li>Risk insights and reporting</li>
            </ul>
            <p className="privacy-paragraph">Rootping may expand, update, or modify these Services at any time.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">3. Account Registration and Security</h2>
            <p className="privacy-paragraph">Some features require an account. You agree to:</p>
            <ul className="privacy-list">
              <li>Provide accurate and complete information</li>
              <li>Keep your credentials confidential</li>
              <li>Be responsible for all activities under your account</li>
              <li>Notify Rootping immediately of any unauthorized access</li>
            </ul>
            <p className="privacy-paragraph">Rootping is not liable for loss or damage arising from your failure to safeguard login credentials.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">5. Customer Data & Security</h2>
            <p className="privacy-paragraph">"Customer Data" means information you submit, monitor, upload, or configure within the Services.</p>
            <p className="privacy-paragraph">You retain all ownership rights to your Customer Data. Rootping does not claim ownership.</p>
            <p className="privacy-paragraph">You grant Rootping a limited, worldwide, non-exclusive license to:</p>
            <ul className="privacy-list">
              <li>Process Customer Data</li>
              <li>Analyze it for threat detection</li>
              <li>Provide the Services</li>
              <li>Improve the functionality and performance of the Services (in anonymized or aggregated form)</li>
            </ul>
            <p className="privacy-paragraph">Rootping uses industry-standard security measures to protect Customer Data but cannot guarantee absolute security.</p>
            <p className="privacy-paragraph">You are responsible for ensuring your use complies with relevant privacy, regulatory, and data-governance requirements.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">6. Subscription, Fees, & Payment</h2>
            <p className="privacy-paragraph">If the Services are offered on a paid basis:</p>
            <ul className="privacy-list">
              <li>Fees will be specified at the time of purchase or in your service agreement</li>
              <li>Payments are due according to the billing cycle you select</li>
              <li>All fees are non-refundable unless stated otherwise</li>
              <li>Late payments may result in suspension or termination of services</li>
              <li>Taxes, duties, or additional charges imposed by law are your responsibility</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">7. Intellectual Property</h2>
            <p className="privacy-paragraph">All content, software, designs, trademarks, and materials related to the Services are the property of Rootping and protected by intellectual property laws.</p>
            <p className="privacy-paragraph">You may not:</p>
            <ul className="privacy-list">
              <li>Copy, modify, or distribute any part of the Services</li>
              <li>Use Rootping trademarks without written permission</li>
              <li>Create derivative works based on the Services</li>
            </ul>
            <p className="privacy-paragraph">Rootping grants you a limited, revocable, non-transferable license to use the Services for your internal business purposes only.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">8. Third-Party Services</h2>
            <p className="privacy-paragraph">The Services may integrate with or rely on third-party tools or platforms. Rootping is not responsible for:</p>
            <ul className="privacy-list">
              <li>Third-party content</li>
              <li>Their terms or privacy practices</li>
              <li>Any issues arising from third-party integrations</li>
            </ul>
            <p className="privacy-paragraph">Your use of third-party services is governed by their respective terms.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">9. Service Availability and Updates</h2>
            <p className="privacy-paragraph">Rootping strives for continuous availability but does not guarantee:</p>
            <ul className="privacy-list">
              <li>Uninterrupted access</li>
              <li>Error-free operation</li>
              <li>Absence of delays or outages</li>
            </ul>
            <p className="privacy-paragraph">We may:</p>
            <ul className="privacy-list">
              <li>Modify or discontinue features</li>
              <li>Perform maintenance</li>
              <li>Roll out updates or improvements</li>
            </ul>
            <p className="privacy-paragraph">Where practical, Rootping will provide advance notice of major changes.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">10. Confidentiality</h2>
            <p className="privacy-paragraph">Both parties agree to keep confidential information private and use it only for performing their obligations under these Terms.</p>
            <p className="privacy-paragraph">Confidential information does not include:</p>
            <ul className="privacy-list">
              <li>Publicly available data</li>
              <li>Information already known to the receiving party</li>
              <li>Information independently developed</li>
              <li>Data required to be disclosed by law (with notice when permissible)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">11. Disclaimers</h2>
            <p className="privacy-paragraph">To the fullest extent permitted by law:</p>
            <ul className="privacy-list">
              <li>The Services are provided “as is” and “as available.”</li>
              <li>Rootping makes no warranties, express or implied.</li>
            </ul>
            <p className="privacy-paragraph">Rootping does not guarantee:</p>
            <ul className="privacy-list">
              <li>the accuracy of threat intelligence</li>
              <li>detection of all vulnerabilities</li>
              <li>prevention of security breaches</li>
              <li>uninterrupted service availability</li>
            </ul>
            <p className="privacy-paragraph">The Services are designed to support, not replace, professional security practices.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">12. Limitation of Liability</h2>
            <p className="privacy-paragraph">To the maximum extent permitted by law:</p>
            <ul className="privacy-list">
              <li>Rootping is not liable for indirect, incidental, special, consequential, or punitive damages.</li>
              <li>Rootping’s total liability for any claim will not exceed the amount paid by you in the past 12 months (or $100 USD if no fees were paid).</li>
            </ul>
            <p className="privacy-paragraph">These limitations apply even if Rootping was advised of the possibility of such damages.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">13. Termination</h2>
            <p className="privacy-paragraph">You may stop using the Services at any time.</p>
            <p className="privacy-paragraph">Rootping may suspend or terminate your access if:</p>
            <ul className="privacy-list">
              <li>You violate these Terms</li>
              <li>You fail to pay required fees</li>
              <li>Your use poses a security, legal, or operational risk</li>
              <li>We discontinue the Services</li>
            </ul>
            <p className="privacy-paragraph">Upon termination, you must stop using all Services, and we may delete stored data unless retention is legally required.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">14. Governing Law</h2>
            <p className="privacy-paragraph">These Terms are governed by the laws of Ontario, Canada without regard to conflict of law principles.</p>
            <p className="privacy-paragraph">Any disputes must be resolved in the courts of that jurisdiction.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">15. Changes to These Terms</h2>
            <p className="privacy-paragraph">Rootping may update or modify these Terms at any time. When changes occur, we will:</p>
            <ul className="privacy-list">
              <li>Update the “Last Updated” date</li>
              <li>Provide notice on the website or via email (when appropriate)</li>
            </ul>
            <p className="privacy-paragraph">Continued use of the Services after changes constitutes acceptance of the updated Terms.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">Contact Information</h2>
            <div className="privacy-contact-list">
              <div className="privacy-contact-item"><span className="dot green"></span><a href="mailto:security@rootping.com" className="privacy-contact-link privacy-contact-email">security@rootping.com</a></div>
              <div className="privacy-contact-item"><span className="dot green"></span><a href="https://www.rootping.com" target="_blank" rel="noreferrer" className="privacy-contact-link privacy-contact-url">https://www.rootping.com</a></div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
    </div>
  );
}
