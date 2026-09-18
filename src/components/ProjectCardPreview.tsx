import React, { useState } from 'react';
import { Project } from '../types';
import { Eye, Heart, Clock, MapPin, Plane, Radio, Flame, Sparkles, ExternalLink, Bookmark, Play, Instagram } from 'lucide-react';

interface ProjectCardPreviewProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCardPreview: React.FC<ProjectCardPreviewProps> = ({ project, onOpenModal }) => {
  // Scoreboard simulation state for Card 1
  const [raidersScore, setRaidersScore] = useState(24);
  const [rabbitohsScore, setRabbitohsScore] = useState(20);
  const [isLiked, setIsLiked] = useState(false);
  const [activePin, setActivePin] = useState<string>('Tokyo');

  const renderCardVisual = () => {
    switch (project.thumbnailType) {
      /* ================= CARD 0: INSTAGRAM REEL ================= */
      case 'instagram-reel':
        return (
          <div className="relative h-64 bg-neutral-950 overflow-hidden border-b border-neutral-800 group/reel flex items-center justify-center">
            {/* Background Thumbnail Image */}
            <img
              src={project.coverImage || '/reel-thumbnail.jpg'}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-center group-hover/reel:scale-105 transition-transform duration-500 opacity-80"
            />

            {/* Gradient Overlay for Instagram Reel Vibe */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

            {/* Top Reel Header */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-[10px] shadow-md tracking-wider">
                <Instagram className="w-3 h-3" /> REEL
              </span>
              <span className="text-[10px] font-mono text-neutral-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                Watch Video ↗
              </span>
            </div>

            {/* Center Play Button Icon */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-xl group-hover/reel:scale-110 transition-transform">
              <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            </div>

            {/* Bottom Caption Bar */}
            <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-white">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-xs text-neutral-100 font-sans">@aadil_muhammed</span>
              </div>
              <span className="flex items-center gap-1 font-mono text-[10px] text-rose-300 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-500/30">
                <Heart className="w-2.5 h-2.5 fill-rose-400 text-rose-400" /> Instagram
              </span>
            </div>
          </div>
        );
      /* ================= CARD 1: SPORTS SCOREBOARD ================= */
      case 'scoreboard':
        return (
          <div className="relative h-64 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white p-5 flex flex-col justify-between overflow-hidden border-b border-neutral-800">
            {/* Ambient Stadium Glow */}
            <div className="absolute top-0 left-1/4 w-32 h-16 bg-lime-500/20 blur-2xl rounded-full" />
            <div className="absolute top-0 right-1/4 w-32 h-16 bg-red-600/20 blur-2xl rounded-full" />

            {/* Top Match Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[10px] tracking-wider uppercase animate-pulse">
                  <Radio className="w-2.5 h-2.5" /> LIVE
                </span>
                <span className="text-neutral-400">NRL PREMIERSHIP • 2ND HALF</span>
              </div>
              <div className="font-bold text-amber-400 bg-black/50 px-2 py-0.5 rounded border border-amber-400/20">
                68:42
              </div>
            </div>

            {/* Scoreboard Center Teams */}
            <div className="grid grid-cols-5 items-center my-auto py-2">
              {/* Home Team: Canberra Raiders */}
              <div className="col-span-2 flex flex-col items-center text-center space-y-1">
                <div className="w-10 h-10 rounded-full bg-[#32CD32]/20 border-2 border-[#32CD32] flex items-center justify-center shadow-lg shadow-lime-500/10">
                  <span className="font-extrabold text-xs text-lime-400 font-sans tracking-tight">CBR</span>
                </div>
                <span className="text-xs font-bold text-neutral-200 truncate w-full">Canberra</span>
                <span className="text-[10px] text-lime-400/80 font-mono">Raiders</span>
              </div>

              {/* Big Score Display */}
              <div className="col-span-1 flex items-center justify-center">
                <div className="bg-neutral-900/90 border border-white/15 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-inner">
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-lime-400 tracking-tight">
                    {raidersScore}
                  </span>
                  <span className="text-neutral-500 text-sm font-bold">-</span>
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-rose-400 tracking-tight">
                    {rabbitohsScore}
                  </span>
                </div>
              </div>

              {/* Away Team: South Sydney Rabbitohs */}
              <div className="col-span-2 flex flex-col items-center text-center space-y-1">
                <div className="w-10 h-10 rounded-full bg-rose-900/30 border-2 border-rose-500 flex items-center justify-center shadow-lg shadow-rose-500/10">
                  <span className="font-extrabold text-xs text-rose-300 font-sans tracking-tight">SOU</span>
                </div>
                <span className="text-xs font-bold text-neutral-200 truncate w-full">South Sydney</span>
                <span className="text-[10px] text-rose-400/80 font-mono">Rabbitohs</span>
              </div>
            </div>

            {/* Micro Stats Bar */}
            <div className="pt-2 border-t border-white/10 space-y-1.5 text-[10px] font-mono">
              <div className="flex justify-between text-neutral-400">
                <span>Territory Possession</span>
                <span className="text-neutral-300 font-semibold">54% - 46%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-neutral-800 overflow-hidden flex">
                <div className="h-full bg-lime-500" style={{ width: '54%' }} />
                <div className="h-full bg-rose-500" style={{ width: '46%' }} />
              </div>
            </div>
          </div>
        );

      /* ================= CARD 2: INTERIOR DESIGN NEWS FEED ================= */
      case 'interior-feed':
        return (
          <div className="relative h-64 bg-[#F9F9F7] p-4 flex flex-col justify-between overflow-hidden border-b border-neutral-200">
            {/* Top Editorial Bar */}
            <div className="flex items-center justify-between text-[11px] text-neutral-500 font-medium">
              <span className="uppercase tracking-widest text-[10px] font-bold text-neutral-900 bg-neutral-200/70 px-2 py-0.5 rounded">
                Architecture & Design
              </span>
              <div className="flex items-center gap-1.5 text-neutral-500">
                <Clock className="w-3 h-3" />
                <span>2 hours ago</span>
              </div>
            </div>

            {/* Split Editorial snippet */}
            <div className="flex gap-3 my-2 items-center">
              <div className="relative w-28 h-24 rounded-lg overflow-hidden shrink-0 shadow-sm border border-neutral-200">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80"
                  alt="Modern Scandinavian Interior"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/60 text-[9px] text-white font-medium">
                  Trend Report
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-serif font-bold text-neutral-900 leading-snug line-clamp-2">
                  What today's home buyer wants: Warm minimalism & light
                </h4>
                <p className="text-[11px] text-neutral-600 line-clamp-2 leading-relaxed">
                  Natural oak finishes, tactile linen textures, and flexible open-concept workspaces dominate 2026 desires.
                </p>
              </div>
            </div>

            {/* Card Metadata & Social Engagement */}
            <div className="pt-2 border-t border-neutral-200/80 flex items-center justify-between text-[11px] text-neutral-600">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-neutral-300 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                    alt="Author"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-neutral-800 text-[11px]">Sarah J. • 4 min read</span>
              </div>

              {/* Views & Likes */}
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 font-mono text-[10px] text-neutral-500">
                  <Eye className="w-3 h-3 text-neutral-400" />
                  4.8k
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLiked(!isLiked);
                  }}
                  className={`flex items-center gap-1 font-mono text-[10px] transition-colors ${
                    isLiked ? 'text-rose-500 font-bold' : 'text-neutral-500 hover:text-rose-500'
                  }`}
                >
                  <Heart className={`w-3 h-3 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                  {isLiked ? 343 : 342}
                </button>
              </div>
            </div>
          </div>
        );

      /* ================= CARD 3: MAP SEARCH INTERFACE ================= */
      case 'map-search':
        return (
          <div className="relative h-64 bg-[#0e1626] text-white p-4 flex flex-col justify-between overflow-hidden border-b border-neutral-800">
            {/* Top Search Bar Filter */}
            <div className="relative z-10 flex items-center justify-between bg-neutral-900/90 backdrop-blur-md rounded-lg px-2.5 py-1.5 border border-white/15 text-[11px]">
              <div className="flex items-center gap-1.5 text-neutral-300">
                <Plane className="w-3 h-3 text-rose-500" />
                <span className="font-semibold text-white">Sydney (SYD)</span>
                <span className="text-neutral-500">→</span>
                <span className="text-neutral-400">Anywhere</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-mono text-[10px] font-semibold">
                Direct
              </span>
            </div>

            {/* Interactive Vector Map Grid Background */}
            <div className="absolute inset-0 opacity-40">
              <svg className="w-full h-full" viewBox="0 0 400 250">
                {/* World map stylized land masses */}
                <path
                  d="M 40 60 Q 90 40, 130 80 T 180 140 Q 150 200, 100 180 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="1"
                />
                <path
                  d="M 220 50 Q 280 30, 340 70 T 360 160 Q 300 210, 240 170 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="1"
                />
                <path
                  d="M 270 170 Q 320 160, 350 200 T 310 230 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="1"
                />
                {/* Curved Flight Trajectory Lines */}
                <path
                  d="M 290 190 Q 230 110, 260 70"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />
                <path
                  d="M 290 190 Q 200 130, 140 80"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                />
              </svg>
            </div>

            {/* Map Interactive Destination Pins with Pricing Pills */}
            <div className="relative z-10 grid grid-cols-2 gap-2 my-auto">
              {/* Tokyo Pin */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePin('Tokyo');
                }}
                className={`cursor-pointer transition-all ${
                  activePin === 'Tokyo' ? 'scale-105' : 'opacity-85'
                }`}
              >
                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-neutral-900/90 border border-white/20 shadow-md">
                  <MapPin className="w-2.5 h-2.5 text-rose-500" />
                  <span className="text-[10px] font-semibold text-white">Tokyo</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/80 px-1 rounded">
                    $890 AUD
                  </span>
                </div>
              </div>

              {/* London Pin */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePin('London');
                }}
                className={`cursor-pointer transition-all ${
                  activePin === 'London' ? 'scale-105' : 'opacity-85'
                }`}
              >
                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-neutral-900/90 border border-white/20 shadow-md">
                  <MapPin className="w-2.5 h-2.5 text-cyan-400" />
                  <span className="text-[10px] font-semibold text-white">London</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/80 px-1 rounded">
                    $1,240 AUD
                  </span>
                </div>
              </div>

              {/* Singapore Pin */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePin('Singapore');
                }}
                className={`cursor-pointer transition-all ${
                  activePin === 'Singapore' ? 'scale-105' : 'opacity-85'
                }`}
              >
                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-neutral-900/90 border border-white/20 shadow-md">
                  <MapPin className="w-2.5 h-2.5 text-amber-400" />
                  <span className="text-[10px] font-semibold text-white">Singapore</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/80 px-1 rounded">
                    $560 AUD
                  </span>
                </div>
              </div>

              {/* Sydney Origin Indicator */}
              <div className="flex items-center gap-1 text-[10px] text-neutral-400 pl-1">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span className="font-mono text-white">SYD (Origin Hub)</span>
              </div>
            </div>

            {/* Bottom Status Pill */}
            <div className="relative z-10 flex items-center justify-between text-[10px] text-neutral-400 font-mono pt-1">
              <span>Qantas Frequent Flyer Ready</span>
              <span className="text-cyan-400">Direct Route Finder</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <article
      id={`project-card-${project.id}`}
      onClick={() => onOpenModal(project)}
      className="group bg-white rounded-xl overflow-hidden border border-neutral-200/90 hover:border-neutral-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Visual Mockup Preview */}
      <div className="relative overflow-hidden bg-neutral-100">
        {renderCardVisual()}

        {/* Hover Micro-interaction Badge */}
        <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-full bg-neutral-900/90 backdrop-blur-sm text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <span>View Case Study</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Content (Clean Title, Subtitle, Tags) */}
      <div className="p-5 flex flex-col flex-1 justify-between bg-white">
        <div className="space-y-1.5">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[11px] font-medium bg-neutral-100 text-neutral-600 border border-neutral-200/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Clean Title */}
          <h3
            id={`project-title-${project.id}`}
            className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight group-hover:text-neutral-950 transition-colors"
          >
            {project.title}
          </h3>

          {/* Clean Subtitle */}
          <p className="text-sm font-medium text-neutral-500 group-hover:text-neutral-700 transition-colors">
            {project.subtitle}
          </p>

          <p className="text-xs text-neutral-600 line-clamp-2 pt-1 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-4 mt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-mono">
          <span>{project.client}</span>
          <span className="font-semibold text-neutral-700">{project.year}</span>
        </div>
      </div>
    </article>
  );
};
