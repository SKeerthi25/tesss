import React from 'react';
import { FileText, Lock, Scale } from 'lucide-react';
import { companyDetails } from '../data/content';

export const LegalPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-slate-200">
      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">Legal & Governance</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Official company disclosure for TESSCO LTD (Company #{companyDetails.number}).
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-12">
        {/* Company Identity Box */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-subtle flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{companyDetails.name}</h3>
            <p className="text-xs text-slate-500">Registered Office: {companyDetails.address.street}, {companyDetails.address.town}, {companyDetails.address.postcode}</p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-brand-gold/10 text-brand-gold text-xs font-bold border border-brand-gold/20">
            Company #{companyDetails.number}
          </div>
        </div>

        {/* Privacy Statement */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-brand-gold" />
            1. Privacy Policy & Data Protection (GDPR)
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            TESSCO LTD is committed to protecting your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018. Any personal information provided through our website inquiry forms or quote wizard is collected solely for the purpose of communicating regarding your requested domestic building services.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            We do not sell, rent, or trade client details with third parties. Data is held securely and retained only for as long as necessary to fulfill statutory construction contracts and 10-year structural warranty obligations.
          </p>
        </div>

        {/* Terms of Service */}
        <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-gold" />
            2. Terms of Building Contracts & Quotations
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            All formal building quotations provided by TESSCO LTD are itemized fixed-price proposals based on supplied architectural drawings and structural engineer calculations. Quotes remain valid for 30 days from issuance.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Work commences upon formal contract signing and stage-payment milestone agreement. Any requested variations during construction will be documented in writing prior to execution.
          </p>
        </div>

        {/* UK Building Regs */}
        <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Scale className="w-5 h-5 text-brand-gold" />
            3. UK Building Regulations & Health and Safety
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            All work carried out by TESSCO LTD complies with statutory Building Regulations 2010 (England & Wales). Independent Building Control inspection certificates (LABC / Approved Inspector) are arranged by TESSCO LTD upon project handover.
          </p>
        </div>
      </div>
    </div>
  );
};
