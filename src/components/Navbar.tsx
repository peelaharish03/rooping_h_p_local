import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

type Link = { name: string; page?: string; href?: string };

type NavbarProps = {
  onNavigate: (page: string) => void;
  onOpenDemo: () => void;
};

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links: Link[] = [
    { name: 'Platform', page: 'platform' },
    { name: 'Solutions', page: 'solutions' },
    { name: 'Partners', page: 'partners' },
    { name: 'Company', page: 'company' },
    { name: 'Resources', page: 'resources' },
  ];

  const handleClick = (l: Link) => {
    if (l.page) onNavigate(l.page);
    else if (l.href) {
      onNavigate('home');
      const href = l.href;
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobile(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-row">
          <div className="brand" onClick={() => onNavigate('resources')}>
            <div className="brand-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="brand-title">
              ROOT<span className="brand-accent">PING</span>
            </span>
          </div>

          <div className="nav-links">
            {links.map((l) => (
              <button
                key={l.name}
                onClick={() => handleClick(l)}
                className="nav-link"
              >
                {l.name}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <div className="login-group">
              <button className="login-button">
                <span>Login</span>
                <span className="mask-icon icon-16 icon-chevron-down" />
              </button>
              <div className="dropdown">
                <div className="dropdown-panel">
                  <div className="dropdown-content">
                    {[
                      { t: 'Exposure Threat Management', s: 'External attack surface monitoring' },
                      { t: 'Enterprise Browser Security', s: 'Secure browser isolation & DLP' },
                    ].map((i) => (
                      <button key={i.t} className="dropdown-item">
                        <div className="dropdown-item-title">{i.t}</div>
                        <div className="dropdown-item-sub">{i.s}</div>
                      </button>
                    ))}
                    <div className="dropdown-sep" />
                    <button className="dropdown-console">
                      <span>Rootping UCP Console</span>
                      <span className="mask-icon icon-12 brand500 icon-shield" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={onOpenDemo} className="demo-btn">Get Demo</button>
          </div>

          <button onClick={() => setMobile(!mobile)} className="mobile-trigger">
            {mobile ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="mobile-menu">
          <div className="mobile-inner">
            {links.map((l) => (
              <button
                key={l.name}
                onClick={() => handleClick(l)}
                className="mobile-link"
              >
                {l.name}
              </button>
            ))}

            <div className="mobile-section">
              <div className="mobile-heading">Log In To</div>
              <button className="mobile-item">Exposure Threat Management</button>
              <button className="mobile-item">Enterprise Browser Security</button>
              <button className="mobile-item brand400">Rootping UCP Console</button>

              <button
                onClick={() => {
                  onOpenDemo();
                  setMobile(false);
                }}
                className="mobile-demo"
              >
                Get Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
