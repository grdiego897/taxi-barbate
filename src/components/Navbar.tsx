import React, { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { PHONE_NUMBER } from '../config/site';
import { useLanguage } from '../contexts/LanguageContext';
import { getLanguagePath } from '../lib/i18n';
import type { Language } from '../translations';

const TaxiIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="-4 -2 44 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 3 14 C 3 16 4.5 17 6.5 17 H 29.5 C 31.5 17 33 16 33 14 L 30.5 7 C 29.5 4.5 27.5 4 25.5 4 H 10.5 C 8.5 4 6.5 4.5 5.5 7 Z" />
    <text
      x="18"
      y="12.5"
      fontSize="7.2"
      fontWeight="700"
      letterSpacing="0.15em"
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      fontFamily="system-ui, -apple-system, sans-serif, Arial"
      className="translate-x-[0.05em]"
    >
      TAXI
    </text>
  </svg>
);

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'de', label: 'DE', flag: '🇩🇪' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.prices, href: '#calculator' },
    { name: t.nav.areas, href: '#areas' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-brand-white/85 backdrop-blur-xl py-3 shadow-[0_8px_30px_rgba(2,44,34,0.08)] border-b border-brand-dark/5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative">
          <a href={getLanguagePath(language)} className="flex items-center space-x-3 z-50 relative">
            <TaxiIcon className="w-[3.75rem] h-auto text-brand-green-dark" />
            <span className="font-display font-bold text-xl tracking-tight text-brand-dark uppercase">
              Taxi <span className="text-brand-green-dark">Barbate</span>
            </span>
          </a>

          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <div className="flex space-x-6 backdrop-blur-sm bg-brand-white/80 px-6 py-2.5 rounded-full border border-brand-dark/10 shadow-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-brand-dark/80 hover:text-brand-green-dark uppercase tracking-wider transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-brand-white/80 backdrop-blur-sm shadow-sm rounded-full px-3 py-1.5 border border-brand-dark/10">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  className={`text-xs px-2.5 py-1 rounded-full transition-colors ${
                    language === lang.code ? 'bg-brand-green text-brand-dark font-medium' : 'text-brand-dark/60 hover:text-brand-dark'
                  }`}
                  title={lang.label}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="group flex items-center space-x-2 bg-brand-dark text-brand-white px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-brand-green hover:text-brand-dark transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>{t.nav.book}</span>
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden text-brand-dark z-50 relative p-2 bg-brand-white/50 backdrop-blur-sm rounded-full border border-brand-dark/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-brand-white pt-28 px-6 flex flex-col"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-4xl font-display font-medium text-brand-dark tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="mt-12 flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  className={`flex items-center justify-center text-sm px-4 py-2 border rounded-full transition-colors ${
                    language === lang.code ? 'border-brand-green bg-brand-green text-brand-dark' : 'border-brand-dark/20 text-brand-dark/60'
                  }`}
                >
                  <span className="font-medium">{lang.label}</span>
                </button>
              ))}
            </motion.div>

            <motion.div
              className="mt-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href={`tel:${PHONE_NUMBER}`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 bg-brand-dark text-brand-white px-6 py-4 rounded-full font-bold text-lg uppercase tracking-wide"
              >
                <Phone className="w-5 h-5" />
                <span>{t.hero.cta}</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
