import React from 'react';
import { ArrowRight } from 'lucide-react';
import { companyDetails, teamMembersData } from '../data/content';

interface AboutPageProps {
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote }) => {
  return (
    <div className="pt-28 pb-24 bg-slate-50/50 dark:bg-slate-950">
      
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 enterprise-grid opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">
            About TESSCO LTD
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Pioneering Enterprise Standards in UK Domestic Construction
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Registered Company <strong className="text-brand-gold">#{companyDetails.number}</strong> based in Eastbourne, delivering precision residential builds and extensions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        
        {/* Company Overview & Legal Identity */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Company Profile</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Built on Technical Precision & Transparent Integrity
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              TESSCO LTD is a premier UK construction firm incorporated in England and Wales (<strong className="text-slate-900 dark:text-white">Company Number: 17370541</strong>). Operating out of 204a Seaside, Eastbourne, BN22 7QT, we specialize in high-end domestic building construction, single and multi-storey house extensions, Period property renovations, and complex structural modifications.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Inspired by the product rigor of companies like Zoho, Stripe, and Apple, we eliminate guesswork from domestic construction. Every client receives itemized milestone contracts, real-time progress reports, and a 10-Year Structural Integrity Warranty.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-brand-charcoal font-bold text-sm shadow-md transition-all"
              >
                <span>Request Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-floating border border-slate-200 dark:border-slate-800">
              <img
                src="/images/eco-townhouses.jpg"
                alt="TESSCO Construction Engineering Site"
                className="w-full h-96 object-cover"
              />
              <div className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Registered UK Office</h4>
                  <p className="text-xs text-slate-500">204a Seaside, Eastbourne, BN22 7QT</p>
                </div>
                <div className="px-3 py-1 rounded bg-brand-gold/10 text-brand-gold text-xs font-bold border border-brand-gold/20">
                  Co. #{companyDetails.number}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-gold">Leadership Team</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Senior Construction Leadership</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Our site operations, structural calculations, and commercial quotes are managed by certified UK engineers and surveyors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembersData.map((member) => (
              <div key={member.id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:shadow-card-hover transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-brand-gold/10 text-brand-gold">
                  {member.credentials}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3">{member.name}</h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">{member.role}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
