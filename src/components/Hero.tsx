import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import heroBackground from '../playa.png';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-white">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Taxi Barbate en la costa"
          className="w-full h-full object-cover scale-105 opacity-80"
        />
        {/* Lighter gradient blending into brand green and white */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-white/70 via-brand-green/40 to-brand-white/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-brand-dark mb-6 uppercase">
            {t.hero.headline}
          </h1>
          <p className="text-lg md:text-2xl font-light text-brand-dark/80 max-w-2xl mx-auto mb-10">
            {t.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+34696742513"
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-brand-dark text-brand-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-green hover:text-brand-dark transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>{t.hero.cta}</span>
            </a>
            
            <a
              href="https://wa.me/34696742513"
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

      {/* Scroll indicator overlay */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-brand-dark/0 via-brand-dark/50 to-brand-dark"></div>
      </motion.div>
    </section>
  );
}
