'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '@/data';
import { FaChevronDown } from 'react-icons/fa';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 w-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-white/30 text-xs tracking-[0.25em] uppercase font-mono mb-3">
          /04 — FAQ & AI SEARCH DISCOVERY
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Frequently Asked <span className="text-purple">Questions</span>
        </h2>
        <p className="text-white/60 text-sm md:text-base mt-3 max-w-xl mx-auto">
          Insights on Sameer Khan&apos;s technical background, architecture approach, and role availability.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const contentId = `faq-content-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div
              key={index}
              className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden transition-colors duration-200 hover:border-purple/40"
            >
              <h3>
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span className="text-base sm:text-lg font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-purple shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-white/70 leading-relaxed border-t border-white/5 mt-1">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
