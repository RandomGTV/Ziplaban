import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../../data/contactData';

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id || null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq-accordion" className="py-20 md:py-24 bg-white relative select-none scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#073BB8]/10 px-4 py-1.5 rounded-full">
            <HelpCircle size={14} className="text-[#073BB8]" />
            <span className="text-xs font-black uppercase tracking-widest text-[#073BB8]">
              COMMON QUESTIONS
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#10204A]"
            style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
          >
            Quick Answers
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-xl mx-auto">
            Everything you need to know about reaching our stores, orders, and collaborations.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FFF8EE] border-[#073BB8]/25 shadow-md'
                    : 'bg-white border-gray-200 hover:border-[#073BB8]/20 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#073BB8]/20 rounded-2xl"
                >
                  <span
                    className={`text-base sm:text-lg font-black transition-colors ${
                      isOpen ? 'text-[#073BB8]' : 'text-[#10204A]'
                    }`}
                    style={{ fontFamily: 'var(--font-comic, "Fredoka", sans-serif)' }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-[#073BB8] text-white rotate-180' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed font-medium border-t border-[#073BB8]/10 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
