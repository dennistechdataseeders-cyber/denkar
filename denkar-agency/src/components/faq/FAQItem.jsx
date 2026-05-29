import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-white/5 last:border-0 py-4">
      {/* Interactive Disclosure Header Button Trigger */}
      <button
        onClick={onClick}
        className="w-full py-4 flex items-center justify-between text-left group focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-bold text-white group-hover:text-brand-accent transition-colors duration-300 pr-4">
          {question}
        </span>
        
        {/* Animated Rotating Vector Chevron Icon */}
        <div className={`p-2 rounded-lg bg-white/5 border border-white/5 text-text-secondary group-hover:text-white transition-all duration-300 ${isOpen ? 'bg-brand-accent/10 border-brand-accent/20 text-brand-accent' : ''}`}>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>
      </button>

      {/* Smooth Expanding Dropdown Wrapper */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-2 text-text-secondary text-sm sm:text-base leading-relaxed max-w-4xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}