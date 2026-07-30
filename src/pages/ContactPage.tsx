import React from 'react';
import { ContactSection } from '../components/ContactSection';
import { MapSection } from '../components/MapSection';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-12 bg-slate-50/50 dark:bg-slate-950">
      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">Contact Us</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Get In Touch With TESSCO LTD
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Our Eastbourne project team is ready to discuss your building project, extensions, or structural calculations.
          </p>
        </div>
      </section>

      <ContactSection />
      <MapSection />
    </div>
  );
};
