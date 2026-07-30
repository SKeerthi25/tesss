import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, PhoneCall, MessageSquare } from 'lucide-react';
import { companyDetails } from '../data/content';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const whatsappUrl = `https://wa.me/447345848506?text=Hello%20TESSCO%20LTD,%20I%20would%20like%20to%20inquire%20about%20a%20construction%20project.`;

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
      
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 enterprise-grid opacity-40 pointer-events-none" />
      
      {/* Soft Gold Glow Illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Verification Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs font-extrabold text-slate-900 dark:text-slate-200 shadow-subtle">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>UK Domestic Building Specialists</span>
              <span className="text-slate-400 dark:text-slate-700">|</span>
              <span className="text-brand-gold font-black">Co. #{companyDetails.number}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Building Quality Homes with <span className="text-brand-gold">Precision & Trust</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-slate-700 dark:text-slate-300 max-w-2xl font-medium leading-relaxed">
              TESSCO LTD delivers reliable domestic construction services across Eastbourne and Sussex with fixed milestone pricing, structural guarantees, and customer satisfaction.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-slate-950 text-base font-black shadow-enterprise hover:shadow-card-hover transition-all duration-200 active:scale-95 group"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-base font-bold shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>WhatsApp Message</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-300">10-Yr Structural Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-300">Fixed Milestone Quotes</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-300">UK Building Regs</span>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Image Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Sleek Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-floating border border-slate-200 dark:border-slate-800 group bg-slate-900">
                <img
                  src="/images/hero-site.jpg"
                  alt="TESSCO LTD UK Building Project Site"
                  className="w-full h-[360px] sm:h-[440px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                
                {/* Clean Bottom Card with Call & WhatsApp Buttons */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/95 backdrop-blur-md border border-slate-800 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 font-semibold uppercase">Registered HQ</p>
                      <p className="text-xs font-bold text-white">Eastbourne, East Sussex</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <a
                      href="tel:07345848506"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-brand-gold" />
                      <span>Call</span>
                    </a>
                    
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
