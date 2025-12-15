import React, { useState, useEffect } from 'react';
import { Shield, Brain, Database, Zap, CheckCircle, Globe, ChevronRight, Lock, Activity, Target, LayoutDashboard, LockKeyhole, Bot, KeyRound, SearchCheck, Network, ScanEye, Chrome, ArrowRight, Landmark, ShoppingBag } from 'lucide-react';
import Footer from '../components/Footer';
import './ResourcesPage.css';

type ResourcesPageProps = {
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
};

const TechIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="10" x2="14" y1="22" y2="2" />
  </svg>
);

const DefenseIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

export default function ResourcesPage({ onNavigate, onOpenDemo }: ResourcesPageProps) {
  const [floatingElements, setFloatingElements] = useState({
    credential: { x: 0, y: 0 },
    malware: { x: 0, y: 0 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingElements({
        credential: {
          x: Math.sin(Date.now() / 1000) * 30,
          y: Math.cos(Date.now() / 1500) * 20,
        },
        malware: {
          x: Math.cos(Date.now() / 1200) * 25,
          y: Math.sin(Date.now() / 1800) * 30,
        },
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="resources-page">
      <section className="resources-hero">
        <div className="resources-container resources-center">
          <div className="center-row">
            <div className="pill"><span className="dot green"></span>UNIFIED EXPOSURE INTELLIGENCE</div>
          </div>
          <h1 className="resources-title">
            <span className="resources-line">See Every <span className="resources-gradient-1">Exposure.</span></span>
            <span className="resources-line">Secure Every <span className="click-gradient">Click</span>.</span>
          </h1>
          <p className="resources-sub">
            A unified security platform that protects your entire digital footprint and
            <br />
            every browser your workforce uses—instantly, intelligently, and at
            <br />
            scale
          </p>
          <div className="resources-actions">
            <button onClick={onOpenDemo} className="resources-demo">
              Request Demo
              <ArrowRight className="icon-16 dark ml-2" />
            </button>
            <button onClick={onOpenDemo} className="resources-trial">
              Start Free Trial
            </button>
          </div>
          <div className="resources-showcase">
            <div className="security-visual-wrap">
              <div className="security-visual">
                <div className="sv-bar">
                  <div className="sv-dots">
                    <span className="sv-dot sv-dot--red"></span>
                    <span className="sv-dot sv-dot--amber"></span>
                    <span className="sv-dot sv-dot--green"></span>
                  </div>
                  <div className="sv-stubs">
                    <span className="sv-stub sv-stub--sm"></span>
                    <span className="sv-stub sv-stub--lg"></span>
                  </div>
                </div>
                <div className="bg-line"></div>

                <div className="center-orbit">
                  <div className="center-circle">
                    <svg
                      className="globe-svg"
                      xmlns=""
                      viewBox="0 0 40 40"
                      aria-hidden="true"
                    >
                      <circle cx="20" cy="20" r="12" />
                      <ellipse cx="20" cy="20" rx="11" ry="6.5" />
                      <ellipse cx="20" cy="20" rx="6.5" ry="11" />
                      <line x1="8" y1="20" x2="32" y2="20" />
                      <line x1="20" y1="8" x2="20" y2="32" />
                    </svg>
                  </div>

                </div>

                <div className="badge badge--left">
                  <span className="badge-icon">!</span>
                  <span className="badge-text">LEAKED_CREDENTIAL</span>
                </div>

                <div className="badge badge--right">
                  <span className="badge-icon">🔒</span>
                  <span className="badge-text">BLOCK_MALWARE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <div className="resources-container">
          <div className="resources-center block-gap">
            <h1 className="resources-section-title">The Platform</h1>
            <p className="resources-section-sub">
              One unified engine covering the entire attack lifecycle, from external
              <br />
              reconnaissance to endpoint execution.
            </p>
          </div>

          <div className="resources-grid2">
            <div className="rp-card group rp-card--emerald">
              <div className="rp-head">
                <div className="rp-iconbox rp-iconbox--emerald"><ScanEye className="icon-24 emerald" /></div>
                <h2 className="rp-title">Unified Exposure Intelligence</h2>
              </div>
              <ul className="rp-list">
                <li className="rp-li"><span className="rp-bullet emerald">•</span><span className="rp-li-text">Continuously map external assets, identities, and cloud footprints.</span></li>
                <li className="rp-li"><span className="rp-bullet emerald">•</span><span className="rp-li-text">AI engine correlates dark-web chatter with OSINT signals.</span></li>
                <li className="rp-li"><span className="rp-bullet emerald">•</span><span className="rp-li-text">Outputs verified, high-priority exposures—not noise.</span></li>
              </ul>
              <div className="rp-terminal"><div className="rp-terminal-text text-brand-400/70">&gt; scan_target: enterprise_assets<br />&gt; found: 3 misconfigured_buckets<br />&gt; correlation: HIGH_CONFIDENCE</div></div>
            </div>

            <div className="rp-card group rp-card--purple">
              <div className="rp-head">
                <div className="rp-iconbox rp-iconbox--purple"><Chrome className="icon-24 purple" /></div>
                <h2 className="rp-title">Adaptive Browser Defense</h2>
              </div>
              <ul className="rp-list">
                <li className="rp-li"><span className="rp-bullet purple">•</span><span className="rp-li-text">Turns any browser (Chrome, Edge, Safari) into a secured environment.</span></li>
                <li className="rp-li"><span className="rp-bullet purple">•</span><span className="rp-li-text">Block phishing, malware, key injection, and AI data leaks.</span></li>
                <li className="rp-li"><span className="rp-bullet purple">•</span><span className="rp-li-text">Enforces fine-grained DLP rules with zero user friction.</span></li>
              </ul>
              <div className="rp-badge">
                <div className="rp-alert">
                  <div className="rp-alert-icon">
                    <svg xmlns="" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(248,113,113)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l7 4v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-4z" />
                      <path d="M12 9v4" />
                      <path d="M12 17h.01" />
                    </svg>
                  </div>
                  <span className="rp-alert-text text-red-400">Phishing Blocked</span>
                </div>
              </div>
            </div>
          </div>

          <div className="agent-cards">
            <div className="agent-row">
              <div>
                <h2 className="agent-titles">One Agent. Total Coverage.</h2>
                <p className="agent-sub">Lightweight agent for managed, BYOD, and VDI endpoints.</p>
              </div>
              <div className="agent-metrics">
                <div className="agent-metric">
                  <div className="agent-values">100%</div>
                  <div className="agent-label">Browser Agnostic</div>
                </div>
                <div className="agent-sep"></div>
                <div className="agent-metric">
                  <div className="agent-values">&lt;10ms</div>
                  <div className="agent-label">Latency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resources-section resources-border-top">
        <div className="resources-container resources-center">
          <div className="center-row"><div className="pill">PROPRIETARY PIPELINE</div></div>
          <h3 className="resources-h3">Threat Flow & AI Engine</h3>
          <div className="pipeline flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="pipeline-item group">
              <div className="pipeline-iconbox"><Database className="icon-52 slate300" /></div>
              <div className="pipeline-title">1. Ingest</div>
              <div className="pipeline-sub">Ingests billions of signals (Dark Web, OSINT) + browser-layer telemetry.</div>
            </div>
            <ChevronRight className="icon-24 slate600 rotate-90 md:rotate-0" />
            <div className="pipeline-item group">
              <div className="pipeline-circle"><Brain className="icon-44 brand300" /></div>
              <div className="pipeline-title">2. Analyze</div>
              <div className="pipeline-sub">Behavioral AI classifies exposures and predicts exploitability in real-time.</div>
            </div>
            <ChevronRight className="icon-24 slate600 rotate-90 md:rotate-0" />
            <div className="pipeline-item group">
              <div className="pipeline-iconbox"><Zap className="icon-52 slate300" /></div>
              <div className="pipeline-title">3. Remediate</div>
              <div className="pipeline-sub">Automated takedowns, blocked sessions, revoked tokens, and SIEM alerts.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <div className="resources-container">
          <h4 className="usecases-title">Strategic Use Cases</h4>
          <div className="usecases-heads">
            <p className="usecases-sub">Deployed across the most demanding environments to solve critical security gaps.</p>
            <div className="usecases-tags">
              {[
                { label: 'Finance', icon: Landmark },
                { label: 'Tech & SaaS', icon: TechIcon },
                { label: 'E-Commerce', icon: ShoppingBag },
                { label: 'Defense', icon: DefenseIcon },
              ].map(({ label, icon: Icon }) => (
                <span key={label} className="usecase-tag">
                  <Icon className="icon-16" />
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="use-grid">
            {[
              { i: <LayoutDashboard className="icon-24 brand400" />, t: 'Attack Surface Management', s: 'Identify leaked secrets, misconfigured buckets, and rogue apps.' },
              { i: <LockKeyhole className="icon-24 brand400" />, t: 'Browser Threat Prevention', s: 'Block zero-day exploits, session tampering, and malicious extensions.' },
              { i: <Bot className="icon-24 brand400" />, t: 'Secure GenAI Adoption', s: 'Prevent prompt-injection attacks and control data shared with AI tools.' },
              { i: <Network className="icon-24 brand400" />, t: 'Passwordless Access', s: 'Secure identity-aware access to apps without VPNs or heavy VDI.' },
              { i: <SearchCheck className="icon-24 brand400" />, t: 'Incident Response', s: 'Rapid correlation of infrastructure exposures + browser events.' },
              { i: <Shield className="icon-24 brand400" />, t: 'Have a specific scenario?', s: 'Our engineers can build custom policies.', gradient: true },
            ].map((c) => (
              <div key={c.t} onClick={() => onNavigate('platform')} className={`use-card ${c.gradient ? 'use-card--gradient' : ''}`}>
                <div className="use-card-head">
                  {!c.gradient && <div className="use-iconbox">{c.i}</div>}
                  <div className="use-title">{c.t}</div>
                  <div className="use-sub">{c.s}</div>
                </div>
                {c.gradient && (
                  <button onClick={() => onNavigate('platform')} className="use-gradient-btn">Contact Engineering →</button>
                )}
              </div>
            ))}
          </div>
          <div className="integrated-title">Seamlessly integrated with</div>
          <div className="integrated-logos">
            {['Splunk', 'Okta', 'Sentinel', 'ServiceNow', 'CrowdStrike'].map((v) => (
              <span key={v} className="integrated-logo">{v}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-section resources-border-top">
        <div className="resources-container">
          <h4 className="why-title">Why RootPing?</h4>
          <div className="why-grid">
            <div className="why-left">
              <div className="why-item-title">Zero Noise, High Precision</div>
              <div className="why-item-sub">AI-based multi-stage validation eliminates false positives across both the <br />attack surface and the browser.</div>
              <div className="why-item-title">Instant Time-to-Value</div>
              <div className="why-item-sub">Cloud-native. No agents on servers. No hardware. No browser <br />replacement required.</div>
              <div className="why-item-title">Global Intelligence Network</div>
              <div className="why-item-sub">Real-time monitoring of dark-web forums, ransomware leak sites, and <br />emerging AI-tool abuse patterns.</div>
            </div>
            <div className="why-stats-grid">
              <div className="stats-col">
                <div className="stat-card stat-card--lg">
                  <div className="stat-value brand300">97%</div>
                  <div className="stat-label">Faster Detection Time</div>
                </div>
                <div className="stat-card stat-card--lg">
                  <div className="stat-value">0-Day</div>
                  <div className="stat-label">Threats Blocked Instantly</div>
                </div>
              </div>
              <div className="stats-col stats-col--offset">
                <div className="stat-card stat-card--sm">
                  <div className="stat-value purple">82%</div>
                  <div className="stat-label">Fewer Browser Incidents</div>
                </div>
                <div className="stat-card stat-card--sm">
                  <div className="stat-value stat-value--blue">10B+</div>
                  <div className="stat-label">Signals Processed Daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resources-section resources-border-top">
        <div className="resources-container">
          <h4 className="trusted-title">Trusted by Security Leaders</h4>
          <div className="trusted-grid">
            {[
              {
                q: 'Finally, a platform that sees everything attackers see—and blocks what no one else can.',
                n: 'CISO',
                r: 'Fortune 500 Fintech',
              },
              {
                q: 'The browser was our last blind spot. Not anymore. The deployment was instant.',
                n: 'VP of Security',
                r: 'Global SaaS Provider',
              },
              {
                q: 'Exposure intel + browser defense in one place is a game-changer for our SOC team.',
                n: 'Director of IT',
                r: 'Healthcare Network',
              },
            ].map((t) => (
              <div key={t.q} className="trusted-card">
                <div className="trusted-quote">“{t.q}”</div>
                <div className="trusted-name" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="trusted-role-icon"></div>
                  {t.n}
                </div>
                <div className="trusted-role">{t.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
    </div>
  );
}
