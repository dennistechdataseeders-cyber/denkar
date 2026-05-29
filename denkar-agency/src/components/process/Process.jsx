import React from 'react';
import ProcessStep from './ProcessStep';

const PROCESS_DATA = [
  {
    stepNumber: 1,
    title: 'Discovery & Vector Mapping',
    description: 'We audit your systems, map out software features, and create a comprehensive technical execution document. Zero guesswork, absolute architectural clarity.',
    details: ['System Audits', 'Scoping blueprints', 'User Flow Maps'],
  },
  {
    stepNumber: 2,
    title: 'High-Fidelity Architectural Design',
    description: 'We sculpt wireframes into high-fidelity custom designs using premium typography layouts, fluid micro-interactions, and beautiful dark modes.',
    details: ['Interactive Prototypes', 'Design Systems', 'UX Architecture'],
  },
  {
    stepNumber: 3,
    title: 'Full-Stack Technical Engineering',
    description: 'We transform approved blueprints into clean, production-ready code. We build with modular structures, high-performance engines, and strict standards.',
    details: ['React Native/Vite', 'Tailwind Layering', 'Clean API Hooks'],
  },
  {
    stepNumber: 4,
    title: 'Optimization & Production Launch',
    description: 'We optimize code execution, maximize Core Web Vitals, pass through security validations, and deploy your site onto Vercel infrastructure.',
    details: ['95+ Lighthouse Index', 'SEO Validation', 'Vercel Deployment'],
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden border-t border-white/5">
      
      {/* Decorative Ambient Lighting Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-block text-xs font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 px-4 py-1.5 rounded-full">
            Our Strategy
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            The Production <span className="bg-gradient-to-r from-brand-accent to-brand-purple bg-clip-text text-transparent">Lifecycle</span> Blueprint
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            We follow a structured deployment model designed to minimize friction and ship your project quickly without missing a pixel.
          </p>
        </div>

        {/* Chronological Timeline Rail and Node Container */}
        <div className="relative max-w-5xl mx-auto pl-10 md:pl-0">
          
          {/* Continuous Core Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-accent/50 via-brand-purple/40 to-white/5 md:-translate-x-1/2 pointer-events-none z-10" />

          {/* Dynamic Grid Mapping */}
          <div className="space-y-2">
            {PROCESS_DATA.map((step, index) => (
              <ProcessStep
                key={step.stepNumber}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                details={step.details}
                index={index}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}