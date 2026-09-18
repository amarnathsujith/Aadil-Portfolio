import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Menu, X, Code2, Palette } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onQuickRoleSwitch?: (role: 'designer' | 'coder' | 'dual') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'home' },
    { id: 'about', label: 'about' },
    { id: 'featured', label: 'featured' },
    { id: 'portfolio', label: 'portfolio' },
    { id: 'blog', label: 'blog' },
    { id: 'contact', label: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121212]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10'
          : 'bg-[#141414] py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Minimalist Logo */}
        <a
          id="nav-logo"
          href="#hero"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="group flex items-center gap-3 select-none"
        >
          <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-950 border border-neutral-700 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-neutral-500 transition-colors">
            {/* Split monogram */}
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full bg-gradient-to-br from-rose-500/20 to-amber-500/10 flex items-center justify-end pr-0.5">
                <span className="text-xs font-bold text-white tracking-tighter">A</span>
              </div>
              <div className="w-1/2 h-full bg-gradient-to-bl from-cyan-500/20 to-emerald-500/10 flex items-center justify-start pl-0.5 border-l border-white/10">
                <span className="text-xs font-mono font-bold text-cyan-300 tracking-tighter">M</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
              AADIL MUHAMMED
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-mono leading-none text-neutral-400">
              <span className="text-rose-400 font-sans">designer</span>
              <span className="text-neutral-600">/</span>
              <span className="text-cyan-400 font-mono">&lt;coder&gt;</span>
            </div>
          </div>
        </a>

        {/* Center/Right: Nav Links (Desktop) */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                id={`nav-link-${item.id}`}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`relative px-3.5 py-1.5 text-sm uppercase tracking-wider font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/40 rounded-md'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-rose-500 via-white to-cyan-400 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Far Right: Social Icons & Quick CTA */}
        <div id="social-nav-links" className="hidden sm:flex items-center space-x-3 text-neutral-400">
          <a
            id="social-linkedin"
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-md hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            id="social-twitter"
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter / X"
            className="p-2 rounded-md hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            id="social-github"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-md hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <div className="h-4 w-px bg-neutral-800 mx-1" />

          <a
            id="nav-contact-btn"
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="text-xs uppercase tracking-wider font-medium text-white px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 transition-all shadow-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            id="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#161616] border-b border-neutral-800 px-4 pt-3 pb-5 space-y-1 shadow-2xl"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              id={`mobile-nav-${item.id}`}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className={`block px-3 py-2.5 rounded-md text-base font-medium tracking-wide uppercase ${
                activeSection === item.id
                  ? 'bg-neutral-800 text-white font-semibold'
                  : 'text-neutral-400 hover:bg-neutral-800/60 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}

          <div className="pt-4 border-t border-neutral-800 flex items-center justify-around text-neutral-400">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 hover:text-white"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
