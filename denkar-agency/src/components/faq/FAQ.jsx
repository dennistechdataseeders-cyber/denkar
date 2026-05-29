import React, { useState } from 'react';
import FAQItem from './FAQItem';

const FAQ_DATA = [
  {
    question: 'How long does a typical custom corporate project take to build?',
    answer: 'Most custom landing pages and corporate sites deploy within 3 to 5 weeks. More complex applications with heavy API integrations, custom dashboards, or database layers generally track over a 6 to 10 week cycle depending on structural scope blueprints.',
  },
  {
    question: 'Do you build on pre-made WordPress templates or Webflow frameworks?',
    answer: 'No. We build completely custom architectural code paths using cutting-edge React architectures (Vite/Next.js) layered with Tailwind CSS engines. This eliminates security blockages, heavy script bloat, and gives your organization absolute structural scaling freedom.',
  },
  {
    question: 'Will our application platform rank well on Google search indexing?',
    answer: 'Absolutely. Because we write semantic code and optimize image bundles natively, our engines pass Lighthouse and Core Web Vitals checks with flying colors. We ensure near-instant load times, built-in structural meta maps, and strict SEO-ready page trees.',
  },
  {
    question: 'Can our internal creative marketing teams update content post-launch?',
    answer: 'Yes. We seamlessly wire our modular components to modern headless Content Management Systems (like Sanity or Strapi). Your team can easily edit copy, swap media items, and publish articles inside an absolute clean UI without risking breaking any underlying system structures.',
  }
];

export default function FAQ() {
  // Track open state using a single index container or null if completely collapsed
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden border-t border-white/5">
      
      {/* Decorative Spatial Background Ambient Lighting Grid */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Typography Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-bold tracking-widest text-brand-accent uppercase bg-brand-accent/10 border border-brand-accent/20 px-4 py-1.5 rounded-full">
            Inquiries Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Frequently Asked <span className="bg-gradient-to-r from-brand-accent to-brand-purple bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Got technical questions? We have clear, straightforward answers. Here is what engineering partners ask us most.
          </p>
        </div>

        {/* Master Accordion Shell Core Layout Grid */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-2xl border border-white/5 shadow-glass">
          <div className="divide-y divide-white/5">
            {FAQ_DATA.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}