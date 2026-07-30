import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Calculator } from 'lucide-react';
import { sendQuoteEmail } from '../services/emailService';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState('Domestic Building Construction');
  const [approxSize, setApproxSize] = useState('500 - 1,000 sq ft');
  const [timeline, setTimeline] = useState('1 - 3 Months');
  const [postcode, setPostcode] = useState('');
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '', details: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  if (!isOpen) return null;

  const projectTypes = [
    { title: 'Domestic Building Construction', estimate: '6 - 12 Months', desc: 'Turnkey ground-up home builds' },
    { title: 'Home Renovations', estimate: '4 - 10 Weeks', desc: 'Interior & structural overhaul' },
    { title: 'Property Extensions', estimate: '8 - 16 Weeks', desc: 'Single / multi-storey rear extensions' },
    { title: 'Structural Work & RSJs', estimate: '1 - 4 Weeks', desc: 'Load-bearing wall removal & steelwork' },
    { title: 'Construction Consultation', estimate: '1 - 2 Weeks', desc: 'Feasibility analysis & BoQ cost estimation' }
  ];

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSending(true);
      await sendQuoteEmail({
        projectType,
        approxSize,
        timeline,
        postcode,
        fullName: contactInfo.name,
        email: contactInfo.email,
        phone: contactInfo.phone,
        details: contactInfo.details
      });
      setSending(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-floating relative overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">Quote Request Submitted!</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              We have received your project details for <strong className="text-brand-gold">{projectType}</strong>. An email notification has been dispatched to estimators at <strong className="text-slate-900 dark:text-white">manimohanuk2001@gmail.com</strong>.
            </p>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-slate-950 font-black text-sm shadow-md transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header & Progress */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center font-bold">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">TESSCO Instant Quote Estimator</span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Get a Free Itemized Estimate</h3>
              </div>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    s <= step ? 'bg-brand-gold' : 'bg-slate-200 dark:bg-slate-800'
                  }`}
                />
              ))}
            </div>

            <form onSubmit={handleNext}>
              {/* STEP 1: Choose Service */}
              {step === 1 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Step 1: Select Your Project Type
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {projectTypes.map((pt, idx) => (
                      <div
                        key={idx}
                        onClick={() => setProjectType(pt.title)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          projectType === pt.title
                            ? 'border-brand-gold bg-brand-gold/10 shadow-sm'
                            : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 hover:border-slate-300'
                        }`}
                      >
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white">{pt.title}</h5>
                        <p className="text-xs text-slate-500 mt-1">{pt.desc}</p>
                        <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-brand-gold">
                          Est: {pt.estimate}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Project Scope & Size */}
              {step === 2 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Step 2: Project Parameters & Timeline
                  </h4>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Estimated Property Floor Area
                    </label>
                    <select
                      value={approxSize}
                      onChange={(e) => setApproxSize(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                    >
                      <option value="Under 500 sq ft">Under 500 sq ft (Small extension / single room)</option>
                      <option value="500 - 1,000 sq ft">500 - 1,000 sq ft (Medium extension / floor overhaul)</option>
                      <option value="1,000 - 2,500 sq ft">1,000 - 2,500 sq ft (Full home renovation)</option>
                      <option value="2,500+ sq ft">2,500+ sq ft (New domestic build / luxury villa)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                      Target Project Start Date
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                    >
                      <option value="Immediately (Within 30 Days)">Immediately (Within 30 Days)</option>
                      <option value="1 - 3 Months">1 - 3 Months</option>
                      <option value="3 - 6 Months">3 - 6 Months</option>
                      <option value="Flexible / Planning Phase">Flexible / Planning Phase</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Step 3: Where Should We Send Your Estimate?
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name"
                        value={contactInfo.name}
                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@tesscouk.com"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="07345 848506"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Property Postcode</label>
                      <input
                        type="text"
                        placeholder="e.g. BN22 7QT"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">Additional Project Notes</label>
                    <textarea
                      rows={3}
                      placeholder="Specify any architectural drawings or special requirements..."
                      value={contactInfo.details}
                      onChange={(e) => setContactInfo({ ...contactInfo, details: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : <div />}

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-slate-950 text-sm font-black shadow-md transition-all disabled:opacity-50"
                >
                  <span>{sending ? 'Sending to Estimators...' : step === 3 ? 'Submit Quote Request' : 'Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
