import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';
import heroBackgroundWebp from '../playa.webp';
import heroBackgroundPng from '../playa.png';
import { PHONE_NUMBER, WHATSAPP_URL } from '../config/site';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden bg-brand-white">
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet={heroBackgroundWebp} type="image/webp" />
          <img
            src={heroBackgroundPng}
            alt="Taxi service in Barbate on the Costa de la Luz"
            className="w-full h-full object-cover scale-105 opacity-80"
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-white/70 via-brand-green/40 to-brand-white/95" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl"
        >
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-brand-green-dark font-semibold mb-5">
            {t.hero.kicker}
          </p>
          <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-brand-dark mb-6 uppercase">
            {t.hero.headline}
          </h1>
          <p
            className="text-lg md:text-2xl font-light max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{
              color: 'rgba(0, 30, 20, 0.9)',
            backdropFilter: 'blur(2px)',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '22px',
              padding: '8px 18px',
            }}
          >
            {t.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-brand-dark text-brand-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-green hover:text-brand-dark transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>{t.hero.cta}</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-brand-white border border-brand-dark/20 text-brand-dark px-8 py-4 rounded-full font-medium text-lg hover:bg-brand-green/20 hover:border-brand-green-dark transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-brand-green-dark" />
              <span>{t.hero.whatsapp}</span>
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-brand-dark/0 via-brand-dark/50 to-brand-dark" />
      </motion.div>
    </section>
  );
}
