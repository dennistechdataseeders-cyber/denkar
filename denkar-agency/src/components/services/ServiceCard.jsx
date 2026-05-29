import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ title, description, icon: Icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay, type: 'spring', stiffness: 80 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative rounded-2xl p-6 md:p-8 glass-panel overflow-hidden transition-all duration-300 hover:border-brand-accent/30 hover:shadow-neon-blue cursor-pointer"
    >
      {/* Absolute Ambient Hover Glow Card Injections */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-accent/5 to-brand-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
        
        {/* Upper Identity Row */}
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-accent group-hover:bg-gradient-to-br group-hover:from-brand-accent group-hover:to-brand-purple group-hover:text-white transition-all duration-300 shadow-sm">
            <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-6" />
          </div>
          
          <div className="text-text-muted group-hover:text-brand-accent transition-colors duration-300">
            <ArrowUpRight className="w-5 h-5 transform translate-x-1 -translate-y-1 opacity-40 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
          </div>
        </div>

        {/* Core Content Block */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-brand-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </motion.div>
  );
}