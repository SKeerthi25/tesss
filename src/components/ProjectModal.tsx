import React from 'react';
import { X, MapPin, CheckCircle2, Clock, Maximize2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenQuote }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-floating relative overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-xl bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white backdrop-blur-sm shadow-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Cover Image */}
        <div className="relative rounded-xl overflow-hidden mb-6 -mx-2 -mt-2 sm:-mx-4 sm:-mt-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-brand-blue text-white shadow-md">
              {project.status} — {project.completionYear}
            </span>
            <span className="text-xs font-semibold flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              <MapPin className="w-3.5 h-3.5" /> {project.location}
            </span>
          </div>
        </div>

        {/* Modal Title & Description */}
        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
            <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs font-semibold">
              <Clock className="w-3.5 h-3.5 text-brand-blue" />
              <span>Duration</span>
            </div>
            <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">{project.stats.duration}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
            <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs font-semibold">
              <Maximize2 className="w-3.5 h-3.5 text-brand-blue" />
              <span>Property Area</span>
            </div>
            <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">{project.stats.area}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
            <div className="flex items-center gap-1.5 text-slate-400 dark:text-slate-500 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Contract Type</span>
            </div>
            <p className="text-sm font-bold text-slate-900 dark:text-white mt-1">{project.stats.type}</p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Close Viewer
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenQuote();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-semibold shadow-md transition-all"
          >
            <span>Plan Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
