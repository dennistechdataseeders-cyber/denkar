import React from 'react';
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import Portfolio from '../components/portfolio/Portfolio';
import Features from '../components/features/Features';
import Process from '../components/process/Process';
import Testimonials from '../components/testimonials/Testimonials';
import FAQ from '../components/faq/FAQ';
import Footer from '../components/footer/Footer'; // Added Step 10 Component Reference

export default function Home() {
  return (
    <div className="w-full relative">
      {/* Step 3 Component */}
      <Hero />
      
      {/* Step 4 Component */}
      <Services />

      {/* Step 5 Component */}
      <Portfolio />

      {/* Step 6 Component */}
      <Features />

      {/* Step 7 Component */}
      <Process />

      {/* Step 8 Component */}
      <Testimonials />

      {/* Step 9 Component */}
      <FAQ />

      {/* Step 10 Component Injection */}
      <Footer />
    </div>
  );
}