import {
  Baby,
  BadgeEuro,
  Clock3,
  CreditCard,
  Plane,
  ShieldCheck,
} from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

const benefitIcons = [Clock3, BadgeEuro, CreditCard, Plane, Baby, ShieldCheck];

export default function ServiceOverview() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden border-t border-brand-dark/5 bg-white py-20 md:py-28"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-brand-green-dark/30 to-transparent" />
      <div className="hidden md:block absolute -top-32 left-1/2 -translate-x-1/2 -z-10 h-72 w-[42rem] rounded-full bg-brand-green/25 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-brand-green-dark">
              {t.benefits.eyebrow}
            </p>
            <h2 className="font-display text-[2.25rem] leading-[0.95] tracking-[-0.03em] text-brand-dark md:text-[3.5rem] xl:text-[4rem]">
              {t.benefits.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-brand-dark/70 md:text-lg">
              {t.benefits.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.benefits.items.map((item, index) => {
              const Icon = benefitIcons[index];

              return (
                <motion.article
                  key={item.title}
                  aria-label={`${item.title}. ${item.desc}`}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.04, duration: 0.4, ease: 'easeOut' }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-brand-dark/8 bg-linear-to-b from-white to-brand-green/5 p-6 shadow-[0_8px_24px_rgba(2,44,34,0.04)] transition-all duration-300 hover:border-brand-green-dark/30 hover:shadow-[0_18px_40px_rgba(2,44,34,0.08)] md:p-7"
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-green/0 blur-2xl transition-all duration-500 group-hover:bg-brand-green/40" />

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand-green/30 bg-white shadow-[0_4px_14px_rgba(5,150,105,0.12)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]">
                      <Icon className="h-5 w-5 text-brand-green-dark" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg leading-snug tracking-tight text-brand-dark md:text-xl">
                        {item.title}
                      </h3>
                      <div className="mt-2 h-px w-10 origin-left scale-x-100 bg-linear-to-r from-brand-green-dark to-brand-green/40 transition-all duration-300 group-hover:w-16" />
                      <p className="mt-3 text-sm font-light leading-relaxed text-brand-dark/70">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <span
                    className="absolute bottom-4 right-5 font-display text-3xl font-light text-brand-green-dark/15 transition-colors duration-300 group-hover:text-brand-green-dark/35"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </motion.article>
              );
            })}
          </div>
      </div>
    </section>
  );
}
