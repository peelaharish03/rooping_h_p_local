import React, { useEffect } from 'react';
import { Shield, PlayCircle, Zap, Users, Heart, BadgeCheck, Globe } from 'lucide-react';
import Footer from '../components/Footer';
import './CompanyPage.css';

type CompanyPageProps = {
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
};

export default function CompanyPage({ onNavigate, onOpenDemo }: CompanyPageProps) {
  useEffect(() => {
    const handler = () => {
      if (window.location.hash === '#company-hero') {
        const el = document.getElementById('company-hero');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    handler();
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);
  return (
    <div className="company-page">
      <section id="company-hero" className="company-hero">
        <div className="company-container company-center">
          <h1 className="company-title">
            <span className="company-title-static">Welcome to </span>
            <span className="company-gradient">Rootping</span>
          </h1>
          <p className="company-paragraph company-paragraph-strong">
            Rootping is a leader in Exposure Threat Management and Enterprise Browser Security, helping organizations secure their users, data, and cloud environments with precision and <br />speed.
          </p>
          <p className="company-paragraph">
            We eliminate blind spots modern businesses face. Our platform empowers security teams to proactively detect exposure, control browser-based risk, and harden every endpoint accessing critical corporate resources.
          </p>
          <p className="company-paragraph">
            Built by cybersecurity professionals and cloud specialists, Rootping delivers clarity, control, and continuous protection across the attack surface.
          </p>
        </div>
      </section>

      <section className="company-section">
        <div className="company-container">
          <div className="mission-card">
            <div className="mission-inner">
              <div className="mission-icon pulse">
                <Globe className="icon-32 teal400" strokeWidth={1.5} />
              </div>
              <h2 className="mission-title">Our Mission</h2>
              <div className="mission-text">
                <p>
                  Founded with the mission to simplify and strengthen enterprise security, Rootping combines advanced threat intelligence, secure browser controls, and real-time exposure monitoring to protect every session, every user, and every asset.
                </p>
                <p>
                  Whether you're reducing browser threats, securing cloud access, or tightening compliance — Rootping provides the protection and visibility you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="company-container">
          <h3 className="company-subtitle">Featured Videos</h3>
          <div className="videos-grid">
            {[
              'Rootping: Revolutionizing Exposure Threat Management with AI & ML',
              'Enterprise Browser Security — Protect Your Digital World with Rootping',
              'Cybersecurity Matters — Defend What Drives Your Business',
            ].map((t) => (
              <div key={t} className="video-card">
                <div className="video-thumb">
                  <PlayCircle className="icon-48 slate400" />
                </div>
                <div className="video-title">{t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="company-container">
          <h4 className="company-subtitle">Why Choose Rootping?</h4>
          <div className="features-grid">
            {[
              {
                t: 'Deep Expertise in Exposure Threat Management',
                s: 'Our team brings extensive experience in identifying overlooked exposure points, session-based threats, and cloud security gaps — ensuring your environment remains locked down against evolving risks.',
              },
              {
                t: 'Purpose-Built for the Modern Workforce',
                s: 'Security solutions built for distributed teams, cloud-first infrastructures, and browser-centric workflows.',
              },
              {
                t: 'Proactive, Real-Time Protection',
                s: 'Continuous monitoring, session analysis, secure browser enforcement, and automated remediation to stop threats before they impact your business.',
              },
              {
                t: 'Transparent, Reliable, and Trusted',
                s: 'Clear communication, ethical operations, and dependable service — ensuring your business stays protected with confidence.',
              },
              {
                t: 'Driven by Excellence',
                s: 'Relentless focus on customer success with reliable performance and scalable security.',
              },
              {
                t: 'Trusted Technology Partnerships',
                s: 'We work with leading vendors to deliver resilient, scalable, and enterprise-ready protection.',
              },
            ].map((c) => (
              <div key={c.t} className="feature-card">
                <div className="feature-title">{c.t}</div>
                <div className="feature-sub">{c.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="company-container">
          <h4 className="company-subtitle">Our Values</h4>
          <div className="values-grid">
            {[
              { i: <Zap className="icon-24 value-innovation" />, t: 'Innovation', s: 'We stay ahead of emerging threats through constant research and development.' },
              { i: <BadgeCheck className="icon-24 value-integrity" />, t: 'Integrity', s: 'We build trust through transparency, ethical practices, and responsibility.' },
              { i: <Users className="icon-24 value-collaboration" />, t: 'Collaboration', s: 'We work closely with clients to deliver security solutions that make an impact.' },
              { i: <Heart className="icon-24 value-client" />, t: 'Client Focus', s: 'Every decision centers around delivering reliable security outcomes.' },
            ].map((v) => (
              <div key={v.t} className="value">
                <div className="value-icon-wrap">
                  {v.i}
                </div>
                <div className="value-title">{v.t}</div>
                <div className="value-sub">{v.s}</div>
              </div>
            ))}
          </div>
          <div className="contact">
            <h5 className="contact-title">Get in Touch</h5>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-label">GENERAL INQUIRIES</div>
                <a href="mailto:info@rootping.com" className="contact-link">info@rootping.com</a>
              </div>
              <div className="contact-card">
                <div className="contact-label">SECURITY TEAM</div>
                <a href="mailto:security@rootping.com" className="contact-link">security@rootping.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
    </div>
  );
}
