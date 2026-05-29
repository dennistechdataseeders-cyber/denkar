import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ title, description, badge, highlightText, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay, type: 'spring', stiffness: 90 }}
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-2xl p-6 md:p-8 bg-[#0a0520]/40 backdrop-blur-premium border border-white/5 shadow-glass overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:border-brand-purple/30"
    >
      {/* Premium Geometric Background Grid & Glow Patterns */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-purple/10 to-transparent rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-150 group-hover:from-brand-accent/20" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-glow/5 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 space-y-6">
        {/* Upper Header Row Tracking Badges */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black tracking-widest text-brand-accent bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full uppercase">
            {badge}
          </span>
          <span className="text-3xl font-black text-white/5 group-hover:text-brand-purple/20 font-sans tracking-tighter transition-colors duration-500 select-none">
            //DENKAR
          </span>
        </div>

        {/* Content Typography Layer */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-brand-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Structural Accent Footer Layer */}
      <div className="relative z-10 pt-6 mt-4 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs font-semibold text-brand-purple group-hover:text-white transition-colors duration-300">
          {highlightText}
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-brand-purple group-hover:bg-brand-accent group-hover:shadow-neon-blue transition-all duration-300" />
      </div>
    </motion.div>
  );
}