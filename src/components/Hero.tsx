import React from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, MessageCircle, Phone } from 'lucide-react';
import heroBg640 from '../../img/optimized/playa-640.webp';
import heroBg960 from '../../img/optimized/playa-960.webp';
import heroBg1280 from '../../img/optimized/playa-1280.webp';
import heroBg1920 from '../../img/optimized/playa-1920.webp';
import { PHONE_NUMBER, WHATSAPP_URL } from '../config/site';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, prefersReducedMotion ? 0 : 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  return (
    <section className="relative h-screen min-h-[640px] md:min-h-[720px] flex items-center justify-center overflow-hidden bg-brand-white">
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: prefersReducedMotion ? 0 : y }}
      >
        <img
          src={heroBg1280}
          srcSet={`${heroBg640} 640w, ${heroBg960} 960w, ${heroBg1280} 1280w, ${heroBg1920} 1920w`}
          sizes="100vw"
          width={1280}
          height={853}
          alt="Taxi service in Barbate on the Costa de la Luz"
          className="w-full h-[110%] object-cover scale-105 opacity-85"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-white/65 via-brand-green/35 to-brand-white" />
        <div className="absolute inset-0 hidden md:block bg-[radial-gradient(ellipse_at_top,rgba(167,243,208,0.35),transparent_60%)]" />
      </motion.div>

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-xs md:text-sm uppercase tracking-[0.32em] text-brand-green-dark font-semibold mb-5"
          >
            {t.hero.kicker}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="font-display font-medium text-5xl md:text-7xl lg:text-[8.5rem] leading-[0.85] tracking-tight text-brand-dark mb-7 uppercase"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-2xl font-light max-w-3xl mx-auto mb-10 leading-relaxed text-brand-dark/85 px-4 py-2 rounded-2xl bg-brand-white/60 md:bg-brand-white/40 md:backdrop-blur-[3px] border border-brand-white/40"
          >
            {t.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-brand-dark text-brand-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:bg-brand-green hover:text-brand-dark hover:shadow-[0_12px_32px_rgba(5,150,105,0.35)] hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              <span>{t.hero.cta}</span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-brand-white md:bg-brand-white/95 md:backdrop-blur-sm border border-brand-dark/15 text-brand-dark px-8 py-4 rounded-full font-medium text-lg hover:bg-brand-green/30 hover:border-brand-green-dark hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_18px_rgba(2,44,34,0.06)]"
            >
              <MessageCircle className="w-5 h-5 text-brand-green-dark" />
              <span>{t.hero.whatsapp}</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#services"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-brand-dark/60 hover:text-brand-dark transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">{t.hero.scroll}</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-brand-dark/0 via-brand-dark/40 to-brand-dark/80"
          animate={prefersReducedMotion ? undefined : { scaleY: [0.5, 1, 0.5], originY: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
        <ArrowDown className="w-3.5 h-3.5" />
      </motion.a>
    </section>
  );
}
