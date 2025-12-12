import React from 'react';
import { CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import './PartnersPage.css';

type PartnersPageProps = {
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
};

export default function PartnersPage({ onNavigate, onOpenDemo }: PartnersPageProps) {
  return (
    <div className="partners-page">
      <section className="partners-hero">
        <div className="partners-container">
          <h1 className="partners-title">
            <span className="partners-title-static">Partner with </span>
            <span className="partners-gradient">RootPing</span>
          </h1>
          <p className="partners-sub">
            Join forces with the leader in unified exposure management. Together, we can secure the digital ecosystem.
          </p>
        </div>
      </section>

      <section className="partners-section">
        <div className="partners-container partners-grid">
          <div>
            <h2 className="partners-h2">Why Partner With Us?</h2>
            <div className="partners-featuress">
              <div className="partners-feature">
                <div className="feature-icon feature-icon--emerald">
                  <svg className="feature-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>
                </div>
                <div>
                  <div className="feature-new">High-Margin Opportunities</div>
                  <div className="feature-sub">Competitive margins and recurring revenue streams for MSPs and <br />resellers.</div>
                </div>
              </div>
              <div className="partners-feature">
                <div className="feature-icon feature-icon--purple">
                  <svg className="feature-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <div className="feature-new">Co-Marketing & Support</div>
                  <div className="feature-sub">Access to white-labeled collateral, sales training, and dedicated <br />partner managers.</div>
                </div>
              </div>
              <div className="partners-feature">
                <div className="feature-icon feature-icon--blue">
                  <svg className="feature-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 12h4" />
                    <path d="M10 8h4" />
                    <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
                  </svg>
                </div>
                <div>
                  <div className="feature-new">Enterprise-Grade Tech</div>
                  <div className="feature-sub">Offer the only platform that combines attack surface <br />management with browser security.</div>
                </div>
              </div>
            </div>

            <div className="partner-types">
              <div className="partner-types-title">Partner Types</div>
              <div className="partner-types-list">
                {[
                  'Managed Security Service Providers (MSSP)',
                  'Value Added Resellers (VAR)',
                  'Technology Alliance Partners',
                ].map((t) => (
                  <div key={t} className="partner-types-item">
                    <CheckCircle className="icon-20 brand400" />
                    <div className="partner-types-text">{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="partner-form">
            <div className="partner-form-title">Become a Partner</div>
            <div className="partner-form-sub">Fill out the form below and our channel team will reach out within 24 hours.</div>
            <form className="partner-form-body">
              <div className="partner-form-row">
                <div>
                  <div className="partner-label">FIRST NAME</div>
                  <input className="partner-input" placeholder="Jane" />
                </div>
                <div>
                  <div className="partner-label">LAST NAME</div>
                  <input className="partner-input" placeholder="Doe" />
                </div>
              </div>
              <div>
                <div className="partner-label">WORK EMAIL</div>
                <input className="partner-input" placeholder="jane@company.com" />
              </div>
              <div>
                <div className="partner-label">COMPANY NAME</div>
                <input className="partner-input" placeholder="Acme Security Inc." />
              </div>
              <div>
                <div className="partner-label">PARTNERSHIP INTEREST</div>
                <select className="partner-select">
                  <option>Reseller / VAR</option>
                  <option>MSSP</option>
                  <option>Technology Alliance</option>
                </select>
              </div>
              <button type="button" className="partner-submit">Submit Application</button>
              <div className="partner-note">By submitting this form, you agree to our Privacy Policy.</div>
            </form>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
    </div>
  );
}
