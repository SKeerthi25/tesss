import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { featuredProjectsData } from '../data/content';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

interface FeaturedProjectsProps {
  onOpenQuote: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'domestic' | 'renovations' | 'extensions' | 'structural'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'domestic', label: 'Domestic Builds' },
    { id: 'extensions', label: 'Extensions' },
    { id: 'renovations', label: 'Renovations' },
    { id: 'structural', label: 'Structural' },
  ];

  const filteredProjects = activeTab === 'all'
    ? featuredProjectsData
    : featuredProjectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Craftsmanship Delivered Across Eastbourne & Sussex
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Explore a selection of recent residential builds, extensions, structural installations, and Period restorations completed by TESSCO LTD.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                activeTab === cat.id
                  ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white shadow-sm flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" /> {project.status}
                    </span>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-3 left-4 text-xs font-semibold text-white flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-blue transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Bottom Quick Info */}
              <div className="px-6 py-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>{project.stats.area} • {project.stats.duration}</span>
                <span className="text-brand-blue font-bold flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                  Inspect <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
};
