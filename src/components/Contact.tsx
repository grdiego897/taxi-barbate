import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { EMAIL_ADDRESS, PHONE_DISPLAY, PHONE_NUMBER, WHATSAPP_URL } from '../config/site';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-brand-green relative z-10 border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-medium text-4xl md:text-5xl uppercase tracking-tight text-brand-dark mb-6">
                {t.contact.title}
              </h2>
              <p className="text-lg text-brand-dark/70 font-light">{t.contact.subtitle}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-brand-dark/5">
                  <Phone className="w-5 h-5 text-brand-green-dark" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-brand-dark/60 mb-1">{t.contact.call}</p>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="text-2xl font-display font-medium text-brand-dark hover:text-brand-green-dark transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-brand-dark/5">
                  <MessageCircle className="w-5 h-5 text-brand-green-dark" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-brand-dark/60 mb-1">WhatsApp</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-display font-medium text-brand-dark hover:text-brand-green-dark transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-brand-dark/5">
                  <Mail className="w-5 h-5 text-brand-green-dark" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-brand-dark/60 mb-1">{t.contact.email}</p>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="text-lg font-display font-light text-brand-dark hover:text-brand-green-dark transition-colors"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-brand-dark/5">
                  <MapPin className="w-5 h-5 text-brand-green-dark" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-brand-dark/60 mb-1">{t.contact.location}</p>
                  <p className="text-lg font-display font-light text-brand-dark">
                    11160 Barbate
                    <br />
                    Cadiz, Andalucia
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-brand-white text-brand-dark rounded-[2rem] p-8 md:p-14 flex flex-col justify-center shadow-sm border border-brand-dark/5"
          >
            <h3 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight mb-6">
              {t.contact.bookTitle}
            </h3>
            <p className="text-lg text-brand-dark/70 font-light mb-12 max-w-lg">{t.contact.bookDesc}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center space-x-3 bg-brand-dark text-brand-white px-8 py-5 rounded-full font-bold text-lg hover:bg-brand-green-dark transition-all duration-300 w-full"
              >
                <Phone className="w-5 h-5" />
                <span>{t.contact.call}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-green-500 text-white px-8 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 w-full shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
