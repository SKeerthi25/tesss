import React, { useState } from 'react';
import { Home, Hammer, Maximize2, Building2, Briefcase, FileCheck2, CheckCircle2, Clock } from 'lucide-react';
import { servicesData } from '../data/content';
import { ServiceItem } from '../types';
import { ServiceModal } from '../components/ServiceModal';

interface ServicesPageProps {
  onOpenQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Home': return <Home className="w-6 h-6" />;
      case 'Hammer': return <Hammer className="w-6 h-6" />;
      case 'Maximize2': return <Maximize2 className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'FileCheck2': return <FileCheck2 className="w-6 h-6" />;
      default: return <Building2 className="w-6 h-6" />;
    }
  };

  return (
    <div className="pt-28 pb-24 bg-slate-50/50 dark:bg-slate-950">
      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">Service Catalog</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Domestic Building & Construction Solutions
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4">
            End-to-end UK domestic building services backed by certified structural calculations and fixed milestone quotes.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:shadow-card-hover transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-6">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-gold" /> Est. Timeline: {service.estimatedTimeline}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-brand-gold hover:underline"
                >
                  View Full Scope →
                </button>
                <button
                  onClick={onOpenQuote}
                  className="px-4 py-2 rounded-xl bg-brand-gold text-brand-charcoal text-xs font-bold hover:bg-brand-gold-hover shadow-sm"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuote={onOpenQuote}
      />
    </div>
  );
};
