import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { companyDetails } from '../data/content';

export const MapSection: React.FC = () => {
  // Google Maps embed URL for Eastbourne BN22 7QT
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.382898715893!2d0.2974895768853755!3d50.76840007165463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47df73c914bf6895%3A0xb35a065798934575!2sSeaside%2C%20Eastbourne!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk";

  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-subtle group">
          
          {/* Map Iframe */}
          <iframe
            title="TESSCO LTD Eastbourne Office Location"
            src={mapEmbedUrl}
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full grayscale contrast-125 dark:opacity-80 transition-all duration-300 group-hover:grayscale-0"
          />

          {/* Floating Location Details Overlay */}
          <div className="absolute top-6 left-6 max-w-sm p-5 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xl hidden sm:block">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-brand-blue text-white flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Registered Office Location</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Eastbourne, UK</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 font-medium mb-3">
              {companyDetails.address.street}, {companyDetails.address.town}, {companyDetails.address.postcode}
            </p>

            <a
              href="https://maps.google.com/?q=204a+Seaside+Eastbourne+BN22+7QT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:underline"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
