import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-white py-8 border-t border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p className="text-brand-dark/50 text-sm font-light">
          {t.contact.footer}
        </p>
      </div>
    </footer>
  );
}
