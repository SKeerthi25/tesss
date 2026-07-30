import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Building2, MapPin, Phone, Mail, FileText } from 'lucide-react';
import { companyDetails } from '../data/content';

export const AboutSection: React.FC = () => {
  const highlights = [
    { title: "Registered UK Company", desc: `Official Company Registration Number #${companyDetails.number}` },
    { title: "Domestic Specialists", desc: "Dedicated expertise in UK residential building & extensions" },
    { title: "Experienced Professionals", desc: "Fully certified structural engineers & master tradespeople" },
    { title: "Customer-First Approach", desc: "Transparent milestone billing & dedicated project lead" },
    { title: "Reliable Project Delivery", desc: "Rigorous schedule adherence with fixed completion targets" },
    { title: "High-Quality Workmanship", desc: "Backing every project with a 10-Year Structural Guarantee" },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-floating border border-slate-200 dark:border-slate-800">
              <img
                src="/images/uk-scaffolding.jpg"
                alt="TESSCO LTD Engineering Professionals"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              {/* Badge overlay on image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center font-extrabold shrink-0 shadow-md">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{companyDetails.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-blue inline" />
                      {companyDetails.address.street}, {companyDetails.address.town}, {companyDetails.address.postcode}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Accent Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

          {/* Right Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
                About TESSCO LTD
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
                Enterprise Standards for Domestic Building & Construction
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              TESSCO LTD is a premier UK domestic construction firm based in Eastbourne, East Sussex. We bring an enterprise product mindset—rigorous planning, clear communication, transparent milestone pricing, and immaculate quality—to home construction and property extensions.
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              As a fully registered UK company (<strong className="text-slate-900 dark:text-white">Company #17370541</strong>), we bridge the gap between complex engineering standards and personalized customer care. Whether you are building a new residential dwelling, expanding living space, or re-structuring a period property, TESSCO LTD delivers with precision.
            </p>

            {/* Grid of 6 Core Enterprise Pillars */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-brand-blue/30 transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact & Company Number Pill */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <FileText className="w-4 h-4 text-brand-blue" />
                Company Number: <span className="text-slate-900 dark:text-white font-bold">{companyDetails.number}</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <Phone className="w-4 h-4 text-brand-blue" />
                Phone: <span className="text-slate-900 dark:text-white font-bold">{companyDetails.phone}</span>
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <Mail className="w-4 h-4 text-brand-blue" />
                Email: <span className="text-slate-900 dark:text-white font-bold">{companyDetails.email}</span>
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
