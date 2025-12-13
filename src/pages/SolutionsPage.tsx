import React from 'react';
import { CheckCircle, Shield, Database, Activity, MessageSquare } from 'lucide-react';
import Footer from '../components/Footer';
import './SolutionsPage.css';

type SolutionsPageProps = {
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
};

export default function SolutionsPage({ onNavigate, onOpenDemo }: SolutionsPageProps) {
  return (
    <div className="solutions-page">
      <section className="solutions-hero">
        <div className="solutions-container solutions-center">
          <h1 className="solutions-title">
            <span className="solutions-title-static">Tailored Security </span>
            <span className="solutions-gradient">Solutions</span>
          </h1>
          <p className="solutions-sub">
            Whether you are a cloud-native startup or a global enterprise, RootPing adapts to<br />
            your infrastructure to stop threats at the source.
          </p>
          <div className="solutions-actions">
            <button onClick={() => onNavigate('platform')} className="solutions-cta">Explore Solutions</button>
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="solutions-container solutions-grid">
          <div className="tm-card">
            <div className="tm-inner">
              <div className="tm-head">
                <div className="tm-brand">
                  <Shield className="icon-20" style={{ color: 'rgb(45 212 191 / 1)' }} />
                  <div className="tm-brand-title" style={{ color: '#ffffff' }}>Threat<span style={{ color: 'rgb(45 212 191 / 1)' }}>Monitor</span></div>
                </div>
                <div className="tm-status">
                  <span className="tm-pill" style={{ border: 'none', boxShadow: 'none', background: 'transparent', padding: 0 }}><span className="dot red"></span>Live Incident</span>
                </div>
              </div>

              <div className="tm-metrics-grid">
                <div className="tm-metric-card">
                  <div className="tm-metric-title">Blocked Requests</div>
                  <div className="tm-metric-value">1,248</div>
                </div>
                <div className="tm-metric-card">
                  <div className="tm-metric-title">Malicious Extensions</div>
                  <div className="tm-metric-value" style={{ color: 'rgb(248 113 113 / var(--tw-text-opacity, 1))' }}>0</div>
                </div>
              </div>

              <div className="tm-threats">
                <div className="tm-threat-item">
                  <div className="tm-threat-name" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" x2="22" y1="12" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    phishing-login.com
                  </div>
                  <div className="tm-badge tm-badge--red">BLOCKED</div>
                </div>
                <div className="tm-threat-item">
                  <div className="tm-threat-name" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                      <path d="M12 12v9" />
                      <path d="m16 16-4-4-4 4" />
                    </svg>
                    Personal Dropbox Upload
                  </div>
                  <div className="tm-badge tm-badge--amber">RESTRICTED</div>
                </div>
              </div>
            </div>
          </div>

          <div className="solutions-right">
            <h2 className="solutions-h2">Complete Browser Isolation</h2>
            <p className="solutions-right-sub">
              Protect your workforce from web-borne threats without disrupting<br />
              productivity. Our solution integrates directly into Chrome, Edge, and<br />
              Safari.
            </p>
            <div className="solutions-list">
              {[
                'Zero-day phishing protection',
                'Malicious extension blocking',
                'Data Loss Prevention (DLP) controls',
              ].map((item) => (
                <div key={item} className="solutions-li">
                  <svg className="icon-20" style={{ color: 'rgb(45, 212, 191)' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  <div className="solutions-li-text">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-section">
        <div className="solutions-container solutions-grid2">
          <div>
            <h3 className="solutions-h3">External Attack Surface Management</h3>
            <p className="solutions-sub2">
              See what hackers see. We continuously scan the internet for your<br />
              exposed assets, leaked credentials, and shadow cloud<br />
              infrastructure.
            </p>
            <div className="solutions-list">
              {[
                'Automated asset discovery',
                'Dark web credential monitoring',
                'Misconfigured cloud bucket alerts',
              ].map((item) => (
                <div key={item} className="solutions-li">
                  <CheckCircle className="icon-20 purple" />
                  <div className="solutions-li-text">{item}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="asm-card">
            <div className="asm-head">
              <h3 className="asm-title">ATTACK SURFACE MAP</h3>
              <div className="asm-dots"><span className="dot gray"></span><span className="dot gray"></span></div>
            </div>
            <div className="asm-body">
              <div className="asm-svg-wrap">
                <svg className="asm-svg" viewBox="0 0 540 200">
                  <circle cx="270" cy="100" r="80" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="1" />
                  <circle cx="270" cy="100" r="120" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" />
                  <line x1="270" y1="100" x2="390" y2="60" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
                  <line x1="270" y1="100" x2="180" y2="150" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
                </svg>
              </div>
              <div className="asm-badge asm-badge--pink" style={{ top: '2rem', right: '3rem' }}>Leaked API Key</div>
              <div className="asm-badge asm-badge--amber" style={{ bottom: '2rem', left: '3rem' }}>Public S3 Bucket</div>
              <div className="asm-core">
                <div className="asm-screen">
                  <div className="asm-bar asm-bar--top"></div>
                  <div className="asm-bar asm-bar--bottom"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-section solutions-border-top">
        <div className="solutions-container">
          <h4 className="solutions-h4">Seamless Ecosystem Integration</h4>
          <p className="solutions-sub-centered">RootPing isn’t a silo. We push high-fidelity intelligence directly into the tools your team already uses.</p>
          <div className="ecos-grid">
            <div className="ecos-card group">
              <div className="ecos-iconbox ecos-iconbox--blue">
                <Activity className="icon-20 blue" />
              </div>
              <div className="ecos-title">SIEM & Analytics</div>
              <div className="ecos-card-sub">Feed exposure logs and browser alerts directly into your SOC dashboard.</div>
              <div className="ecos-chips">
                {['Splunk', 'Sentinel', 'QRadar', 'Datadog'].map((v) => (
                  <span key={v} className="ecos-chip">{v}</span>
                ))}
              </div>
            </div>
            <div className="ecos-card group">
              <div className="ecos-iconbox ecos-iconbox--red">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-20 red"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="ecos-title">EDR / NDR / XDR</div>
              <div className="ecos-card-sub">Correlate external exposure data with endpoint telemetry for full context.</div>
              <div className="ecos-chips">
                {['CrowdStrike', 'SentinelOne'].map((v) => (
                  <span key={v} className="ecos-chip">{v}</span>
                ))}
                <div style={{ width: '100%' }}></div>
                <span className="ecos-chip">Microsoft Defender</span>
              </div>
            </div>
            <div className="ecos-card group">
              <div className="ecos-iconbox ecos-iconbox--neutral">
                <MessageSquare className="icon-20 brand300" />
              </div>
              <div className="ecos-title">Collaboration & ITSM</div>
              <div className="ecos-card-sub">Automate ticketing and notify security teams in real-time channels.</div>
              <div className="ecos-chips">
                {['Slack', 'Microsoft Teams', 'Jira'].map((v) => (
                  <span key={v} className="ecos-chip">{v}</span>
                ))}
                <div style={{ width: '100%' }}></div>
                <span className="ecos-chip">ServiceNow</span>
              </div>
            </div>
          </div>
          <div className="ecos-actions">
            <button onClick={onOpenDemo} className="ecos-view-btn">View All Integrations →</button>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
    </div>
  );
}
