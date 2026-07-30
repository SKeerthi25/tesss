import React from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';
import { testimonialsData } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/70 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Reviews from Homeowners & Developers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Read what property owners across Eastbourne, Brighton, and Sussex say about building with TESSCO LTD.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Project Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {item.projectType}
                  </span>
                </div>

                {/* Minimal Clean Quote */}
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.clientName}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-brand-blue" />
                    {item.location}
                  </p>
                </div>
                <span className="text-[11px] font-medium text-slate-400">
                  {item.date}
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
