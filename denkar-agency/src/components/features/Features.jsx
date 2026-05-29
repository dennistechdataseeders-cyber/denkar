import React from 'react';
import FeatureCard from './FeatureCard';

const FEATURES_DATA = [
  {
    badge: 'Performance',
    title: 'Extreme Speed Matrix',
    description: 'We compile static components built on premium rendering layers. Expect 100ms load times, maximized core web vitals, and near-instant navigation.',
    highlightText: 'Sub-100ms TTFB Core',
  },
  {
    badge: 'Architecture',
    title: 'Monolithic Component Cleanliness',
    description: 'We code custom modular component structures entirely from scratch. Scale effortlessly without colliding scripts, formatting bugs, or dependency blockages.',
    highlightText: 'Production-Ready Modular',
  },
  {
    badge: 'Design UI',
    title: 'Silicon Valley Aesthetics',
    description: 'We build immersive interfaces utilizing micro-interactions, dark modes, glassmorphism, and balanced typography layouts tailored for corporate spaces.',
    highlightText: 'Pixel-Perfect Fidelity',
  },
  {
    badge: 'Conversion',
    title: 'Engineered Client Pipelines',
    description: 'Beautiful websites are useless if they don’t convert. Our custom user funnels are explicitly structured to scale lead capturing and customer actions.',
    highlightText: 'Optimized Action Paths',
  }
];

export default function Features() {
  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden border-t border-white/5">
      
      {/* Decorative Interactive Background Mesh Spheres */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline Element Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-bold tracking-widest text-brand-purple uppercase bg-brand-purple/10 border border-brand-purple/20 px-4 py-1.5 rounded-full">
            The Denkar Standard
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Why Startups & Enterprises <br className="hidden sm:inline"/>
            Choose Our <span className="bg-gradient-to-r from-brand-accent to-brand-purple bg-clip-text text-transparent">Development Engine</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            We bridge the gap between creative visual artistry and complex backend software systems. 
          </p>
        </div>

        {/* Structural Interactive Responsive Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {FEATURES_DATA.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              badge={feature.badge}
              title={feature.title}
              description={feature.description}
              highlightText={feature.highlightText}
              delay={index * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}