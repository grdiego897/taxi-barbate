import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [openItem, setOpenItem] = useState<number>(0);

  return (
    <section id="faq" className="py-24 bg-brand-white text-brand-dark relative z-10 border-t border-brand-dark/5">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="font-display font-medium text-4xl md:text-6xl uppercase tracking-tight mb-5"
          >
            {t.faq.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-dark/70 font-light leading-relaxed"
          >
            {t.faq.subtitle}
          </motion.p>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.04 }}
                className="border border-brand-dark/10 rounded-[1.75rem] bg-brand-green/5 overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 md:px-8 md:py-6"
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl md:text-2xl font-medium">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 md:px-8 md:pb-8 text-brand-dark/70 font-light leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
