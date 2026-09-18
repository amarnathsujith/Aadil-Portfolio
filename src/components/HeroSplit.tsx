import React, { useState, useRef, useEffect } from 'react';
import { Palette, Code2, MoveHorizontal, Sparkles, Terminal, Layers, ArrowDown, ExternalLink } from 'lucide-react';

interface HeroSplitProps {
  onExploreWork: () => void;
}

export const HeroSplit: React.FC<HeroSplitProps> = ({ onExploreWork }) => {
  const [splitPercent, setSplitPercent] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activeSide, setActiveSide] = useState<'designer' | 'coder' | 'balanced'>('balanced');
  const [selectedColor, setSelectedColor] = useState<string>('#FF5E57');
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle dragging split slider
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updateSplitFromPointer(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      updateSplitFromPointer(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {
      // Ignored safely
    }
  };

  const updateSplitFromPointer = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = clientX - rect.left;
    const percentage = Math.min(Math.max((relativeX / rect.width) * 100, 15), 85);
    setSplitPercent(Math.round(percentage));
    if (percentage > 58) {
      setActiveSide('designer');
    } else if (percentage < 42) {
      setActiveSide('coder');
    } else {
      setActiveSide('balanced');
    }
  };

  const setPreset = (preset: 'designer' | 'coder' | 'balanced') => {
    setActiveSide(preset);
    if (preset === 'designer') setSplitPercent(72);
    else if (preset === 'coder') setSplitPercent(28);
    else setSplitPercent(50);
  };

  const colorPalette = [
    { name: 'Coral', hex: '#FF5E57' },
    { name: 'Violet', hex: '#8854D0' },
    { name: 'Amber', hex: '#FFA801' },
    { name: 'Emerald', hex: '#0BE881' },
    { name: 'Cyan', hex: '#00D2D3' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-24 pb-16 lg:pt-28 lg:pb-24 bg-[#fafafa] flex flex-col justify-center overflow-hidden border-b border-neutral-200"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        {/* Left Side: Designer Watermark & Splash */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-rose-200 via-orange-100 to-amber-100 blur-3xl" />
        {/* Right Side: Coder Matrix Code Snippet Overlay */}
        <div className="absolute top-1/4 -right-16 w-96 h-96 rounded-full bg-gradient-to-bl from-cyan-100 via-emerald-50 to-blue-100 blur-3xl" />
        
        {/* Code Grid Lines on Right Half */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block opacity-25 font-mono text-[11px] text-neutral-500 select-none p-8 leading-relaxed overflow-hidden">
          <pre>{`/**
 * Aadil Muhammed - Dual Persona Engine
 * Clean code meets intuitive interface design
 */
interface HybridCreator {
  design: {
    wireframing: 'Figma' | 'Pen & Paper';
    typography: '8pt grid system';
    contrastRatio: 'WCAG AAA';
  };
  frontend: {
    stack: ['React', 'TypeScript', 'Tailwind'];
    performance: '60fps target';
    cleanCode: true;
  };
}

export function renderExperience() {
  const pixelPrecision = 1.00;
  const bundleSize = "12.4kb";
  return <SeamlessProduct design={pixelPrecision} performance={bundleSize} />;
}`}</pre>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Interactive Mode Switcher Pill */}
        <div className="flex justify-center mb-6 lg:mb-8">
          <div className="inline-flex items-center p-1 rounded-full bg-neutral-200/80 border border-neutral-300 shadow-inner text-xs font-medium">
            <button
              id="hero-preset-designer"
              onClick={() => setPreset('designer')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                activeSide === 'designer'
                  ? 'bg-rose-500 text-white shadow-sm font-semibold'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>designer</span>
            </button>
            <button
              id="hero-preset-balanced"
              onClick={() => setPreset('balanced')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                activeSide === 'balanced'
                  ? 'bg-neutral-900 text-white shadow-sm font-semibold'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
            >
              <span>50 / 50</span>
            </button>
            <button
              id="hero-preset-coder"
              onClick={() => setPreset('coder')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all font-mono ${
                activeSide === 'coder'
                  ? 'bg-cyan-600 text-white shadow-sm font-semibold'
                  : 'text-neutral-700 hover:text-neutral-950'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>&lt;coder&gt;</span>
            </button>
          </div>
        </div>

        {/* The Split Identity 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* ================= LEFT SIDE: DESIGNER ================= */}
          <div
            id="hero-designer-column"
            onMouseEnter={() => {
              if (!isDragging) {
                setSplitPercent(58);
                setActiveSide('designer');
              }
            }}
            className={`lg:col-span-4 transition-all duration-300 ${
              activeSide === 'designer' ? 'scale-[1.02]' : 'opacity-90'
            }`}
          >
            <div className="text-center lg:text-right space-y-4 max-w-md mx-auto lg:ml-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span>aesthetic & intuition</span>
              </div>

              {/* Bold Heading: designer */}
              <h1
                id="heading-designer"
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 lowercase font-sans"
              >
                designer
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
                UI/UX Designer with a passion for designing beautiful and functional user experiences.
              </p>

              {/* Designer Interactive Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-end gap-2 text-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-neutral-200 text-neutral-700 shadow-2xs">
                  <Layers className="w-3.5 h-3.5 text-rose-500" />
                  <span>Figma & Design Systems</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-neutral-200 text-neutral-700 shadow-2xs">
                  <span>Micro-interactions</span>
                </div>
              </div>

              {/* Palette Accent Dots */}
              <div className="flex items-center justify-center lg:justify-end gap-2 pt-1">
                <span className="text-[11px] text-neutral-400 font-medium mr-1">Palette:</span>
                {colorPalette.map((col) => (
                  <button
                    key={col.hex}
                    onClick={() => setSelectedColor(col.hex)}
                    className={`w-5 h-5 rounded-full transition-transform hover:scale-125 border ${
                      selectedColor === col.hex ? 'ring-2 ring-neutral-900 ring-offset-2 scale-110' : 'border-black/10'
                    }`}
                    style={{ backgroundColor: col.hex }}
                    title={col.name}
                  />
                ))}
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <button
                  id="explore-designs-btn"
                  onClick={onExploreWork}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-rose-600 transition-colors group cursor-pointer"
                >
                  <span>See UI/UX Case Studies</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* ================= CENTER: SPLIT-FACE CENTERPIECE ================= */}
          <div className="lg:col-span-4 flex justify-center order-first lg:order-none">
            <div
              id="hero-split-portrait-card"
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              className="relative w-[300px] h-[360px] sm:w-[340px] sm:h-[400px] select-none touch-none rounded-2xl overflow-hidden bg-neutral-900 border-2 border-neutral-300 shadow-2xl transition-shadow hover:shadow-3xl cursor-ew-resize group"
            >
              {/* Tooltip Drag Guide */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 px-2.5 py-1 rounded-full bg-neutral-900/80 backdrop-blur-sm text-[11px] font-mono text-neutral-300 border border-white/20 pointer-events-none flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                <MoveHorizontal className="w-3 h-3 text-cyan-400" />
                <span>Drag to reveal</span>
              </div>

              {/* ----------------- LAYER 1: DESIGNER HALF (LEFT) ----------------- */}
              <div
                id="portrait-designer-layer"
                className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `polygon(0 0, ${splitPercent}% 0, ${splitPercent}% 100%, 0 100%)`,
                }}
              >
                {/* Designer Background: Vibrant Colorful Canvas */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-rose-400 via-amber-200 to-purple-400 opacity-90 transition-colors duration-500"
                  style={{
                    filter: `hue-rotate(${selectedColor === '#8854D0' ? '60deg' : selectedColor === '#0BE881' ? '120deg' : '0deg'})`,
                  }}
                />

                {/* Painterly Vector Splash Accents */}
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-rose-500/40 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-6 w-36 h-36 bg-amber-400/40 rounded-full blur-lg" />
                
                {/* SVG Artistic Brush Splashes & Bezier Grid */}
                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 340 400">
                  <path d="M 20 50 Q 80 120 40 220 T 140 360" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="40" cy="220" r="4" fill="#ffffff" />
                  <circle cx="140" cy="360" r="4" fill="#ffffff" />
                  <text x="25" y="380" fill="#ffffff" fontSize="10" fontFamily="monospace">bezier: P1(40,220)</text>
                </svg>

                {/* Designer Face Composite */}
                <img
                  src="/profile.jpg"
                  alt="Designer Persona"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top mix-blend-multiply contrast-125 saturate-150 filter"
                />

                {/* Artistic Color Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-amber-500/20 mix-blend-color-burn" />

                {/* Designer Badge on Left Corner */}
                <div className="absolute bottom-3 left-3 z-10 px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-semibold text-rose-300 border border-rose-500/30 flex items-center gap-1">
                  <Palette className="w-2.5 h-2.5" />
                  <span>UI/UX Canvas</span>
                </div>
              </div>

              {/* ----------------- LAYER 2: CODER HALF (RIGHT) ----------------- */}
              <div
                id="portrait-coder-layer"
                className="absolute inset-0 overflow-hidden bg-neutral-950"
                style={{
                  clipPath: `polygon(${splitPercent}% 0, 100% 0, 100% 100%, ${splitPercent}% 100%)`,
                }}
              >
                {/* Monochromatic Base Portrait */}
                <img
                  src="/profile.jpg"
                  alt="Coder Persona"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top grayscale contrast-150 brightness-90"
                />

                {/* Cool Matrix Cyan / Emerald Scanline Overlay */}
                <div className="absolute inset-0 bg-neutral-950/40 mix-blend-hard-light pointer-events-none" />

                {/* Monospace Code Overlay */}
                <div className="absolute inset-0 p-4 font-mono text-[10px] leading-tight text-cyan-400/80 pointer-events-none select-none flex flex-col justify-between">
                  <div className="space-y-1 bg-black/40 p-2 rounded backdrop-blur-xs border border-cyan-500/20">
                    <p className="text-emerald-400 font-semibold">&lt;coder mode="active"&gt;</p>
                    <p className="text-cyan-200">const perf = 60;</p>
                    <p className="text-neutral-400">async function build() &#123;</p>
                    <p className="pl-2 text-cyan-300">await compileTS();</p>
                    <p className="text-neutral-400">&#125;</p>
                  </div>

                  <div className="space-y-0.5 text-right font-mono text-[9px] text-cyan-300/70">
                    <p>CSS Grid: OK</p>
                    <p>Bundle: 14KB</p>
                    <p className="text-emerald-300">0 errors, 0 warnings</p>
                  </div>
                </div>

                {/* Coder Badge on Right Corner */}
                <div className="absolute bottom-3 right-3 z-10 px-2 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-cyan-300 border border-cyan-500/40 flex items-center gap-1">
                  <Terminal className="w-2.5 h-2.5" />
                  <span>&lt;TSX/CSS&gt;</span>
                </div>
              </div>

              {/* ----------------- CENTER SPLIT DIVIDER & DRAG HANDLE ----------------- */}
              <div
                id="hero-split-divider"
                className="absolute top-0 bottom-0 z-20 w-0.5 bg-white cursor-ew-resize"
                style={{ left: `${splitPercent}%` }}
              >
                {/* Glowing vertical seam line */}
                <div className="absolute -top-4 -bottom-4 -left-1.5 w-3.5 bg-cyan-400/10 hover:bg-cyan-400/20" />

                {/* Circular Draggable Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-900 border-2 border-white text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95">
                  <div className="flex items-center text-[10px] font-bold">
                    <span className="text-rose-400">‹</span>
                    <span className="text-white">|</span>
                    <span className="text-cyan-400">›</span>
                  </div>
                </div>

                {/* Floating percentage label while dragging */}
                {isDragging && (
                  <div className="absolute -bottom-8 -translate-x-1/2 px-2 py-0.5 rounded bg-black text-[10px] font-mono text-white whitespace-nowrap shadow-md">
                    {splitPercent}%
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: CODER ================= */}
          <div
            id="hero-coder-column"
            onMouseEnter={() => {
              if (!isDragging) {
                setSplitPercent(42);
                setActiveSide('coder');
              }
            }}
            className={`lg:col-span-4 transition-all duration-300 ${
              activeSide === 'coder' ? 'scale-[1.02]' : 'opacity-90'
            }`}
          >
            <div className="text-center lg:text-left space-y-4 max-w-md mx-auto lg:mr-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/80 text-cyan-800 text-xs font-semibold tracking-wide font-mono">
                <Terminal className="w-3.5 h-3.5 text-cyan-600" />
                <span>logic & architecture</span>
              </div>

              {/* Bold Heading: <coder> */}
              <h1
                id="heading-coder"
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 font-mono"
              >
                <span className="text-cyan-600">&lt;</span>coder<span className="text-cyan-600">&gt;</span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
                Front End Developer who focuses on writing clean, elegant and efficient code.
              </p>

              {/* Coder Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-neutral-200 text-neutral-700 shadow-2xs">
                  <Code2 className="w-3.5 h-3.5 text-cyan-600" />
                  <span>React 19 & TypeScript</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-neutral-200 text-neutral-700 shadow-2xs">
                  <span>Tailwind CSS</span>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="rounded-lg bg-neutral-900 text-neutral-200 p-3 font-mono text-[11px] leading-relaxed border border-neutral-800 shadow-inner text-left">
                <div className="flex items-center justify-between pb-1 border-b border-neutral-800 mb-1.5 text-[10px] text-neutral-400">
                  <span className="text-cyan-400">developer.config.ts</span>
                  <span className="text-emerald-400">PASS 100%</span>
                </div>
                <p className="text-neutral-400">const dev = &#123;</p>
                <p className="pl-3 text-cyan-300">cleanCode: <span className="text-amber-300">true</span>,</p>
                <p className="pl-3 text-cyan-300">accessible: <span className="text-emerald-300">'WCAG_AAA'</span>,</p>
                <p className="text-neutral-400">&#125;;</p>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <button
                  id="explore-code-btn"
                  onClick={onExploreWork}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-cyan-700 transition-colors group cursor-pointer font-mono"
                >
                  <span>Explore Engineering Work</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
