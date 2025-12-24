import React from 'react';
import Footer from '../components/Footer';
import './PrivacyPage.css';

type PrivacyPageProps = {
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
};

export default function PrivacyPage({ onNavigate, onOpenDemo }: PrivacyPageProps) {
  return (
    <div className="privacy-page terms-shift">
      <section className="privacy-hero">
        <div className="privacy-container">
          <div className="privacy-hero-content terms-hero">
            <h1 className="privacy-title">Rootping Privacy Policy</h1>
            <div className="privacy-updated">Last updated: 11/30/2025</div>
            <div className="terms-separator"></div>
            <p className="privacy-intro">Rootping (“Rootping”, “we”, “us”, “our”) is committed to protecting your privacy and maintaining your trust. This</p>
            <p className="privacy-intro terms-line">Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you visit our</p>
            <p className="privacy-intro terms-line">website, use our services, or interact with us.</p>
            <p className="privacy-intro terms-line terms-gap">This Policy applies to all visitors of www.rootping.com and to all products and services we offer, including our</p>
            <p className="privacy-intro terms-line">Threat Exposure Management and Threat Intelligence solutions.</p>
            <p className="privacy-intro terms-line terms-gap">By accessing our website or using our services, you agree to the terms outlined in this Privacy Policy.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">1. Information We Collect</h2>
            <p className="privacy-paragraph">We collect two categories of data:</p>
            
            <div className="privacy-subh">A. Information You Provide Directly</div>
            <p className="privacy-paragraph">This includes personal information you voluntarily submit through forms, contact requests,</p>
            <p className="privacy-paragraph terms-line">demo bookings, email interactions, or account creation, such as:</p>
            <ul className="privacy-list">
              <li>Name</li>
              <li>Email address</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Phone number</li>
              <li>Account login details (if applicable)</li>
              <li>Billing or transaction information</li>
              <li>Any message or information you send to us</li>
            </ul>

            <div className="privacy-subh">B. Information We Collect Automatically</div>
            <p className="privacy-paragraph">When you visit our website, we may automatically collect:</p>
            <ul className="privacy-list">
              <li>IP address</li>
              <li>Device type and browser type</li>
              <li>Pages viewed and time spent</li>
              <li>Referring links</li>
              <li>Cookies, analytics data, and tracking information</li>
              <li>Website interaction behavior (clicks, navigation, downloads)</li>
            </ul>

            <div className="privacy-subh">C. Data Processed Through Our Security Products (If Applicable)</div>
            <p className="privacy-paragraph">Rootping’s Threat Exposure Management and Threat Intelligence products may process data such as:</p>
            <ul className="privacy-list">
              <li>Exposed credentials, domains, or assets you monitor</li>
              <li>Security telemetry or threat indicators</li>
              <li>Publicly available intelligence used to alert you of risks</li>
            </ul>
            <p className="privacy-paragraph">Rootping does not sell or share customer security data with third parties, and this data is used only to provide</p>
            <p className="privacy-paragraph terms-line">the services you requested.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">2. How We Use Your Information</h2>
            <p className="privacy-paragraph">Rootping uses the information collected for purposes such as:</p>
            <ul className="privacy-list">
              <li>Providing and improving our website and services</li>
              <li>Delivering Threat Exposure Management insights</li>
              <li>Responding to contact requests or support inquiries</li>
              <li>Personalizing user experience</li>
              <li>Sending service updates or product announcements</li>
              <li>Enhancing website performance and security</li>
              <li>Protecting Rootping systems from misuse</li>
              <li>Complying with legal requirements</li>
            </ul>
            <p className="privacy-paragraph">We never use your data in ways that conflict with your rights under applicable privacy laws.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">3. Cookies and Tracking Technologies</h2>
            <p className="privacy-paragraph">Rootping uses cookies and similar technologies to analyze website usage, remember your preferences,</p>
            <p className="privacy-paragraph terms-line">improve performance, and support security functionality.</p>
            <p className="privacy-paragraph">You can control or disable cookies through your browser settings. Some features may not work properly if</p>
            <p className="privacy-paragraph terms-line">cookies are disabled.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">4. How We Share Information</h2>
            <p className="privacy-paragraph">We do not sell your personal information.</p>
            <p className="privacy-paragraph">We may share data only in the following cases:</p>
            <ul className="privacy-list">
              <li>Service providers who help operate our website, analytics, hosting, email systems, and payment processing</li>
              <li>Security partners strictly for delivering Rootping’s cyber threat services</li>
              <li>Legal obligations, such as responding to lawful requests or protecting rights and safety</li>
              <li>Business transfers, such as mergers, acquisitions, or corporate restructuring (you will be notified in such cases)</li>
            </ul>
            <p className="privacy-paragraph">All service providers are bound by strict confidentiality and data protection agreements.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">5. International Data Transfers</h2>
            <p className="privacy-paragraph">Rootping may process or store information in countries where we or our service providers operate, including</p>
            <p className="privacy-paragraph terms-line">Canada, the United States, and the European Union.</p>
            <p className="privacy-paragraph">We comply with all applicable data transfer rules, including GDPR mechanisms such as Standard Contractual</p>
            <p className="privacy-paragraph terms-line">Clauses where required.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">6. Data Security</h2>
            <p className="privacy-paragraph">We take data security seriously. Rootping uses industry-standard encryption, network and infrastructure</p>
            <p className="privacy-paragraph terms-line">security controls, continuous monitoring, access controls, and regular audits.</p>
            <p className="privacy-paragraph">While no system is fully immune from risks, we take reasonable precautions to protect your data from</p>
            <p className="privacy-paragraph terms-line">unauthorized access, alteration, or disclosure.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">7. Your Privacy Rights</h2>
            <p className="privacy-paragraph">Depending on your jurisdiction (e.g., GDPR, PIPEDA, CCPA), you may have the right to:</p>
            <ul className="privacy-list">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your information</li>
              <li>Object to or limit processing</li>
              <li>Withdraw consent</li>
              <li>Request data portability</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="privacy-paragraph">To exercise your rights, email us at <a href="mailto:privacy@rootping.com" className="privacy-link">privacy@rootping.com</a>.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">8. Data Retention</h2>
            <p className="privacy-paragraph">We retain personal information only for as long as necessary to provide the services you requested, comply</p>
            <p className="privacy-paragraph terms-line">with legal obligations, resolve disputes, and improve our systems. You may request deletion at any time.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">9. Third-Party Websites</h2>
            <p className="privacy-paragraph">Our website may contain links to external websites. We are not responsible for their privacy practices. We</p>
            <p className="privacy-paragraph terms-line">encourage you to review the privacy policies of those third-party sites.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">10. Children’s Privacy</h2>
            <p className="privacy-paragraph">Rootping does not knowingly collect personal information from individuals under the age of 18. If you believe a</p>
            <p className="privacy-paragraph terms-line">child has provided information to us, please contact us so we can remove it promptly.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">11. Changes to This Privacy Policy</h2>
            <p className="privacy-paragraph">We may update this Privacy Policy from time to time. When changes are made, we will update the “Last</p>
            <p className="privacy-paragraph terms-line">updated” date at the top of the page. Significant changes will be communicated clearly on our website.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
            <h2 className="privacy-h2">12. Contact Us</h2>
            <p className="privacy-paragraph">If you have questions, requests, or concerns about this Privacy Policy or Rootping’s privacy practices, please contact:</p>
            <div className="privacy-contact-list">
              <div className="privacy-contact-item">
                <span className="dot green"></span>
                <span className="privacy-contact-email">privacy@rootping.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
    </div>
  );
}
