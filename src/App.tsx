import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PlatformPage from './pages/PlatformPage';
import SolutionsPage from './pages/SolutionsPage';
import PartnersPage from './pages/PartnersPage';
import CompanyPage from './pages/CompanyPage';
import ResourcesPage from './pages/ResourcesPage';
import CareersPage from './pages/CareersPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
// import CookieSettingsPage from './pages/CookieSettingsPage';
import BlogPage from './pages/BlogPage';
import DemoModal from './components/DemoModal';
import './App.css';

export default function App() {
  const [page, setPage] = useState<'home' | 'platform' | 'solutions' | 'partners' | 'company' | 'resources' | 'privacy' | 'terms' | 'careers' | 'blog'>('resources');
  const [showDemo, setShowDemo] = useState(false);

  const onNavigate = (p: string) => {
    if (p === 'platform') setPage('platform');
    else if (p === 'solutions') setPage('solutions');
    else if (p === 'partners') setPage('partners');
    else if (p === 'company') setPage('company');
    else if (p === 'resources') setPage('resources');
    else if (p === 'privacy') setPage('privacy');
    else if (p === 'terms') setPage('terms');
    else if (p === 'careers') setPage('careers');
    else if (p === 'blog') setPage('blog');
    else setPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onOpenDemo = () => {
    setShowDemo(true);
  };

  return (
    <div className="app-root">
      <Navbar onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
      <DemoModal open={showDemo} onClose={() => setShowDemo(false)} />
      {page === 'platform' ? (
        <PlatformPage onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
      ) : page === 'solutions' ? (
        <SolutionsPage onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
      ) : page === 'partners' ? (
        <PartnersPage onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
      ) : page === 'company' ? (
        <CompanyPage onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
      ) : page === 'privacy' ? (
        <PrivacyPage onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
      ) : page === 'terms' ? (
        <TermsPage onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
      ) : page === 'careers' ? (
        <CareersPage onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
      ) : page === 'blog' ? (
        <BlogPage onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
      ) : page === 'resources' ? (
        <ResourcesPage onNavigate={onNavigate} onOpenDemo={onOpenDemo} />
      ) : (
        <div className="home-container">
          <h1 className="home-title">Home</h1>
          <div id="footer" className="home-footer">
            <p className="home-footer-sub">Footer section</p>
          </div>
        </div>
      )}
    </div>
  );
}
