import React, { useState } from 'react';
import { featuredProjectsData } from '../data/content';
import { ProjectItem } from '../types';
import { ProjectModal } from '../components/ProjectModal';
import { Search, MapPin, CheckCircle2 } from 'lucide-react';

interface ProjectsPageProps {
  onOpenQuote: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'domestic' | 'renovations' | 'extensions' | 'structural'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'domestic', label: 'Domestic Builds' },
    { id: 'extensions', label: 'Extensions' },
    { id: 'renovations', label: 'Renovations' },
    { id: 'structural', label: 'Structural' },
  ];

  const filteredProjects = featuredProjectsData.filter((project) => {
    const matchesTab = activeTab === 'all' || project.category === activeTab;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 bg-slate-50/50 dark:bg-slate-950">
      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-gold">Portfolio</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-2 text-white">
            Completed Projects Showcase
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Recent residential builds, house extensions, and structural alterations delivered in Eastbourne, Brighton, and Sussex.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Search & Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === cat.id
                    ? 'bg-brand-gold text-brand-charcoal shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by title or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-subtle hover:shadow-card-hover transition-all group"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white shadow-sm flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 inline" /> {project.status}
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-white flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-gold" /> {project.location}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2">{project.description}</p>
              </div>

              <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-slate-400 flex items-center justify-between">
                <span>{project.stats.area} • {project.stats.duration}</span>
                <span className="text-brand-gold font-bold">Inspect Specs →</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={onOpenQuote}
      />
    </div>
  );
};
