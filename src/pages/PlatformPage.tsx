import React, { useEffect, useRef } from 'react';
import { Shield, CheckCircle, Lock, ChevronRight, Activity, BarChart3, AlertTriangle, Eye, Zap, FileText, FileWarning, CheckCircle2, Fingerprint, Globe, Server, Terminal, FileCheck } from 'lucide-react';
import SentinelOverview from '../components/SentinelOverview';
import Footer from '../components/Footer';
import './PlatformPage.css';

type PlatformPageProps = {
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
};

export default function PlatformPage({ onNavigate, onOpenDemo }: PlatformPageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const width = canvas.width;
    const height = canvas.height;
    const generateCurvePoints = (w: number, h: number, offset: number): Array<[number, number]> => {
      const points: Array<[number, number]> = [];
      const segments = 50;
      for (let i = 0; i <= segments; i++) {
        const x = (i / segments) * w;
        const progress = i / segments;
        const y = h - (h * 0.2 + Math.pow(progress, 1.5) * h * 0.6 + offset);
        points.push([x, y]);
      }
      return points;
    };
    const drawCurve = (c: CanvasRenderingContext2D, points: Array<[number, number]>, color: string) => {
      c.strokeStyle = color;
      c.lineWidth = 3;
      c.lineCap = 'round';
      c.lineJoin = 'round';
      c.beginPath();
      c.moveTo(points[0][0], points[0][1]);
      for (let i = 1; i < points.length - 2; i++) {
        const xc = (points[i][0] + points[i + 1][0]) / 2;
        const yc = (points[i][1] + points[i + 1][1]) / 2;
        c.quadraticCurveTo(points[i][0], points[i][1], xc, yc);
      }
      c.quadraticCurveTo(
        points[points.length - 2][0],
        points[points.length - 2][1],
        points[points.length - 1][0],
        points[points.length - 1][1]
      );
      c.stroke();
    };
    const points1 = generateCurvePoints(width, height, 0);
    const points2 = generateCurvePoints(width, height, 20);
    ctx.clearRect(0, 0, width, height);
    drawCurve(ctx, points1, '#3b82f6');
    drawCurve(ctx, points2, '#ec4899');
  }, []);
  useEffect(() => {
    const handler = () => {
      if (window.location.hash === '#platform-hero') {
        const el = document.getElementById('platform-hero');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    window.addEventListener('hashchange', handler);
    handler();
    return () => window.removeEventListener('hashchange', handler);
  }, []);
  return (
    <div className="platform-page">
      <section id="platform-hero" className="platform-hero">
        <div className="container">
          <div className="center"><div className="pill"><span className="dot"></span>SENTINELWEB ENGINE V2.8.0</div></div>
          <h1 className="platform-heading">
            <span className="platform-heading-line md:text-7xl">One Platform.</span>
            <span className="platform-gradient-text">Total Visibility.</span>
          </h1>
          <p className="platform-sub">
            From the dark web to the browser tab, RootPing unifies exposure management and endpoint security into a single, intelligent nerve center.
          </p>
          <SentinelOverview />
        </div>
      </section>

      <section className="platform-section">
        <div className="container platform-grid">
          <div className="abd-left">
            <div className="abd-lock"><Lock className="icon-24 accent" /></div>
            <h3 className="abd-title">Adaptive Browser Defense</h3>
            <p className="abd-sub">
              The browser is the new endpoint. RootPing turns Chrome, Edge, and<br />
              Safari into enterprise-grade security environments without agents or<br />
              friction. Secure every session, block every threat.
            </p>
            <div className="abd-list">
              {[
                'Block zero-day phishing & drive-by downloads',
                'Prevent data exfiltration to GenAI tools (ChatGPT, etc.)',
                'Secure unmanaged devices (BYOD) & contractors',
                'Full session audit trails & screen capture protection',
              ].map((item) => (
                <div key={item} className="abd-item">
                  <CheckCircle2 className="icon-24 accent" />
                  <span className="abd-item-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="abd-console-wrap">
            <div className="abd-glow"></div>
            <div className="abd-console">
              <div className="abd-console-head">
                <div className="abd-console-icon"><Shield className="icon-32 accent" /></div>
                <h4 className="abd-console-title">Sentinel<span className="accent">Web</span></h4>
                <p className="abd-console-sub">Enterprise Security Console</p>
              </div>
              <form className="abd-form">
                <div>
                  <label className="abd-label">USERNAME</label>
                  <div className="abd-input-wrap">
                    <Fingerprint className="abd-input-icon" />
                    <input type="text" placeholder="admin_user" className="abd-input" />
                  </div>
                </div>
                <div>
                  <label className="abd-label">PASSWORD</label>
                  <div className="abd-input-wrap">
                    <Lock className="abd-input-icon" />
                    <input type="password" placeholder="••••••••" className="abd-input" />
                  </div>
                </div>
                <button type="submit" className="sign-in-btn">Sign In →</button>
                <p className="abd-note">Protected by SentinelWeb Identity Guard.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="platform-container">
        <section className="capabilities-section">
          <h2 className="capabilities-title">Additional Capabilities</h2>
          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-icon">
                <Eye size={32} strokeWidth={2} />
              </div>
              <h3 className="capability-heading">Shadow IT Discovery</h3>
              <p className="capability-description">
                Automatically detect and categorize unmanaged SaaS applications and cloud resources.
              </p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">
                <Zap size={32} strokeWidth={2} />
              </div>
              <h3 className="capability-heading">Automated Takedowns</h3>
              <p className="capability-description">
                One-click remediation for fraudulent domains, impersonation sites, and leaked code.
              </p>
            </div>
            <div className="capability-card">
              <div className="capability-icon">
                <FileCheck size={32} strokeWidth={2} />
              </div>
              <h3 className="capability-heading">Compliance Reporting</h3>
              <p className="capability-description">
                Generate audit-ready reports for SOC2, ISO 27001, and GDPR with a single click.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-card">
            <h2 className="cta-title">Ready to secure your future?</h2>
            <p className="cta-subtitle">
              Get full visibility into your attack surface and secure your workforce today.
            </p>
            <div className="cta-buttons">
              <button onClick={onOpenDemo} className="btn btn-primary">Request Demo</button>
              <button className="btn btn-secondary">Contact Sales</button>
            </div>
          </div>
        </section>
      </div>
      <Footer onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
    </div>
  );
}
