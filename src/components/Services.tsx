import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Plane, Route } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <MapPin className="w-8 h-8 text-brand-green-dark" />,
      title: t.services.local.title,
      desc: t.services.local.desc,
    },
    {
      icon: <Plane className="w-8 h-8 text-brand-green-dark" />,
      title: t.services.airport.title,
      desc: t.services.airport.desc,
    },
    {
      icon: <Route className="w-8 h-8 text-brand-green-dark" />,
      title: t.services.longDistance.title,
      desc: t.services.longDistance.desc,
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-white relative z-10 border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-display font-medium text-4xl md:text-6xl text-brand-dark uppercase tracking-tight max-w-2xl"
          >
            {t.services.title}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="h-px bg-brand-dark/10 w-full md:w-auto md:flex-1 hidden md:block mb-4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-green/20 border border-brand-green/40 rounded-3xl p-8 hover:bg-brand-green/40 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full border border-brand-green-dark/20 bg-brand-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                {svc.icon}
              </div>
              <h3 className="font-display text-2xl font-medium text-brand-dark mb-4">
                {svc.title}
              </h3>
              <p className="text-brand-dark/70 font-light leading-relaxed">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
