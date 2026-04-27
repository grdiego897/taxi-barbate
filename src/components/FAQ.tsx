import { useState } from 'react';
import { HelpCircle, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [openItem, setOpenItem] = useState<number>(0);

  return (
    <section
      id="faq"
      className="py-24 md:py-28 bg-brand-white text-brand-dark relative z-10 border-t border-brand-dark/5 overflow-hidden"
    >
      <div className="hidden md:block absolute -top-32 -right-20 -z-0 h-80 w-80 rounded-full bg-brand-green/15 blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-brand-green/40 mb-6 shadow-[0_8px_24px_rgba(5,150,105,0.12)]"
          >
            <HelpCircle className="w-6 h-6 text-brand-green-dark" />
          </motion.div>
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
            className="text-lg md:text-xl text-brand-dark/65 font-light leading-relaxed"
          >
            {t.faq.subtitle}
          </motion.p>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.04 }}
                className={`border rounded-2xl bg-white overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-brand-green-dark/30 shadow-[0_12px_32px_rgba(5,150,105,0.08)]'
                    : 'border-brand-dark/10 hover:border-brand-green-dark/20'
                }`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-5 md:px-7 md:py-6 group"
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <span
                      className={`shrink-0 mt-1 inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold tabular-nums transition-colors ${
                        isOpen
                          ? 'bg-brand-green-dark text-white'
                          : 'bg-brand-green/15 text-brand-green-dark'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-lg md:text-xl font-medium leading-snug pt-0.5">
                      {item.question}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
                      isOpen
                        ? 'bg-brand-green-dark text-white rotate-45'
                        : 'bg-brand-green/15 text-brand-green-dark group-hover:bg-brand-green/30'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 md:px-7 md:pb-7 pl-16 md:pl-[4.25rem]">
                        <p className="text-brand-dark/70 font-light leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
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
