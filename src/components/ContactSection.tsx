import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2, MessageSquare } from 'lucide-react';
import { companyDetails } from '../data/content';
import { sendContactEmail } from '../services/emailService';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Domestic Building Construction',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const whatsappUrl = `https://wa.me/447345848506?text=Hello%20TESSCO%20LTD,%20I%20would%20like%20to%20inquire%20about%20a%20construction%20project.`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await sendContactEmail({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-gold">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Start Your Construction Project Today
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Have a building project in mind or need expert technical consultation? Call us directly, send a WhatsApp message, or submit an inquiry form below.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-subtle space-y-6">
              
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white pb-4 border-b border-slate-100 dark:border-slate-800">
                Contact Information
              </h3>

              {/* Direct Call & WhatsApp Quick Buttons */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                  className="py-3 px-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-slate-950 font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Phone className="w-4 h-4 stroke-[2.5]" />
                  <span>Call Direct</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Direct Telephone</p>
                  <a href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`} className="text-base font-bold text-slate-900 dark:text-white hover:text-brand-gold transition-colors">
                    {companyDetails.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Official Email</p>
                  <a href={`mailto:${companyDetails.email}`} className="text-base font-bold text-slate-900 dark:text-white hover:text-brand-gold transition-colors">
                    {companyDetails.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Registered Office</p>
                  <address className="not-italic text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {companyDetails.address.street},<br />
                    {companyDetails.address.town},<br />
                    {companyDetails.address.country}, {companyDetails.address.postcode}
                  </address>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Business Hours</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">
                    Mon – Fri: {companyDetails.hours.weekday}
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    Sat – Sun: {companyDetails.hours.weekend}
                  </p>
                </div>
              </div>

              {/* Company Registration Badge */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-gold/10 text-brand-gold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Registered UK Company</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Companies House Number: {companyDetails.number}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-subtle">
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Send Inquiry
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900 dark:text-emerald-200">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm text-emerald-700 dark:text-emerald-300 max-w-md mx-auto">
                    Thank you for contacting TESSCO LTD. Our project management team will review your inquiry and contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="07345 848506"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                        Project Type *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold"
                      >
                        <option value="Domestic Building Construction">Domestic Building Construction</option>
                        <option value="Home Renovations">Home Renovations</option>
                        <option value="Property Extensions">Property Extensions</option>
                        <option value="Structural Work">Structural Work</option>
                        <option value="General Contracting">General Contracting</option>
                        <option value="Construction Consultation">Construction Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                      Project Details / Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please describe your project location, scope, desired timeline, or architectural drawings if available..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-slate-950 text-base font-extrabold shadow-enterprise hover:shadow-card-hover transition-all duration-200 active:scale-95 disabled:opacity-70"
                  >
                    {submitting ? (
                      <span>Processing Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
