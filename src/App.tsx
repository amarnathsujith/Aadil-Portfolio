/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSplit } from './components/HeroSplit';
import { AboutSection } from './components/AboutSection';
import { WorkGrid } from './components/WorkGrid';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Intersection observer to track active section
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'featured', 'portfolio', 'blog', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] font-sans selection:bg-neutral-900 selection:text-white">
      {/* 1. Header & Navigation */}
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="flex-1">
        {/* 2. Hero Section (The Split Identity Concept) */}
        <HeroSplit onExploreWork={() => scrollToSection('portfolio')} />

        {/* 3. About & Featured Philosophy */}
        <AboutSection />

        {/* 4. "Some of My Latest Work" Section */}
        <WorkGrid projects={PROJECTS} onOpenModal={setSelectedProject} />

        {/* 5. Blog & Notes Section */}
        <BlogSection />

        {/* 6. Contact Section */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

