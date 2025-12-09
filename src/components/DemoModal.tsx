import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';
import './DemoModal.css';

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function DemoModal({ open, onClose }: DemoModalProps) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="demo-overlay">
      <div className="demo-modal">
        <button aria-label="Close" onClick={onClose} className="demo-close">
          <X className="icon-20" />
        </button>

        <div className="demo-content">
          <div className="demo-icon">
            <CheckCircle className="icon-20" />
          </div>
          <h2 className="demo-title">Request a Demo</h2>
          <p className="demo-subtitle">See how RootPing can secure your exposure and browsers in minutes.</p>

          <form className="demo-form">
            <div>
              <div className="demo-label">FULL NAME</div>
              <input className="demo-input" placeholder="John Smith" />
            </div>
            <div>
              <div className="demo-label">WORK EMAIL</div>
              <input className="demo-input" placeholder="john@company.com" />
            </div>
            <div>
              <div className="demo-label">PHONE NUMBER</div>
              <input className="demo-input" placeholder="+1 (555) 123-4567" />
            </div>
            <div>
              <div className="demo-label">COMPANY</div>
              <input className="demo-input" placeholder="Acme Inc." />
            </div>
            <div>
              <div className="demo-label">JOB ROLE</div>
              <select className="demo-select">
                <option>CISO / CSO</option>
                <option>Security Engineer</option>
                <option>IT Manager</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <div className="demo-label">HOW DID YOU HEAR ABOUT US?</div>
              <select className="demo-select">
                <option>Select an option...</option>
                <option>Search Engine (Google/Bing)</option>
                <option>LinkedIn / Social Media</option>
                <option>Podcaste / News</option>
                 <option>Events / Conference</option>
                <option>Referral</option>
                <option>Other</option>
              </select>
            </div>
            <label className="demo-consent">
              <input type="checkbox" className="demo-checkbox" />
              <span>
                I accept the RootPing <a href="#" className="demo-link">Terms of Service</a> and <a href="#" className="demo-link">Privacy Policy</a>.
              </span>
            </label>
            <button type="button" onClick={onClose} className="demo-cta">Get Started</button>
            <div className="demo-note">No credit card required. 14-day trial included.</div>
          </form>
        </div>
      </div>
    </div>
  );
}
