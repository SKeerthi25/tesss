import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun, Moon, ShieldCheck, PhoneCall } from 'lucide-react';
import { companyDetails } from '../data/content';
import { PageId } from '../types';

interface NavbarProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  onOpenQuote: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenQuote,
  darkMode,
  setDarkMode,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'why-tessco', label: 'Why TESSCO' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-subtle border-b border-slate-200 dark:border-slate-800 py-3.5'
          : 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm py-4 border-b border-slate-200/60 dark:border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Metallic Gold Accent */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md border border-brand-gold/30 group-hover:scale-105 transition-transform bg-slate-900">
              <img
                src="/images/tessco-logo.png"
                alt="TESSCO LTD Grand Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tight text-slate-900 dark:text-white">
                  TESSCO
                </span>
                <span className="text-xs font-black px-1.5 py-0.5 rounded bg-brand-gold/20 text-brand-gold border border-brand-gold/40">
                  LTD
                </span>
              </div>
              <span className="text-[10px] text-slate-600 dark:text-slate-400 font-bold tracking-wide uppercase flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-brand-gold inline" /> UK Registered #{companyDetails.number}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-extrabold transition-all py-1 border-b-2 ${
                    isActive
                      ? 'text-brand-gold border-brand-gold'
                      : 'text-slate-700 dark:text-slate-300 border-transparent hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Actions & Call CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-300 hover:text-brand-gold transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-gold" />
              <span>{companyDetails.phone}</span>
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-800"
              aria-label="Toggle Dark Mode"
              title="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            {/* Quote Button */}
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-slate-950 text-sm font-black shadow-enterprise hover:shadow-card-hover transition-all duration-200 active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none border border-slate-200 dark:border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 pb-6 border-t border-slate-200 dark:border-slate-800 animate-in slide-in-from-top duration-200 bg-white dark:bg-slate-950 px-2 rounded-b-2xl shadow-xl">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-base px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-brand-gold text-slate-950 font-black shadow-md'
                        : 'text-slate-900 dark:text-slate-100 font-bold hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-gold text-slate-950 font-black text-sm shadow-md"
                >
                  <span>Get Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
