import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { SplashLoader } from './components/SplashLoader';
import { CookieBanner } from './components/CookieBanner';
import { FloatingContactWidget } from './components/FloatingContactWidget';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { WhyTesscoPage } from './pages/WhyTesscoPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

import { PageId } from './types';

export const App: React.FC = () => {
  const [splashFinished, setSplashFinished] = useState(false);
  const [activePage, setActivePage] = useState<PageId>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false); // Default to pristine Light Mode unless toggled
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderCurrentPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage onOpenQuote={() => setIsQuoteOpen(true)} />;
      case 'about':
        return <AboutPage onOpenQuote={() => setIsQuoteOpen(true)} />;
      case 'services':
        return <ServicesPage onOpenQuote={() => setIsQuoteOpen(true)} />;
      case 'projects':
        return <ProjectsPage onOpenQuote={() => setIsQuoteOpen(true)} />;
      case 'why-tessco':
        return <WhyTesscoPage />;
      case 'careers':
        return <CareersPage />;
      case 'contact':
        return <ContactPage />;
      case 'legal':
        return <LegalPage />;
      default:
        return <HomePage onOpenQuote={() => setIsQuoteOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      
      {/* 5-Second Zoho Style Initial Splash Screen */}
      {!splashFinished && (
        <SplashLoader onComplete={() => setSplashFinished(true)} />
      )}

      {/* Main Website Structure */}
      {splashFinished && (
        <>
          {/* Sticky Navbar */}
          <Navbar
            activePage={activePage}
            setActivePage={setActivePage}
            onOpenQuote={() => setIsQuoteOpen(true)}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          {/* Active Page View */}
          <main className="min-h-screen">
            {renderCurrentPage()}
          </main>

          {/* Minimal Enterprise Footer */}
          <Footer setActivePage={setActivePage} />

          {/* Floating WhatsApp & Call Widget */}
          <FloatingContactWidget />

          {/* Cookie Consent Banner (Accept / Decline) */}
          <CookieBanner />

          {/* Multi-step Instant Quote Estimator Modal */}
          <QuoteModal
            isOpen={isQuoteOpen}
            onClose={() => setIsQuoteOpen(false)}
          />
        </>
      )}

    </div>
  );
};

export default App;
