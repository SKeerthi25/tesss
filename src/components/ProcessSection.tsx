import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, DraftingCompass, Hammer, CheckCircle2, Award } from 'lucide-react';
import { processStepsData } from '../data/content';

export const ProcessSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5" />;
      case 'DraftingCompass':
        return <DraftingCompass className="w-5 h-5" />;
      case 'Hammer':
        return <Hammer className="w-5 h-5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 bg-slate-50/70 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
            Our Delivery Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Seamless 5-Step Construction Process
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            From initial architectural discovery to final handover and warranty activation, our process guarantees predictability and zero surprises.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {processStepsData.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                      Step 0{item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:bg-brand-blue group-hover:text-white flex items-center justify-center transition-colors">
                      {getIcon(item.iconName)}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 dark:text-slate-500 mb-3">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Key Deliverable Box */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Key Deliverable
                  </p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    {item.deliverable}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
