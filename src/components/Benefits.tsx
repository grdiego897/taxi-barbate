import { CreditCard, Baby, Clock3, Plane, ShieldCheck, BadgeEuro } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

const icons = [Clock3, BadgeEuro, CreditCard, Plane, Baby, ShieldCheck];

export default function Benefits() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-brand-white relative z-10 border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="font-display font-medium text-4xl md:text-6xl uppercase tracking-tight text-brand-dark mb-5"
          >
            {t.benefits.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-dark/70 font-light leading-relaxed"
          >
            {t.benefits.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {t.benefits.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[2rem] border border-brand-dark/10 bg-brand-green/10 p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-white border border-brand-dark/10 flex items-center justify-center mb-6 shadow-sm">
                  <Icon className="w-6 h-6 text-brand-green-dark" />
                </div>
                <h3 className="font-display text-2xl font-medium text-brand-dark mb-3">{item.title}</h3>
                <p className="text-brand-dark/70 font-light leading-relaxed">{item.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
