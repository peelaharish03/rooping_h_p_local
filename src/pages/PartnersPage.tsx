import React from 'react';
import { TrendingUp, Megaphone, Cpu, CheckCircle } from 'lucide-react';
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
            <div className="partners-features">
              <div className="partners-feature">
                <div className="feature-icon"><TrendingUp className="icon-20 brand400" /></div>
                <div>
                  <div className="feature-title">High-Margin Opportunities</div>
                  <div className="feature-sub">Competitive margins and recurring revenue streams for MSPs and resellers.</div>
                </div>
              </div>
              <div className="partners-feature">
                <div className="feature-icon"><Megaphone className="icon-20 purple" /></div>
                <div>
                  <div className="feature-title">Co-Marketing & Support</div>
                  <div className="feature-sub">Access to white-labeled collateral, sales training, and dedicated partner managers.</div>
                </div>
              </div>
              <div className="partners-feature">
                <div className="feature-icon"><Cpu className="icon-20 brand500" /></div>
                <div>
                  <div className="feature-title">Enterprise-Grade Tech</div>
                  <div className="feature-sub">Offer the only platform that combines attack surface management with browser security.</div>
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
                  <input className="partner-input" defaultValue="Jane" />
                </div>
                <div>
                  <div className="partner-label">LAST NAME</div>
                  <input className="partner-input" defaultValue="Doe" />
                </div>
              </div>
              <div>
                <div className="partner-label">WORK EMAIL</div>
                <input className="partner-input" defaultValue="jane@company.com" />
              </div>
              <div>
                <div className="partner-label">COMPANY NAME</div>
                <input className="partner-input" defaultValue="Acme Security Inc." />
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
