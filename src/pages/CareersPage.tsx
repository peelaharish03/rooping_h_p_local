import React from 'react';
import { Leaf, Globe, Heart, Clock } from 'lucide-react';
import Footer from '../components/Footer';
import './CareersPage.css';

type CareersPageProps = {
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
};

export default function CareersPage({ onNavigate, onOpenDemo }: CareersPageProps) {
  return (
    <div className="careers-page">
      <section className="careers-hero">
        <div className="careers-container careers-center">
          <h1 className="careers-title">
            <span className="careers-title-static">Join the </span>
            <span className="careers-gradient">Mission</span>
          </h1>
          <p className="careers-sub">
            We are building the future of exposure management and browser security. Help us protect the world's most critical data.
          </p>
          <div className="careers-actions">
            <button className="careers-cta">View Open Roles</button>
          </div>

          <div className="careers-benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon"><Leaf className="icon-20 brand400" /></div>
              <div className="benefit-title">High Impact Work</div>
              <div className="benefit-sub">Solve complex problems that affect millions of users globally.</div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Globe className="icon-20 slate300" /></div>
              <div className="benefit-title">Remote First</div>
              <div className="benefit-sub">Work from anywhere. We care about output, not hours in a chair.</div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Heart className="icon-20 red" /></div>
              <div className="benefit-title">Comprehensive Health</div>
              <div className="benefit-sub">Top-tier medical, dental, and vision coverage for you and your family.</div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon"><Clock className="icon-20 purple" /></div>
              <div className="benefit-title">Flexible Time</div>
              <div className="benefit-sub">Unlimited PTO and flexible working hours to maintain balance.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="careers-section">
        <div className="careers-container">
          <h2 className="careers-h2">Open Positions</h2>
          <div className="jobs-list">
            <div className="job-card">
              <div className="job-title">Senior Security Researcher</div>
              
            </div>
            <div className="job-card">
              <div className="job-title">Founding Frontend Engineer</div>
              
            </div>
            <div className="job-card">
              <div className="job-title">Account Executive - Enterprise</div>
             
            </div>
            <div className="job-card job-card--cta">
              <div>
                <div className="job-title">DevOps Engineer</div>
                <div className="job-meta">Infrastructure  ·  Remote (EU)</div>
              </div>
              <button className="apply-btn">Apply Now <span className="mask-icon icon-16 dark ml-2 icon-arrow-right" /></button>
            </div>
          </div>

          <div className="resume-line">
            <span className="resume-text">Don't see your role? We're always looking for talent.</span>
            <a href="mailto:careers@rootping.com" className="resume-link">Email us your resume</a>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
    </div>
  );
}

