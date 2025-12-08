import React from 'react';
import Footer from '../components/Footer';
import './BlogPage.css';

type BlogPageProps = {
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
};

export default function BlogPage({ onNavigate, onOpenDemo }: BlogPageProps) {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-container blog-center">
          <h1 className="blog-title">
            <span className="blog-title-static">RootPing </span>
            <span className="blog-gradient">Insights</span>
          </h1>
          <p className="blog-sub">
            Expert analysis, threat research, and engineering deep dives into the world of Exposure Management and Browser Security.
          </p>
        </div>
      </section>

      <section className="blog-feature">
        <div className="blog-container">
          <div className="feature-card">
            <div className="feature-thumb">
              <div className="siren-wrap"><span className="siren-dot"></span></div>
            </div>
            <div className="feature-content">
              <div className="feature-meta">THREAT INTELLIGENCE  ·  NOV 24, 2025</div>
              <h2 className="feature-title">The Rise of Browser-Based Attacks in 2025</h2>
              <p className="feature-sub">Why the humble web browser has become the #1 attack vector for modern enterprises, and how legacy security stacks are failing to stop it.</p>
              <button className="feature-link">Read Article <span className="mask-icon icon-16 dark ml-2 icon-arrow-right" /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-list">
        <div className="blog-container blog-grid">
          <div className="blog-card">
            <div className="blog-card-thumb"></div>
            <div className="blog-card-meta">EXPOSURE MANAGEMENT  ·  7 MIN READ</div>
            <div className="blog-card-title">Exposure Management vs. Vulnerability Scanning</div>
            <div className="blog-card-sub">Understanding the critical difference between finding software bugs and seeing the attacker's path to your crown jewels.</div>
            <div className="blog-card-bottom"><span className="author">RootPing Research</span><span className="dot-sep">•</span><span className="date">Nov 20, 2025</span></div>
          </div>

          <div className="blog-card">
            <div className="blog-card-thumb"></div>
            <div className="blog-card-meta">AI SECURITY  ·  6 MIN READ</div>
            <div className="blog-card-title">Securing GenAI: A Guide for CISOs</div>
            <div className="blog-card-sub">From prompt injection to data leakage: How to safely enable ChatGPT and Copilot usage without compromising corporate IP.</div>
            <div className="blog-card-bottom"><span className="author">RootPing Research</span><span className="dot-sep">•</span><span className="date">Nov 15, 2025</span></div>
          </div>

          <div className="blog-card">
            <div className="blog-card-thumb"></div>
            <div className="blog-card-meta">ARCHITECTURE  ·  4 MIN READ</div>
            <div className="blog-card-title">Beyond VPNs: The Case for Browser Security</div>
            <div className="blog-card-sub">As remote work becomes permanent, the heavy-handed VPN model is dying. Learn how browser-enforced security offers a leaner alternative.</div>
            <div className="blog-card-bottom"><span className="author">RootPing Research</span><span className="dot-sep">•</span><span className="date">Nov 10, 2025</span></div>
          </div>

          <div className="blog-card">
            <div className="blog-card-thumb"></div>
            <div className="blog-card-meta">TECHNICAL DEEP DIVE  ·  10 MIN READ</div>
            <div className="blog-card-title">Anatomy of a Cookie Hijacking Attack</div>
            <div className="blog-card-sub">A technical deep dive into how threat actors bypass MFA using stolen session tokens, and how RootPing stops them in real-time.</div>
            <div className="blog-card-bottom"><span className="author">RootPing Research</span><span className="dot-sep">•</span><span className="date">Nov 05, 2025</span></div>
          </div>

          <div className="blog-card">
            <div className="blog-card-thumb"></div>
            <div className="blog-card-meta">RESEARCH  ·  15 MIN READ</div>
            <div className="blog-card-title">Q3 2025 Threat Report</div>
            <div className="blog-card-sub">Our quarterly analysis of the threat landscape, highlighting a 300% increase in social engineering attacks targeting SaaS credentials.</div>
            <div className="blog-card-bottom"><span className="author">RootPing Research</span><span className="dot-sep">•</span><span className="date">Nov 01, 2025</span></div>
          </div>
        </div>
      </section>

      <section className="blog-subscribe">
        <div className="blog-container">
          <div className="subscribe-panel">
            <div className="subscribe-title">Stay Ahead of the Threat Landscape</div>
            <div className="subscribe-sub">Get the latest research and security insights delivered directly to your inbox.</div>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter your work email" className="email-input" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
    </div>
  );
}

