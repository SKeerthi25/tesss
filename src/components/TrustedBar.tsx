import React from 'react';
import { ShieldCheck, Award, Building, Star, Scale } from 'lucide-react';
import { companyDetails } from '../data/content';

export const TrustedBar: React.FC = () => {
  const trustIndicators = [
    {
      icon: ShieldCheck,
      title: `Companies House Registered`,
      subtitle: `Company #${companyDetails.number}`,
    },
    {
      icon: Scale,
      title: "UK Building Regulations",
      subtitle: "Full Statutory Compliance",
    },
    {
      icon: Award,
      title: "10-Year Structural Guarantee",
      subtitle: "Comprehensive Warranty",
    },
    {
      icon: Building,
      title: "Domestic Specialists",
      subtitle: "Residential Engineering",
    },
    {
      icon: Star,
      title: "4.9/5 Homeowner Rating",
      subtitle: "Verified Client Satisfaction",
    },
  ];

  return (
    <section className="py-10 bg-slate-50/80 dark:bg-slate-900/60 border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="shrink-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Trust & Accreditation
            </p>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5">
              Trusted by Homeowners & Developers Across the South East
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 w-full md:w-auto">
            {trustIndicators.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 shadow-subtle hover:border-brand-blue/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
