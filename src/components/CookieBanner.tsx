import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Check, X } from 'lucide-react';
import { companyDetails } from '../data/content';

export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('tessco_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('tessco_cookie_consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('tessco_cookie_consent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-lg z-[9999] p-5 sm:p-6 rounded-2xl bg-slate-950 border-2 border-brand-gold/40 text-white shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
        >
          {/* Header & Description */}
          <div className="flex items-start gap-3.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-brand-gold text-slate-950 flex items-center justify-center shrink-0 shadow-md">
              <Cookie className="w-5 h-5 stroke-[2.4]" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="text-sm font-extrabold text-white tracking-wide">
                  Cookie & Privacy Preferences
                </h4>
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
                  UK Compliance
                </span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                TESSCO LTD (Company #{companyDetails.number}) uses cookies to analyze site traffic, optimize technical performance, and support our domestic building services. Please choose whether to accept or decline cookies.
              </p>
            </div>
          </div>

          {/* Action Buttons Side-by-Side (Full Width Responsive) */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={handleDecline}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <X className="w-4 h-4 text-slate-400" />
              <span>Decline</span>
            </button>

            <button
              type="button"
              onClick={handleAccept}
              className="w-full py-2.5 px-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-slate-950 text-xs font-black shadow-lg transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>Accept Cookies</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
