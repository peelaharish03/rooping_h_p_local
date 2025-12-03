import React, { useState, useEffect } from 'react';
import { Shield, Brain, Database, Zap, CheckCircle, Globe, ChevronRight, Lock, Activity, Target, LayoutDashboard, LockKeyhole, Bot, KeyRound, SearchCheck, Network, ScanEye, Chrome, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import './ResourcesPage.css';

type ResourcesPageProps = {
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
};

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
            <span className="resources-line">Secure Every <span className="resources-gradient-2">Click.</span></span>
          </h1>
          <p className="resources-sub">
            A unified security platform that protects your entire digital footprint and every browser your workforce uses — instantly, intelligently, and at scale.
          </p>
          <div className="resources-actions">
            <button onClick={onOpenDemo} className="resources-demo">
              Request Demo
              <ArrowRight className="icon-16 dark ml-2" />
            </button>
            <button onClick={onOpenDemo} className="resources-trial">Start Free Trial</button>
          </div>
          <div className="resources-showcase">
            <div className="demo-card">
              <div className="demo-head">
                <div className="demo-dots"><span className="dot red"></span><span className="dot amber"></span><span className="dot green"></span></div>
              </div>
              <div className="demo-body">
                <div className="neon-center">
                  <div className="neon-core">
                    <div className="glow-blue"></div>
                    <div className="glow-teal"></div>
                    <div className="neon-border"></div>
                    <svg className="spin-slow" width="40" height="40" viewBox="0 0 40 40">
                      <defs>
                        <filter id="neon_glow">
                          <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="#00F5FF" floodOpacity="0.9" />
                          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#00C2FF" floodOpacity="0.7" />
                        </filter>
                      </defs>
                      <g stroke="#00F5FF" strokeWidth="1.5" fill="none" opacity="0.95" filter="url(#neon_glow)">
                        <circle cx="20" cy="20" r="12" />
                        <ellipse cx="20" cy="20" rx="11" ry="6.5" />
                        <ellipse cx="20" cy="20" rx="6.5" ry="11" transform="rotate(90 20 20)" />
                        <line x1="8" y1="20" x2="32" y2="20" />
                        <line x1="20" y1="8" x2="20" y2="32" />
                      </g>
                    </svg>
                  </div>

                  <div
                    className="abs-center"
                    style={{
                      transform: `translate(calc(-50% + ${floatingElements.credential.x}px), calc(-50% + ${floatingElements.credential.y}px))`,
                      transition: 'transform 0.05s linear',
                    }}
                  >
                    <div className="label label--red" style={{ left: '-12rem', top: '-3rem' }}>
                      <span className="label-text">! LEAKED_CREDENTIAL</span>
                    </div>
                  </div>

                  <div
                    className="abs-center"
                    style={{
                      transform: `translate(calc(-50% + ${floatingElements.malware.x}px), calc(-50% + ${floatingElements.malware.y}px))`,
                      transition: 'transform 0.05s linear',
                    }}
                  >
                    <div className="label label--purple" style={{ right: '-11rem', top: '4rem' }}>
                      <Lock className="icon-16 purple" />
                      <span className="label-text">BLOCK_MALWARE</span>
                    </div>
                  </div>
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
              <div className="rp-terminal"><div className="rp-terminal-text">&gt; scan_target: enterprise_assets<br />&gt; found: 3 misconfigured_buckets<br />&gt; correlation: HIGH_CONFIDENCE</div></div>
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
                  <div className="rp-alert-icon"><Shield className="icon-12 red" /></div>
                  <span className="rp-alert-text red">Phishing Blocked</span>
                </div>
              </div>
            </div>
          </div>

          <div className="agent-card">
            <div className="agent-row">
              <div>
                <h2 className="agent-title">One Agent. Total Coverage.</h2>
                <p className="agent-sub">Lightweight agent for managed, BYOD, and VDI endpoints.</p>
              </div>
              <div className="agent-metrics">
                <div className="agent-metric">
                  <div className="agent-value">100%</div>
                  <div className="agent-label">Browser Agnostic</div>
                </div>
                <div className="agent-sep"></div>
                <div className="agent-metric">
                  <div className="agent-value">&lt;10ms</div>
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
          <div className="pipeline">
            <div className="pipeline-item group">
              <div className="pipeline-iconbox"><Database className="icon-24 slate300" /></div>
              <div className="pipeline-title">1. Ingest</div>
              <div className="pipeline-sub">Ingests billions of signals (Dark Web, OSINT) + browser-layer telemetry.</div>
            </div>
            <ChevronRight className="icon-24 slate600" />
            <div className="pipeline-item group">
              <div className="pipeline-circle">
                <div className="pipeline-inner"><Brain className="icon-24 brand300" /></div>
              </div>
              <div className="pipeline-title">2. Analyze</div>
              <div className="pipeline-sub">Behavioral AI classifies exposures and predicts exploitability in real-time.</div>
            </div>
            <ChevronRight className="icon-24 slate600" />
            <div className="pipeline-item group">
              <div className="pipeline-iconbox"><Zap className="icon-24 slate300" /></div>
              <div className="pipeline-title">3. Remediate</div>
              <div className="pipeline-sub">Automated takedowns, blocked sessions, revoked tokens, and SIEM alerts.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="resources-section">
        <div className="resources-container">
          <div className="usecases-head">
            <div>
              <h4 className="usecases-title">Strategic Use Cases</h4>
              <p className="usecases-sub">Deployed across the most demanding environments to solve critical security gaps.</p>
            </div>
            <div className="usecases-tags">
              {['Finance', 'Tech & SaaS', 'E-Commerce', 'Defense'].map((v) => (
                <span key={v} className="usecase-tag">{v}</span>
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
              <div className="why-item-sub">AI-based multi-stage validation eliminates false positives across both the attack surface and the browser.</div>
              <div className="why-item-title">Instant Time-to-Value</div>
              <div className="why-item-sub">Cloud-native. No agents on servers. No hardware. No browser replacement required.</div>
              <div className="why-item-title">Global Intelligence Network</div>
              <div className="why-item-sub">Real-time monitoring of dark-web forums, ransomware leak sites, and emerging AI-tool abuse patterns.</div>
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
                <div className="trusted-name">{t.n}</div>
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
