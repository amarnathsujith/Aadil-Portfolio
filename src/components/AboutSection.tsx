import React from 'react';
import { DESIGN_SKILLS, CODE_SKILLS } from '../data/portfolioData';
import { Palette, Code2, CheckCircle, Terminal, Layers, Cpu, Compass, Layout } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= FEATURED PHILOSOPHY ================= */}
        <div id="featured" className="scroll-mt-24 mb-20">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
              The Dual Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Design in Pixels, Build in Code
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Bridging the gap between creative visual intent and production engineering. No miscommunications, no design-token translation loss, and no compromised interactions.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-1">Empathetic UX Strategy</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Conducting qualitative research, mapping intuitive user journeys, and structuring clear information hierarchies before touching code.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-neutral-200 text-neutral-800 flex items-center justify-center mb-4">
                <Layout className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-1">Unified Design Systems</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Transforming Figma design variables into production Tailwind tokens and strict TypeScript schemas with zero friction.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-1">Silky 60fps Engineering</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Writing performant, accessible React components with minimal re-renders, clean state trees, and hardware-accelerated animations.
              </p>
            </div>
          </div>
        </div>

        {/* ================= ABOUT STORY & SKILLS MATRIX ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-neutral-200">
          
          {/* Left: Bio Story */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-800 text-xs font-semibold">
              <span>About Me</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Hello, I'm Aadil Muhammed.
            </h3>
            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p>
                I’m Aadil Muhammed, a third-year student at University College of Engineering Kariavattom with a strong interest in filmmaking, cinematography, and video editing.
              </p>
              <p>
                I enjoy turning ideas into engaging visual stories, experimenting with camera work, editing techniques, and creative visual concepts. From capturing moments to shaping the final story through editing, I’m always interested in exploring how visuals can communicate emotions and ideas effectively.
              </p>
              <p>
                Alongside my academics, I’m continuously developing my skills in filmmaking and video production, experimenting with new creative styles, and looking for opportunities to work on projects that challenge me to think creatively.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <div className="border-l-2 border-neutral-900 pl-3">
                <div className="text-xl font-bold font-mono text-neutral-900">12+</div>
                <div className="text-[11px] text-neutral-500 font-medium uppercase">Years in Design & Code</div>
              </div>
              <div className="border-l-2 border-neutral-900 pl-3">
                <div className="text-xl font-bold font-mono text-neutral-900">100+</div>
                <div className="text-[11px] text-neutral-500 font-medium uppercase">Projects Shipped</div>
              </div>
            </div>
          </div>

          {/* Right: Dual Skills Comparison Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Design Skills Column */}
            <div className="p-6 rounded-2xl bg-neutral-50/80 border border-neutral-200/90 space-y-5">
              <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-200">
                <div className="p-2 rounded-lg bg-rose-100 text-rose-600">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">The Designer</h4>
                  <p className="text-[11px] text-neutral-500">Aesthetic & UX craft</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {DESIGN_SKILLS.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-neutral-800">{skill.name}</span>
                      <span className="font-mono text-rose-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-neutral-200 overflow-hidden">
                      <div
                        className="h-full bg-rose-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coder Skills Column */}
            <div className="p-6 rounded-2xl bg-neutral-900 text-white space-y-5 shadow-inner">
              <div className="flex items-center gap-2.5 pb-2 border-b border-neutral-800">
                <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-500/20">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-mono">&lt;The Coder&gt;</h4>
                  <p className="text-[11px] text-neutral-400 font-mono">Frontend architecture</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {CODE_SKILLS.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-neutral-200">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                      <div
                        className="h-full bg-cyan-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
