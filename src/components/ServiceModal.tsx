import React from 'react';
import { X, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onOpenQuote }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-floating relative overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">TESSCO Service Scope</span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">{service.title}</h3>
          </div>
        </div>

        {/* Full Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Key Information Box */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/70">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold">
              <Clock className="w-4 h-4 text-brand-blue" />
              <span>Estimated Duration</span>
            </div>
            <p className="text-base font-bold text-slate-900 dark:text-white mt-1">
              {service.estimatedTimeline}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/70">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Key Guarantee</span>
            </div>
            <p className="text-base font-bold text-slate-900 dark:text-white mt-1">
              {service.keyBenefit}
            </p>
          </div>
        </div>

        {/* Deliverables / Scope Checklist */}
        <div className="mb-8">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
            What is Included in {service.title}
          </h4>
          <div className="space-y-2.5">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold shadow-md transition-all"
          >
            <span>Request Quote for This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
