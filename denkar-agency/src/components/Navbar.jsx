import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For mobile viewports

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Core Native Section Scroller Engine
  const handleScrollTo = (e, sectionId) => {
    e.preventDefault(); // Stop the browser from appending /services to the URL
    
    // For 'Home', simply scroll back to the top of the viewport
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsOpen(false); // Close mobile drawer if it's open
  };

  // 2. Map structural section link IDs to match our homepage components
  const NAV_LINKS = [
    { label: 'Home', targetId: 'top' },
    { label: 'Services', targetId: 'services' },
    { label: 'Portfolio', targetId: 'portfolio' },
    { label: 'Why Us', targetId: 'why-choose-us' },
    { label: 'Process', targetId: 'process' },
    { label: 'FAQ', targetId: 'faq' },
    { label: 'Contact', targetId: 'contact' }, // Redirecting to CTA box
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030014]/70 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo Anchor */}
        <a href="#top" onClick={(e) => handleScrollTo(e, 'top')} className="text-xl font-black text-white tracking-tighter">
          DENKAR<span className="text-brand-accent">.</span>
        </a>

        {/* DESKTOP MENU: Clean hardware-accelerated triggers */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={`#${link.targetId}`}
              onClick={(e) => handleScrollTo(e, link.targetId)}
              className="text-sm font-semibold text-text-secondary hover:text-brand-accent transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* MOBILE MENU TRIGGER BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN DRAWER PANEL */}
      {isOpen && (
        <div className="md:hidden bg-[#030014]/95 border-b border-white/5 py-4 px-6 space-y-4 absolute top-20 left-0 right-0 flex flex-col backdrop-blur-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={`#${link.targetId}`}
              onClick={(e) => handleScrollTo(e, link.targetId)}
              className="text-base font-bold text-text-secondary hover:text-white py-2 border-b border-white/[0.02]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}