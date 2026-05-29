import React, { useState } from 'react';
import {  ArrowRight, CheckCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#030014] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      
      {/* Absolute Decorative Geometric Ambient Lighting Blobs */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* UPPER ZONE: High-Conversion Lead Capture Card Banner */}
        <div id="contact" className="max-w-5xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-white/5 bg-gradient-to-br from-[#0c0728]/60 to-transparent shadow-glass mb-20 relative overflow-hidden group hover:border-brand-accent/10 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
                Let's Build Something Legendary
              </span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                Ready to Accelerate Your <br />Digital Footprint?
              </h3>
              <p className="text-text-secondary text-sm sm:text-base max-w-md">
                Join our elite product brief to receive deep architectural updates, tech system insights, and performance engineering tactics.
              </p>
            </div>

            {/* State-Driven Newsletter Capture Node */}
            <div className="w-full">
              {!submitted ? (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your corporate email"
                    className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-text-muted text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-brand-accent hover:bg-brand-accent/90 text-brand-bg font-bold text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-neon-blue group/btn"
                  >
                    Subscribe Brief
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-3 bg-brand-accent/10 border border-brand-accent/20 p-4 rounded-xl text-brand-accent">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-semibold">
                    Transmission encrypted. You have successfully joined the Denkar pipeline loop.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* MIDDLE ZONE: Core Architectural Navigation Map & Link Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-5xl mx-auto pb-16 border-b border-white/5">
          
          {/* Brand Identity Pillar Block */}
          <div className="space-y-4 md:col-span-1">
            <div className="text-2xl font-black text-white tracking-tighter select-none font-sans">
              DENKAR<span className="text-brand-accent">.</span>
            </div>
            <p className="text-text-muted text-xs leading-relaxed">
              Engineering premium, ultra-high-performance components and immersion front-end layout pipelines for enterprise spaces.
            </p>
            {/* Social Vector Node Layouts */}
            <div className="flex items-center gap-3 pt-2">

              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/5 text-text-secondary hover:text-white hover:border-brand-accent transition-all duration-300" aria-label="Twitter Profile">
                Twitter
              </a>
            </div>
          </div>

          {/* Sitemaps System Lists */}
          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">ENGINE</h4>
            <ul className="space-y-2.5 text-xs font-medium text-text-secondary">
              <li><button onClick={() => scrollToSection('hero')} className="hover:text-brand-accent transition-colors">Core System</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-brand-accent transition-colors">Capability Grid</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className="hover:text-brand-accent transition-colors">Showcase Deck</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-4">PROTOCOLS</h4>
            <ul className="space-y-2.5 text-xs font-medium text-text-secondary">
              <li><button onClick={() => scrollToSection('why-choose-us')} className="hover:text-brand-accent transition-colors">The Standard</button></li>
              <li><button onClick={() => scrollToSection('process')} className="hover:text-brand-accent transition-colors">Workflow Blueprint</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-brand-accent transition-colors">Inquiries Matrix</button></li>
            </ul>
          </div>
        </div>

        {/* LOWER ZONE: Intellectual Property Legal Row */}
        <div className="max-w-5xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-medium text-text-muted gap-4">
          <div>
            © 2026 Denkar Systems Inc. All rights architecture reserved.
          </div>
          <div className="flex items-center gap-6 font-sans">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy System</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Operations</a>
          </div>
        </div>

      </div>
    </footer>
  );
}