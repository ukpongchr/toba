import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "Do you travel outside of Geneva?",
      answer: "Yes, I regularly travel across Switzerland (Lausanne, Zurich, Bern, Basel) and internationally for projects. My experience includes filming in over 12 countries across 3 continents."
    },
    {
      question: "What is your typical turnaround time?",
      answer: "For most corporate projects, I provide a first draft within 3-5 business days. For events, I can offer same-day highlight reels or 24-hour delivery for press releases."
    },
    {
      question: "Do you handle the entire production process?",
      answer: "Yes, I offer full-service production, including pre-production planning, filming, editing, colour grading, and motion graphics. I can also work as part of a larger crew if needed."
    },
    {
      question: "What are your rates?",
      answer: "Rates vary depending on the project scope, equipment required, and deliverables. I offer competitive day rates and project-based pricing. Contact me for a custom quote tailored to your budget."
    },
    {
      question: "Do you have insurance and permits?",
      answer: "Yes, I carry full professional liability insurance and can arrange necessary filming permits for locations in Geneva and across Switzerland."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#051126] py-12 md:py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h4 className="text-[10px] uppercase tracking-widest text-teal-accent mb-2">COMMON QUESTIONS</h4>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Frequently Asked <span className="text-teal-accent">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-sm bg-[#0a1930] overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-bold text-sm md:text-base pr-8">{faq.question}</span>
                <div className="text-teal-accent shrink-0">
                  {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
