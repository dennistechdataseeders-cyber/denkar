import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

// Framer Motion Animation Variants for Staggered Children Injections
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* Decorative Interactive Background Grids & Radial Lights */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 max-w-5xl space-y-8"
      >
        {/* Upper Accent Badge */}
        <motion.div variants={itemVariants} className="inline-flex justify-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-purple/10 to-brand-accent/10 border border-brand-accent/20 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-brand-accent backdrop-blur-md shadow-neon-blue">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '3s' }} />
            Next-Gen Web Architecture
          </div>
        </motion.div>

        {/* Master Copy Typography Stack */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.1]">
            We Engineer High-End <br />
            <span className="bg-gradient-to-r from-brand-accent via-[#a855f7] to-brand-purple bg-clip-text text-transparent">
              Digital Flagships
            </span>
          </h1>
          
          <p className="text-text-secondary text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Denkar builds elite custom software systems, scalable e-commerce platforms, and immersive user experiences designed to scale. We combine clean code with premium startup aesthetics.
          </p>
        </motion.div>

        {/* Interactive CTA Hub */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-black bg-white hover:bg-brand-accent hover:text-black hover:shadow-neon-blue active:scale-98 transition-all duration-300"
          >
            Launch Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-text-secondary bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-md"
          >
            <Code className="w-4 h-4" />
            View Showcase
          </Link>
        </motion.div>

        {/* Floating Futuristic Tech Indicators Dashboard */}
        <motion.div 
          variants={itemVariants}
          className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-white/5 text-left"
        >
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-xs font-semibold text-brand-accent uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" /> Core Stack
            </div>
            <div className="text-sm font-bold text-white">React / Vite / Node</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-xs font-semibold text-brand-purple uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-ping" /> Design Target
            </div>
            <div className="text-sm font-bold text-white">Premium Silicon Valley Quality</div>
          </div>

          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 col-span-2 md:col-span-1">
            <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1">
              Performance Index
            </div>
            <div className="text-sm font-bold text-white">100% Lighthouse Clean</div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}