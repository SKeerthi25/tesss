import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { companyDetails } from '../data/content';

export const FloatingContactWidget: React.FC = () => {
  const whatsappUrl = `https://wa.me/447345848506?text=Hello%20TESSCO%20LTD,%20I%20would%20like%20to%20inquire%20about%20a%20construction%20project.`;
  const callUrl = `tel:${companyDetails.phone.replace(/\s+/g, '')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs shadow-[0_8px_25px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105 active:scale-95 group"
        title="Chat on WhatsApp with TESSCO LTD"
      >
        <MessageSquare className="w-5 h-5 fill-current shrink-0" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* Call Floating Button */}
      <a
        href={callUrl}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-brand-gold hover:bg-brand-gold-hover text-slate-950 font-black text-xs shadow-[0_8px_25px_rgba(197,155,39,0.4)] transition-all transform hover:scale-105 active:scale-95 group"
        title="Call TESSCO LTD"
      >
        <Phone className="w-5 h-5 stroke-[2.4] shrink-0" />
        <span className="hidden sm:inline">Call 07345 848506</span>
      </a>
    </div>
  );
};
