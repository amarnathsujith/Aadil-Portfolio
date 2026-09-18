import React from 'react';
import { Github, Linkedin, Twitter, ArrowUp, Heart, Share2, Code2, Palette } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'hero', label: 'home' },
    { id: 'about', label: 'about' },
    { id: 'featured', label: 'featured' },
    { id: 'portfolio', label: 'portfolio' },
    { id: 'blog', label: 'blog' },
    { id: 'contact', label: 'contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#121212] text-neutral-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-neutral-800">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
              <span className="text-xs font-bold text-white">AM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white tracking-tight">
                AADIL MUHAMMED
              </span>
              <div className="flex items-center gap-1 text-[11px] font-mono text-neutral-400">
                <span className="text-rose-400">designer</span>
                <span>/</span>
                <span className="text-cyan-400">&lt;coder&gt;</span>
              </div>
            </div>
          </div>

          {/* Navigation Links matching top bar */}
          <nav id="footer-nav" className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider font-medium">
            {navLinks.map((item) => (
              <a
                key={item.id}
                id={`footer-nav-${item.id}`}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(item.id);
                }}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              id="footer-linkedin"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:text-white hover:border-neutral-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-twitter"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:text-white hover:border-neutral-700 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              id="footer-github"
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full bg-neutral-900 border border-neutral-800 hover:text-white hover:border-neutral-700 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              id="scroll-to-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-full bg-neutral-800 text-white hover:bg-neutral-700 transition-all cursor-pointer ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Design Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            © 2026 Aadil Muhammed. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Handcrafted with</span>
            <span className="text-rose-400 font-sans">design intuition</span>
            <span>&</span>
            <span className="text-cyan-400 font-mono">&lt;clean code&gt;</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
