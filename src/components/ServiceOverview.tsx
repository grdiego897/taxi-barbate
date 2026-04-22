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
import { vehicleGallery } from '../config/vehicleGallery';

const benefitIcons = [Clock3, BadgeEuro, CreditCard, Plane, Baby, ShieldCheck];

export default function ServiceOverview() {
  const { t } = useLanguage();

  const galleryItems = vehicleGallery.map((src) => ({
    src,
    alt: t.serviceOverview.imageAlt,
  }));

  return (
    <section id="services" className="relative isolate overflow-hidden border-t border-brand-dark/5 bg-white py-14 md:py-16">
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          className="relative"
        >
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)] xl:items-start">
            <div>
              <div className="mb-5 max-w-3xl md:mb-6">
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-green-dark/85 md:text-[11px]">
                  {t.serviceOverview.reasonsLabel}
                </p>
                <h2 className="font-display text-[2rem] leading-none tracking-[-0.04em] text-brand-dark md:text-[3.25rem] xl:text-[3.7rem]">
                  {t.benefits.title}
                </h2>
                <p className="mt-3 max-w-xl text-[13px] font-light leading-relaxed text-brand-dark/72 md:text-sm">
                  {t.benefits.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 md:grid-cols-3">
                {t.benefits.items.map((item, index) => {
                  const Icon = benefitIcons[index];

                  return (
                    <motion.article
                      key={item.title}
                      aria-label={`${item.title}. ${item.desc}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-30px' }}
                      transition={{ delay: index * 0.06 }}
                      className="group relative overflow-hidden rounded-[1.35rem] border border-brand-dark/8 bg-[linear-gradient(180deg,rgba(248,251,250,0.98)_0%,rgba(255,255,255,1)_100%)] px-3 py-4 text-center shadow-[0_8px_18px_rgba(2,44,34,0.045)] md:px-3.5 md:py-4.5"
                    >
                      <div className="relative">
                        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-brand-dark/8 bg-brand-white shadow-[0_6px_14px_rgba(2,44,34,0.045)] md:h-12 md:w-12">
                          <Icon className="h-5 w-5 text-brand-green-dark" />
                        </div>
                        <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-linear-to-r from-brand-green to-brand-green-dark/85 shadow-[0_0_12px_rgba(5,150,105,0.16)]" />
                        <h3 className="mx-auto max-w-[10ch] text-balance font-display text-[1.1rem] leading-tight text-brand-dark md:text-[1.45rem]">
                          {item.title}
                        </h3>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.14 }}
              className="relative"
            >
              <div className="grid gap-3">
                {galleryItems.map((image, index) => (
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ delay: 0.12 + index * 0.08 }}
                    className="relative"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={`w-full object-contain object-center ${image.src.includes('taxiinside') ? 'rounded-[1rem]' : ''}`}
                      style={{ filter: 'drop-shadow(0 14px 22px rgba(2,44,34,0.14)) saturate(1.02) contrast(1.02) blur(0.2px)' }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
