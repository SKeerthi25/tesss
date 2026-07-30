import React, { useState } from 'react';
import { CheckCircle2, MapPin, Send } from 'lucide-react';
import { careersData, companyDetails } from '../data/content';

import { sendCareerApplicationEmail } from '../services/emailService';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string>('job-1');
  const [applied, setApplied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverNote: ''
  });

  const activeJob = careersData.find(j => j.id === selectedJob) || careersData[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await sendCareerApplicationEmail({
      jobTitle: activeJob.title,
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      coverNote: formData.coverNote
    });
    setSubmitting(false);
    setApplied(true);
  };

  return (
    <div className="pt-28 pb-24 bg-slate-50/50 dark:bg-slate-950">
      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">Careers at TESSCO</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Join Our Engineering & Build Team
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4">
            We are hiring skilled UK carpenters, structural site supervisors, and certified trade professionals in Eastbourne and Sussex.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 grid lg:grid-cols-12 gap-12">
        {/* Left Column: Job Openings List */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Current Vacancies</h2>
          
          <div className="space-y-4">
            {careersData.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job.id)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                  selectedJob === job.id
                    ? 'border-brand-gold bg-brand-gold/5 dark:bg-brand-gold/10 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded bg-brand-gold/10 text-brand-gold">
                    {job.type}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold" /> {job.location}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{job.title}</h3>
                <p className="text-xs font-medium text-slate-400 mb-3">{job.department} • {job.experience}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{job.description}</p>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                  {job.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Application Form */}
        <div className="lg:col-span-6">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-subtle sticky top-32">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Apply for Vacancy</h3>
            <p className="text-xs text-slate-500 mb-6">
              Submit your details to TESSCO LTD (Company #{companyDetails.number}). Our site operations team will review your application.
            </p>

            {applied ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-200">Application Submitted!</h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-300">
                  Thank you for applying. We will reach out to schedule an interview if your qualifications match our current site schedule.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@tesscouk.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="07345 848506"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                    />
                  </div>
                </div>



                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">Cover Note / Experience Summary</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your previous projects or specialized trade skills..."
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-brand-gold hover:bg-brand-gold-hover text-slate-950 font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <span>{submitting ? 'Submitting Application...' : 'Submit Application'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};
