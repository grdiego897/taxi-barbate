import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_NUMBER, WHATSAPP_URL } from '../config/site';
import taxiSideImage from '../../img/taxiside.png';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const channels = [
    {
      icon: Phone,
      label: t.contact.call,
      value: PHONE_DISPLAY,
      href: `tel:${PHONE_NUMBER}`,
      external: false,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: PHONE_DISPLAY,
      href: WHATSAPP_URL,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-28 bg-linear-to-br from-brand-green via-brand-green to-brand-green/85 relative z-10 border-t border-brand-dark/5 overflow-hidden"
    >
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-white/30 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-brand-green-dark/25 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold tracking-[0.32em] uppercase text-brand-green-dark mb-4">
                {t.contact.eyebrow}
              </p>
              <h2 className="font-display font-medium text-4xl md:text-5xl uppercase tracking-tight text-brand-dark mb-5 leading-tight">
                {t.contact.title}
              </h2>
              <p className="text-lg text-brand-dark/70 font-light max-w-md leading-relaxed">
                {t.contact.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3"
            >
              {channels.map((c, idx) => {
                const Icon = c.icon;

                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/85 backdrop-blur-sm border border-white/60 hover:bg-white hover:-translate-y-0.5 transition-all duration-300 shadow-[0_6px_20px_rgba(2,44,34,0.06)] hover:shadow-[0_14px_30px_rgba(2,44,34,0.12)]"
                  >
                    <div className="w-12 h-12 bg-linear-to-br from-brand-green/30 to-brand-green-dark/15 rounded-xl flex items-center justify-center shrink-0 border border-brand-green-dark/15">
                      <Icon className="w-5 h-5 text-brand-green-dark" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-[0.32em] font-bold text-brand-dark/55 mb-1">
                        {c.label}
                      </p>
                      <p className="font-display text-lg text-brand-dark truncate group-hover:text-brand-green-dark transition-colors">
                        {c.value}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-brand-dark/40 group-hover:text-brand-green-dark group-hover:rotate-12 transition-all shrink-0"
                    />
                  </a>
                );
              })}

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/50">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 border border-brand-dark/8">
                  <MapPin className="w-5 h-5 text-brand-green-dark" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] font-bold text-brand-dark/55 mb-1">
                    {t.contact.location}
                  </p>
                  <p className="font-display text-base text-brand-dark">
                    11160 Barbate · Cádiz, Andalucía
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex items-center justify-center"
          >
            <img
              src={taxiSideImage}
              alt="Taxi Barbate"
              className="w-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
