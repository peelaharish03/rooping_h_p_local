import React from 'react';
import { Shield, Twitter, Linkedin, Github } from 'lucide-react';
import './Footer.css';

type FooterProps = {
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
};

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDemo }) => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__col">
            <a href="/" className="footer__brand">
              <Shield className="footer__brand-icon" />
              <span className="footer__brand-title">ROOTPING</span>
            </a>
            <p className="footer__desc">
              The first unified platform for Exposure Threat Management and Enterprise Browser Security. 
              Secure your digital footprint today.
            </p>
            <div className="footer__socials">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="GitHub">
                <Github size={16} />
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Platform</h4>
            <ul className="footer__list">
              <li>
                <a href="#exposure-intelligence" className="footer__link" onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = 'platform-hero';
                  onNavigate('platform');
                }}>Exposure Intelligence</a>
              </li>
              <li>
                <a href="#browser-security" className="footer__link" onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = 'platform-hero';
                  onNavigate('platform');
                }}>Browser Security</a>
              </li>
              <li>
                <a href="#ai-threat-engine" className="footer__link" onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = 'platform-hero';
                  onNavigate('platform');
                }}>AI Threat Engine</a>
              </li>
              <li>
                <a href="#partners" className="footer__link" onClick={(e) => {
                  e.preventDefault();
                  onNavigate('partners');
                }}>Partners</a>
              </li>
              <li>
                <a href="#trust-center" className="footer__link" onClick={(e) => {
                  e.preventDefault();
                  onNavigate('privacy');
                }}>Trust Center</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__list">
              <li>
                <a href="#about" className="footer__link" onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = 'company-hero';
                  onNavigate('company');
                }}>About Us</a>
              </li>
              <li>
                <a href="#careers" className="footer__link" onClick={(e) => {
                  e.preventDefault();
                  onNavigate('careers');
                }}>Careers</a>
              </li>
              <li>
                <a href="#blog" className="footer__link" onClick={(e) => {
                  e.preventDefault();
                  onNavigate('blog');
                }}>Blog</a>
              </li>
              <li>
                <a href="#contact" className="footer__link" onClick={(e) => {
                  e.preventDefault();
                  onOpenDemo();
                }}>Contact</a>
              </li>
              <li>
                <a href="#legal" className="footer__link" onClick={(e) => {
                  e.preventDefault();
                  onNavigate('privacy');
                }}>Legal</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            &copy; 2025 RootPing Inc. All rights reserved.
          </div>
          <div className="footer__bottom-links">
            <a href="/privacy" className="footer__bottom-link" onClick={(e) => {
              e.preventDefault();
              onNavigate('privacy');
            }}>Privacy Policy</a>
            <a href="/terms" className="footer__bottom-link" onClick={(e) => {
              e.preventDefault();
              onNavigate('terms');
            }}>Terms of Service</a>
            <a href="#cookie-settings" className="footer__bottom-link" onClick={(e) => {
              e.preventDefault();
              onNavigate('terms');
            }}>Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
