import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

// Array of Filter Categorization Slugs
const FILTER_CATEGORIES = ['All', 'Web Applications', 'E-commerce', 'Dashboards', 'Landing Pages'];

// Premium Mock Portfolio Deliverables Array Dataset
const PORTFOLIO_DATA = [
  {
    title: 'Aura Crypto Ledger',
    category: 'Web Applications',
    tags: ['React', 'Web3.js', 'Tailwind', 'Framer Motion'],
    imageColor: 'from-[#0f172a] via-[#1e1b4b] to-[#4c1d95]',
  },
  {
    title: 'Veloce Global Market',
    category: 'E-commerce',
    tags: ['Next.js', 'GraphQL', 'Stripe API', 'Tailwind'],
    imageColor: 'from-[#022c22] via-[#064e3b] to-[#115e59]',
  },
  {
    title: 'Nexus Operations Deck',
    category: 'Dashboards',
    tags: ['React', 'Recharts', 'Zustand', 'WebSockets'],
    imageColor: 'from-[#1c1917] via-[#44403c] to-[#78716c]',
  },
  {
    title: 'Starlight SaaS Matrix',
    category: 'Landing Pages',
    tags: ['Vite', 'Tailwind CSS', 'Vanilla HTML5', 'GSAP'],
    imageColor: 'from-[#172554] via-[#1e3a8a] to-[#1d4ed8]',
  },
  {
    title: 'Solaria Energy Interface',
    category: 'Dashboards',
    tags: ['React Native', 'ChartJS', 'Tailwind', 'Firebase'],
    imageColor: 'from-[#312e81] via-[#1e1b4b] to-[#4338ca]',
  },
  {
    title: 'Apex Apparel Protocol',
    category: 'E-commerce',
    tags: ['Shopify Headless', 'Node.js', 'Tailwind', 'Redux'],
    imageColor: 'from-[#581c87] via-[#3b0764] to-[#701a75]',
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Logic filter mechanism matching categorical vectors cleanly
  const filteredProjects = activeFilter === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden border-t border-white/5">
      
      {/* Decorative Ambient Background Glows */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Framework */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 max-w-7xl mx-auto">
          <div className="space-y-3 text-left max-w-xl">
            <div className="inline-block text-xs font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 px-4 py-1.5 rounded-full">
              Case Studies
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Proven Digital <span className="bg-gradient-to-r from-brand-accent to-brand-purple bg-clip-text text-transparent">Masterpieces</span>
            </h2>
            <p className="text-text-secondary text-sm sm:text-base">
              Explore our gallery of high-performance digital engines engineered to achieve technical dominance.
            </p>
          </div>

          {/* Dynamic Desktop/Mobile Filter Selection Component Array */}
          <div className="flex flex-wrap gap-2 bg-white/[0.02] border border-white/5 p-1.5 rounded-2xl w-full md:w-auto overflow-x-auto scrollbar-none">
            {FILTER_CATEGORIES.map((category) => {
              const isSelected = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className="relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 whitespace-nowrap outline-none focus:outline-none"
                  style={{ color: isSelected ? '#000000' : '#b3b3b3' }}
                >
                  {/* Sliding Background Token Layer managed cleanly by Framer Motion */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-white rounded-xl z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Structural Project Grid Shell Wrapper with AnimatePresence layout animations */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                category={project.category}
                tags={project.tags}
                imageColor={project.imageColor}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}