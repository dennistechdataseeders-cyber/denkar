import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingCart, Briefcase, Cpu, Layout, BarChart3, RefreshCw } from 'lucide-react';
import ServiceCard from './ServiceCard';

// Comprehensive Core Capabilities Dataset Array
const SERVICES_DATA = [
  {
    title: 'Custom Websites',
    description: 'High-performance, bespoke web platforms engineered precisely around your startup brand identity. Zero boilerplate templates.',
    icon: Globe,
  },
  {
    title: 'E-commerce Architecture',
    description: 'Conversion-optimized merchant pipelines featuring flawless transactional paths, tailored checkouts, and custom API systems.',
    icon: ShoppingCart,
  },
  {
    title: 'Corporate Solutions',
    description: 'Highly credible, premium business solutions engineered to command market authority and captivate enterprise-tier operations.',
    icon: Briefcase,
  },
  {
    title: 'Advanced Web Applications',
    description: 'Complex software layers constructed inside reactive states. Scalable client platforms processing dense asynchronous routines smoothly.',
    icon: Cpu,
  },
  {
    title: 'High-Converting Landing Pages',
    description: 'Ultra-fast, meticulously structured visual flows designed explicitly to maximize conversion indexing for growth operations.',
    icon: Layout,
  },
  {
    title: 'Dashboard Infrastructure',
    description: 'Intricate administrative back-office cockpits engineered with clear diagnostic visualization layers and real-time operational feeds.',
    icon: BarChart3,
  },
  {
    title: 'System Redesigns',
    description: 'Transform legacy bottlenecks into fast, premium software systems. Complete architectural engine modernization overhauls.',
    icon: RefreshCw,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden border-t border-white/5">
      
      {/* Section Background Accent Gradient Nodes */}
      <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Typography Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-bold tracking-widest text-brand-purple uppercase bg-brand-purple/10 border border-brand-purple/20 px-4 py-1.5 rounded-full">
            Our Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Engineered Services Built for <span className="bg-gradient-to-r from-brand-accent to-brand-purple bg-clip-text text-transparent">Digital Dominance</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            We bypass trivial configurations to hand-craft high-performance digital systems that elevate your metrics and outpace your competition.
          </p>
        </div>

        {/* Dynamic Structural Capabilities Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              // Dynamically stagger execution delay offsets across horizontal tracks
              delay={(index % 3) * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}