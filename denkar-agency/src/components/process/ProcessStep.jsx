import React from 'react';
import { motion } from 'framer-motion';

export default function ProcessStep({ stepNumber, title, description, details, index }) {
  // Determine if this item should align left or right on desktop layouts
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between w-full mb-16 last:mb-0 group">
      
      {/* 1. Dynamic Desktop Layout Alternator Panels */}
      <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right md:order-1' : 'md:text-left md:order-2'} order-2`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 70 }}
          className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 shadow-glass space-y-3 relative overflow-hidden group-hover:border-brand-accent/20 transition-colors duration-300"
        >
          {/* Faint Background Watermark Number */}
          <div className={`absolute top-2 ${isEven ? 'left-4' : 'right-4'} text-7xl font-black text-white/[0.02] select-none font-sans`}>
            0{stepNumber}
          </div>

          <div className="space-y-1 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">
              Phase 0{stepNumber}
            </span>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              {title}
            </h3>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed relative z-10">
            {description}
          </p>

          <div className={`flex flex-wrap gap-1.5 pt-2 relative z-10 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
            {details.map((detail) => (
              <span key={detail} className="text-[10px] font-semibold text-text-muted bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {detail}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 2. Absolute Visual Center Anchor Timeline Node Pin */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20 top-0 md:top-1/2 md:-translate-y-1/2 md:order-3">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          className="w-10 h-10 rounded-full bg-brand-bg border-4 border-white/10 flex items-center justify-center font-bold font-sans text-xs text-text-secondary group-hover:border-brand-accent group-hover:text-white transition-all duration-300 shadow-neon-blue"
        >
          0{stepNumber}
        </motion.div>
      </div>

      {/* 3. Empty Layout Balancing Block for Desktop Positioning */}
      <div className="hidden md:block w-[45%] md:order-4" />

    </div>
  );
}