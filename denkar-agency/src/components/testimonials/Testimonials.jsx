import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

// Premium Enterprise Social Proof Dataset
const TESTIMONIALS_DATA = [
  {
    name: 'Sarah Jenkins',
    role: 'CTO, FinTech Nexus',
    quote: "Denkar completely re-architected our client interface from scratch. Their component cleanliness and selection of modern tools saved our internal engineering team months of development overhead. Truly elite.",
    rating: 5,
  },
  {
    name: 'Marcus Thorne',
    role: 'Founder, Veloce Global',
    quote: "The speed optimization Denkar applied to our headless e-commerce store is unreal. Our checkout conversion index immediately scaled by 32% within two weeks of launching our new digital engine.",
    rating: 5,
  },
  {
    name: 'Elena Rostova',
    role: 'Product Director, Solaria Energy',
    quote: "Bypassing heavy templates to build a custom dashboard gave us absolute operational freedom. The UI/UX architecture feels premium, sleek, and matches top-tier Silicon Valley standards perfectly.",
    rating: 5,
  },
];

// Slider Animation Variants for Fluid Directional Flipping
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 25 }
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 }
  })
};

export default function Testimonials() {
  // Triple State Tuple Architecture managing indices and direction
  const [[page, direction], setPage] = useState([0, 0]);

  // Wrap index mapping boundaries cleanly using math helpers
  const activeIndex = Math.abs(page % TESTIMONIALS_DATA.length);

  const navigateSlider = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const activeCard = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden border-t border-white/5">
      
      {/* Absolute Decorative Ambient Nebula Fields */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Typography Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-bold tracking-widest text-brand-purple uppercase bg-brand-purple/10 border border-brand-purple/20 px-4 py-1.5 rounded-full">
            Client Endorsements
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Trusted By High-Growth <span className="bg-gradient-to-r from-brand-accent to-brand-purple bg-clip-text text-transparent">Innovators</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Don't just take our word for it. Here is how partner organizations describe our product craftsmanship.
          </p>
        </div>

        {/* Master Slider Interactive Housing Shell */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12 flex flex-col items-center">
          
          <div className="w-full relative min-h-[340px] sm:min-h-[280px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full glass-panel p-8 md:p-12 rounded-2xl border border-white/5 shadow-glass relative overflow-hidden flex flex-col justify-between space-y-6 cursor-grab active:cursor-grabbing"
              >
                {/* Decorative Upper Giant Quote Symbol Icon */}
                <Quote className="absolute right-8 top-6 w-24 h-24 text-white/[0.02] transform pointer-events-none stroke-[1.5]" />

                {/* Rating Stars Array Layer */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(activeCard.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Core Testimonial Copy block */}
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed italic">
                  "{activeCard.quote}"
                </p>

                {/* Separator Line */}
                <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {activeCard.name}
                    </h4>
                    <p className="text-xs text-brand-accent font-semibold tracking-wider uppercase">
                      {activeCard.role}
                    </p>
                  </div>
                  
                  {/* Subtle Technical Footprint Indicator */}
                  <span className="text-[10px] font-mono text-text-muted select-none tracking-widest hidden sm:inline">
                    // VERIFIED_FEEDBACK
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Navigation Control Nodes Array */}
          <div className="flex items-center gap-4 mt-8 z-20">
            <button
              onClick={() => navigateSlider(-1)}
              className="p-3 rounded-full border border-white/10 bg-white/5 text-text-secondary hover:text-white hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300 focus:outline-none"
              aria-label="Previous Testimonial Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Bullet Tracking Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? 'w-6 bg-brand-accent' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => navigateSlider(1)}
              className="p-3 rounded-full border border-white/10 bg-white/5 text-text-secondary hover:text-white hover:border-brand-accent hover:bg-brand-accent/10 transition-all duration-300 focus:outline-none"
              aria-label="Next Testimonial Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}