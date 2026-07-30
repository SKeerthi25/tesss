import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { companyDetails } from '../data/content';
import { PageId } from '../types';

interface FooterProps {
  setActivePage: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    setActivePage(page);
    scrollToTop();
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1 & 2: Brand Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-brand-gold/40 shadow-md bg-slate-900">
                <img
                  src="/images/tessco-logo.png"
                  alt="TESSCO LTD Grand Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  TESSCO LTD
                </span>
                <span className="text-xs text-slate-400">Domestic Construction Specialists</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              TESSCO LTD is a registered construction firm in England and Wales (#17370541), delivering high-specification residential builds, property extensions, and structural alterations with enterprise standards.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Registered UK Company #{companyDetails.number}</span>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><button onClick={() => handleNav('home')} className="hover:text-brand-gold transition-colors">Home</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-brand-gold transition-colors">About TESSCO</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-gold transition-colors">Services Catalog</button></li>
              <li><button onClick={() => handleNav('projects')} className="hover:text-brand-gold transition-colors">Featured Projects</button></li>
              <li><button onClick={() => handleNav('why-tessco')} className="hover:text-brand-gold transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => handleNav('careers')} className="hover:text-brand-gold transition-colors">Careers & Hiring</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-brand-gold transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-gold transition-colors">Domestic Building</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-gold transition-colors">Home Renovations</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-gold transition-colors">Property Extensions</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-gold transition-colors">Structural Steelwork</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-gold transition-colors">General Contracting</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-brand-gold transition-colors">Construction Consultation</button></li>
            </ul>
          </div>

          {/* Column 5: Office Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Registered Office
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{companyDetails.address.street}, {companyDetails.address.town}, {companyDetails.address.country}, {companyDetails.address.postcode}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`} className="hover:text-white">{companyDetails.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-white">{companyDetails.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 TESSCO LTD. All Rights Reserved. Company Number: <strong className="text-white">{companyDetails.number}</strong></p>
          
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('legal')} className="hover:text-white">Privacy Policy</button>
            <button onClick={() => handleNav('legal')} className="hover:text-white">Terms & Regulations</button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
