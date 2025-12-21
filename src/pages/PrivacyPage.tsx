import React from 'react';
import Footer from '../components/Footer';
import './PrivacyPage.css';

type PrivacyPageProps = {
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
};

export default function PrivacyPage({ onNavigate, onOpenDemo }: PrivacyPageProps) {
  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="privacy-container">
          <div className="privacy-hero-content">
            <h1 className="privacy-title">Rootping Privacy Policy</h1>
            <div className="privacy-updated">Last updated: 11/30/2025</div>
            <p className="privacy-intro">
              Rootping ("Rootping", "we", "us", "our") is committed to protecting your privacy and maintaining your trust. This
              Privacy Policy explains how we collect, use, disclose, and safeguard personal information when you visit our
              websites, purchase our services, or interact with us.
            </p>
            <p className="privacy-intro">
              This Policy applies to all visitors of www.rootping.com and to all products and services we offer, including our
              Threat Center resources and internal Threat Intelligence systems.
            </p>
            <p className="privacy-intro">
              By accessing our websites or using our services, you agree to the terms outlined in this Privacy Policy.
            </p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
          <h2 className="privacy-h2">1. Information We Collect</h2>
          <div className="privacy-subh">A. Information You Provide Directly</div>
          <ul className="privacy-list">
            <li>Name</li>
            <li>Email address</li>
            <li>Company name</li>
            <li>Job title</li>
            <li>Phone number</li>
            <li>Account login details (if applicable)</li>
            <li>Inquiry or message details</li>
            <li>Any message or information you send to us</li>
          </ul>

          <div className="privacy-subh">B. Information We Collect Automatically</div>
          <ul className="privacy-list">
            <li>Device type and browser type</li>
            <li>IP address</li>
            <li>Pages visited and time spent</li>
            <li>Referring websites</li>
            <li>Network, analytics, and tracking information</li>
            <li>Downloads (brochure, datasheets, tracking information)</li>
          </ul>

          <div className="privacy-subh">C. Data Processed Through Our Security Products (if applicable)</div>
          <ul className="privacy-list">
            <li>Exposed credentials, domains, or assets you monitor</li>
            <li>Suspicious telemetry or threat indicators</li>
            <li>Activity metadata to improve context and alerting</li>
            <li>Policy actions and settings relevant to your risks</li>
          </ul>
          <p className="privacy-note">Rootping does not sell or share customer security data with third parties, and this data is used only to provide security service updates.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
          <h2 className="privacy-h2">2. How We Use Your Information</h2>
          <ul className="privacy-list">
            <li>Providing and improving our websites and services</li>
            <li>Delivering Threat Exposure Management insights</li>
            <li>Responding to contact requests or support inquiries</li>
            <li>Personalizing user experience</li>
            <li>Sending service updates or product announcements</li>
            <li>Enforcing acceptable performance and security</li>
            <li>Protecting Rootping systems from misuse</li>
            <li>Complying with legal requirements</li>
          </ul>
          <p className="privacy-note">We never use your data in ways that conflict with your rights under applicable privacy laws.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
          <h2 className="privacy-h2">3. Cookies and Tracking Technologies</h2>
          <p className="privacy-paragraph">Rootping uses cookies and similar technologies to analyze website usage, remember your preferences, improve performance, and support security functionality.</p>
          <p className="privacy-paragraph">You can control or disable cookies through your browser settings. Some features may not work properly if cookies are disabled.</p>
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
            <li>Service providers who help operate our websites, analytics, hosting, email systems, and payment processing</li>
            <li>Security partners solely for delivering Rootping’s cyber threat services</li>
            <li>Legal disclosures when required, including to regulators or protecting rights and safety</li>
            <li>Business transfers, such as mergers, acquisitions, or corporate restructuring (you will be notified in such events)</li>
          </ul>
          <p className="privacy-note">All service providers are bound by strict confidentiality and data protection agreements.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
          <h2 className="privacy-h2">5. International Data Transfers</h2>
          <p className="privacy-paragraph">Rootping may process or store information in countries where we or our service providers operate, including Canada, the United States, and the European Union.</p>
          <p className="privacy-paragraph">We comply with all applicable data transfer rules, including GDPR mechanisms such as Standard Contractual Clauses when relevant.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
          <h2 className="privacy-h2">6. Data Security</h2>
          <p className="privacy-paragraph">We take data security seriously. Rootping uses industry-standard encryption, network and infrastructure protections, vulnerability monitoring, access controls, and regular audits.</p>
          <p className="privacy-paragraph">While no system is infallible, we make reasonable precautions to protect your data from unauthorized access, alteration, or disclosure.</p>
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
            <li>Request correction of your information</li>
            <li>Delete or limit processing</li>
            <li>Object to certain processing</li>
            <li>Request data portability</li>
          </ul>
          <ul className="privacy-list">
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
          <p className="privacy-paragraph">We retain personal information only for as long as is necessary to provide the services you requested, comply with legal obligations, resolve disputes, and improve our systems.</p>
          <p className="privacy-paragraph">You may request deletion at any time.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
          <h2 className="privacy-h2">9. Third-Party Websites</h2>
          <p className="privacy-paragraph">Our website may contain links to external websites. We are not responsible for their privacy practices. We encourage you to review the privacy policies of those third-party sites.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
          <h2 className="privacy-h2">10. Children’s Privacy</h2>
          <p className="privacy-paragraph">Rootping does not knowingly collect personal information from individuals under the age of 18. If you believe a child has provided information to us, please contact us so we can remove it promptly.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
          <h2 className="privacy-h2">11. Changes to This Privacy Policy</h2>
          <p className="privacy-paragraph">We may update this Privacy Policy from time to time. When changes are made, we will update the “Last updated” date at the top of the page. Significant changes will be communicated clearly on our website.</p>
          </div>
        </div>
      </section>

      <section className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-panel">
          <h2 className="privacy-h2">12. Contact Us</h2>
          <p className="privacy-paragraph">If you have questions, requests, or concerns about this Privacy Policy or Rootping’s privacy practices, please contact:</p>
          <div className="privacy-contact-list">
            <div className="privacy-contact-item"><span>📧</span><a href="mailto:security@rootping.com" className="privacy-contact-link privacy-contact-email">security@rootping.com</a></div>
            <div className="privacy-contact-item"><span>🌐</span><a href="https://www.rootping.com" target="_blank" rel="noreferrer" className="privacy-contact-link privacy-contact-url">https://www.rootping.com</a></div>
          </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
    </div>
  );
}

