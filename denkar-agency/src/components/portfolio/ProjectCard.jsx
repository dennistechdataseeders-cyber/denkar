import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Folder } from 'lucide-react';

export default function ProjectCard({ title, category, tags, imageColor }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, type: 'spring', stiffness: 100, damping: 20 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl glass-panel overflow-hidden border border-white/5 shadow-glass flex flex-col h-full"
    >
      {/* High-End Simulated Project Hero Visual Layer */}
      <div className={`w-full h-52 bg-gradient-to-br ${imageColor} relative overflow-hidden flex items-center justify-center p-6 border-b border-white/5`}>
        {/* Decorative Grid Matrix inside Image Area */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:16px_16px]" />
        
        {/* Floating Centered Technical Branding Emblem */}
        <div className="w-14 h-14 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 group-hover:scale-110 group-hover:text-brand-accent group-hover:border-brand-accent/40 transition-all duration-500 shadow-xl z-10">
          <Folder className="w-6 h-6" />
        </div>

        {/* Dynamic Image Overlay Sheen Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 via-transparent to-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Structured Content Metadata Frame */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-1">
          <span className="text-xs font-semibold tracking-widest text-brand-accent uppercase">
            {category}
          </span>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-brand-accent transition-colors duration-300">
              {title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-brand-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
          </div>
        </div>

        {/* Dynamic Tag Arrays */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="text-[11px] font-medium text-text-secondary bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}