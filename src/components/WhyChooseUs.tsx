import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, Receipt, Clock, HardHat, Sparkles } from 'lucide-react';
import { whyChooseUsData } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Receipt':
        return <Receipt className="w-6 h-6" />;
      case 'Clock':
        return <Clock className="w-6 h-6" />;
      case 'HardHat':
        return <HardHat className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      default:
        return <ShieldCheck className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-tessco" className="py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
            Why TESSCO LTD
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Built on Integrity, Engineered for Quality
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            We operate with the standards of leading tech and engineering product companies: structured processes, absolute budget clarity, and uncompromised safety.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-8 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 hover:border-brand-blue/40 dark:hover:border-brand-blue/40 shadow-subtle hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue dark:bg-brand-blue/20 dark:text-blue-400 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  {getIcon(item.iconName)}
                </div>

                {item.badge && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-brand-blue transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
