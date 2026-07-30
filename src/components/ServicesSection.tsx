import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Hammer, Maximize2, Building2, Briefcase, FileCheck2, ArrowRight, ChevronRight } from 'lucide-react';
import { servicesData } from '../data/content';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onOpenQuote: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-6 h-6" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6" />;
      case 'Maximize2':
        return <Maximize2 className="w-6 h-6" />;
      case 'Building2':
        return <Building2 className="w-6 h-6" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6" />;
      case 'FileCheck2':
        return <FileCheck2 className="w-6 h-6" />;
      default:
        return <Building2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50/70 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Domestic Construction Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            From new residential builds to heavy structural steelwork and modern property extensions, every project is delivered with enterprise precision and fixed pricing.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                {/* Minimal Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-brand-blue dark:hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Scope Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOpenQuote}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-brand-blue hover:text-white transition-colors"
                  title="Request Quote"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Scope Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
};
