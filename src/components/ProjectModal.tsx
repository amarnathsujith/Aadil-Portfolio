import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Layers, Code2, CheckCircle2, Sparkles, Sliders, ChevronRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'design' | 'code'>('overview');

  if (!project) return null;

  return (
    <div
      id="case-study-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="case-study-modal-container"
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-neutral-300 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-neutral-900 text-white px-6 py-4 flex items-center justify-between border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="text-cyan-400 font-semibold">{project.year}</span>
              <span>•</span>
              <span>{project.client}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-0.5">
              {project.title}
            </h2>
            <p className="text-xs text-neutral-400 font-medium">{project.subtitle}</p>
          </div>

          <button
            id="close-modal-btn"
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-neutral-200 bg-neutral-50 px-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all ${
              activeTab === 'overview'
                ? 'border-neutral-900 text-neutral-900 bg-white'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Overview & Metrics
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'design'
                ? 'border-rose-500 text-rose-600 bg-white'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Design Approach</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all flex items-center gap-1.5 font-mono ${
              activeTab === 'code'
                ? 'border-cyan-600 text-cyan-700 bg-white'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>&lt;Code Architecture&gt;</span>
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Impact Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-center"
                    >
                      <div className="text-xl sm:text-2xl font-bold font-mono text-neutral-900">
                        {metric.value}
                      </div>
                      <div className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Overview & Challenge */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">The Overview</h4>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {project.caseStudy.overview}
                </p>
              </div>

              <div className="space-y-2 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                  <span>The Engineering & UX Challenge</span>
                </h4>
                <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                  {project.caseStudy.challenge}
                </p>
              </div>

              {/* Tags & Tools */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                  Disciplines & Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 text-xs font-medium border border-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'design' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <h4 className="text-sm font-bold text-neutral-900">UI/UX Design Methodology</h4>
                </div>
                <div className="flex gap-1.5 text-xs text-neutral-500">
                  {project.caseStudy.designTools.map((tool) => (
                    <span key={tool} className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {project.caseStudy.designApproach.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200/80">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-700 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 text-white text-xs space-y-2">
                <div className="flex justify-between text-neutral-400 font-mono text-[11px]">
                  <span>DESIGN SPECIFICATION</span>
                  <span>FIGMA TOKENS</span>
                </div>
                <p className="font-mono text-neutral-300">
                  8-point baseline grid • Fluid typography clamp(1rem, 2.5vw, 1.5rem) • Accessible color contrast 14.2:1
                </p>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                  <h4 className="text-sm font-bold text-neutral-900 font-mono">&lt;Frontend Implementation&gt;</h4>
                </div>
                <div className="flex gap-1.5 text-xs font-mono">
                  {project.caseStudy.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-cyan-50 text-cyan-800 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {project.caseStudy.codeHighlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-mono">{point}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 text-cyan-400 font-mono text-xs border border-neutral-800">
                <p className="text-neutral-500">// Production Performance Check</p>
                <p>bundleSize: "14.2 KB (gzipped)"</p>
                <p>timeToInteractive: "0.28s"</p>
                <p>accessibilityScore: 100</p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-neutral-50 px-6 py-4 border-t border-neutral-200 flex items-center justify-between">
          <span className="text-xs text-neutral-500 font-mono">
            Aadil Muhammed • Portfolio Case Study
          </span>
          <div className="flex items-center gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-90 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span>Watch on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
