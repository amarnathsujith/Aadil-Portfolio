import React, { useState } from 'react';
import { Project } from '../types';
import { ProjectCardPreview } from './ProjectCardPreview';
import { Palette, Code2, Sparkles, Filter } from 'lucide-react';

interface WorkGridProps {
  projects: Project[];
  onOpenModal: (project: Project) => void;
}

export const WorkGrid: React.FC<WorkGridProps> = ({ projects, onOpenModal }) => {
  const [filter, setFilter] = useState<'all' | 'ui/ux' | 'code' | 'hybrid'>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter || project.category === 'hybrid';
  });

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-28 bg-[#fafafa] border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 border border-neutral-300 text-neutral-800 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-neutral-600" />
              <span>Selected Portfolio</span>
            </div>

            <h2
              id="work-section-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight"
            >
              Some of My Latest Work
            </h2>

            <p className="text-base text-neutral-600 max-w-xl leading-relaxed">
              A showcase of recent design systems, responsive interfaces, and interactive applications built with pixel-level precision and clean code.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-200/80 rounded-xl border border-neutral-300/80 self-start md:self-auto text-xs font-medium">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-neutral-900 text-white shadow-sm font-semibold'
                  : 'text-neutral-700 hover:text-neutral-900'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter('ui/ux')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                filter === 'ui/ux'
                  ? 'bg-rose-500 text-white shadow-sm font-semibold'
                  : 'text-neutral-700 hover:text-rose-600'
              }`}
            >
              <Palette className="w-3 h-3" />
              <span>UI/UX Design</span>
            </button>
            <button
              onClick={() => setFilter('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all font-mono ${
                filter === 'code'
                  ? 'bg-cyan-600 text-white shadow-sm font-semibold'
                  : 'text-neutral-700 hover:text-cyan-700'
              }`}
            >
              <Code2 className="w-3 h-3" />
              <span>&lt;code&gt;</span>
            </button>
          </div>
        </div>

        {/* The 3-Column Projects Grid */}
        <div
          id="projects-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {filteredProjects.map((project) => (
            <ProjectCardPreview
              key={project.id}
              project={project}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>

        {/* Design System / Code Philosophy Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-neutral-900">
              Need a full design-to-code prototype or design system?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600">
              From conceptual wireframes in Figma to production-ready React components with zero handoff friction.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};
