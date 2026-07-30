import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, CheckCircle2, Building2, Briefcase } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const pillars = [
    {
      title: "Building Better Homes",
      subtitle: "Precision Domestic Builds",
      icon: Building2,
    },
    {
      title: "Built on Trust",
      subtitle: "Transparent Fixed Pricing",
      icon: ShieldCheck,
    },
    {
      title: "Excellence in Construction",
      subtitle: "Uncompromised Quality",
      icon: CheckCircle2,
    },
    {
      title: "Reliable Construction Solutions",
      subtitle: "Turnkey Contracting",
      icon: Briefcase,
    },
    {
      title: "Building with Confidence",
      subtitle: "10-Year Warranty Guaranteed",
      icon: Award,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 opacity-20 enterprise-grid pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">
            Our Core Pillars
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            The TESSCO LTD Commitment
          </h3>
        </div>

        {/* 5 Pillar Cards (Numbers Removed as Requested) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="text-center p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-brand-gold/50 shadow-lg flex flex-col items-center justify-center space-y-3 group transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-slate-950 transition-colors shadow-md">
                  <IconComponent className="w-6 h-6 stroke-[2.2]" />
                </div>

                <h4 className="text-sm font-black text-white group-hover:text-brand-gold transition-colors leading-snug">
                  {item.title}
                </h4>

                <p className="text-[11px] font-semibold text-slate-400">
                  {item.subtitle}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
