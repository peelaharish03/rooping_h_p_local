import React, { useEffect, useState } from 'react';
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

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [source, setSource] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

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
              <input className="demo-input" defaultValue="John Smith" />
            </div>
            <div>
              <div className="demo-label">WORK EMAIL</div>
              <input className="demo-input" defaultValue="john@company.com" />
            </div>
            <div>
              <div className="demo-label">PHONE NUMBER</div>
              <input className="demo-input" defaultValue="+1 (555) 123-4567" />
            </div>
            <div>
              <div className="demo-label">COMPANY</div>
              <input className="demo-input" defaultValue="Acme Inc." />
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
                <option>Referral</option>
                <option>Conference</option>
                <option>Search</option>
                <option>Other</option>
              </select>
              {errors.source && <p id="source-error" className="mt-1 text-xs text-red-400">{errors.source}</p>}
            </div>
            <label className="demo-consent">
              <input type="checkbox" defaultChecked className="demo-checkbox" />
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
