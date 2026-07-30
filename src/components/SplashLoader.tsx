import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { companyDetails } from '../data/content';

interface SplashLoaderProps {
  onComplete: () => void;
}

export const SplashLoader: React.FC<SplashLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 500);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setVisible(false);
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ backgroundColor: '#090A0F', color: '#FFFFFF' }}
          className="fixed inset-0 z-[10000] bg-[#090A0F] text-white flex flex-col items-center justify-between p-8 overflow-hidden select-none"
        >
          {/* Glowing Metallic Radial Illumination */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C59B27]/15 blur-[150px] rounded-full pointer-events-none" />

          {/* Top Bar with Registration Tag & Skip Button */}
          <div className="w-full max-w-5xl flex justify-between items-center relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C59B27] animate-pulse" />
              <span>UK Registered Co. #{companyDetails.number}</span>
            </div>

            <button
              onClick={handleSkip}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-xs font-bold text-slate-200 border border-slate-700 transition-colors shadow-md"
            >
              <span>Skip Intro</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C59B27]" />
            </button>
          </div>

          {/* Center Zoho-Style Logo & Brand Name */}
          <div className="flex flex-col items-center text-center space-y-6 relative z-10 max-w-lg">
            
            {/* Glowing Logo Icon Box */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-24 h-24 rounded-2xl bg-slate-900 border-2 border-[#C59B27] overflow-hidden flex items-center justify-center text-[#C59B27] shadow-[0_0_40px_rgba(197,155,39,0.4)]"
            >
              <img
                src="/images/tessco-logo.png"
                alt="TESSCO LTD Grand Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* High Contrast White & Gold Company Title */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md font-sans">
                TESSCO <span className="text-[#C59B27]">LTD</span>
              </h1>
              <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-300">
                Domestic Building & Construction Specialists
              </p>
            </motion.div>

            {/* Location & Registration Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-slate-200 shadow-md"
            >
              <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
              <span>Eastbourne, England • Co. #{companyDetails.number}</span>
            </motion.div>

            {/* 5-Second Zoho Style Progress Bar */}
            <div className="w-72 space-y-2 pt-4">
              <div className="h-2 w-full bg-slate-900 border border-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C59B27] rounded-full transition-all duration-100 ease-linear shadow-[0_0_12px_#C59B27]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-300 font-mono font-bold">
                <span>INITIALIZING SYSTEM</span>
                <span className="text-[#C59B27]">{progress}%</span>
              </div>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="text-[11px] text-slate-400 font-bold tracking-wider relative z-10">
            © 2026 TESSCO LTD • EASTBOURNE, UNITED KINGDOM
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
