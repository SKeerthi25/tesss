import React from 'react';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/content';

export const WhyTesscoPage: React.FC = () => {
  const safetyPillars = [
    { title: "HSE Compliance", desc: "Full adherence to UK Health and Safety Executive regulations on all construction sites." },
    { title: "10-Year Guarantee", desc: "Every structural build is backed by a 10-year structural integrity guarantee." },
    { title: "Fixed Price Contracts", desc: "Zero hidden charges. Itemized bill of quantities agreed before breaking ground." },
    { title: "Building Control Sign-Off", desc: "Independent LABC or Approved Inspector sign-off certificates provided upon completion." },
  ];

  return (
    <div className="pt-28 pb-24 bg-slate-50/50 dark:bg-slate-950">
      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">The TESSCO Standard</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Why Property Owners Choose TESSCO LTD
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Learn how our enterprise mindset brings predictability, safety, and superior quality to UK domestic construction.
          </p>
        </div>
      </section>

      {/* Safety & Compliance Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">Quality Assured</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Zero Compromise on Building Safety & Regulations
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              TESSCO LTD (Company #{companyDetails.number}) operates under strict UK statutory building codes. We maintain £5,000,000 Public Liability Insurance and work closely with local building inspectors to guarantee smooth approvals.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {safetyPillars.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold mb-2" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{p.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/roof-scaffolding.jpg"
              alt="TESSCO Safety Standards & Scaffolding"
              className="rounded-2xl shadow-floating border border-slate-200 dark:border-slate-800"
            />
          </div>
        </div>

        {/* Why Choose Us Components */}
        <WhyChooseUs />
      </div>
    </div>
  );
};
