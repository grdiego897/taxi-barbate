import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';

export default function Areas() {
  const { t } = useLanguage();

  const areasList = [
    t.areas.barbate,
    t.areas.zahara,
    t.areas.canos,
    t.areas.zahora,
  ];

  return (
    <section id="areas" className="py-24 bg-brand-white text-brand-dark relative z-10 border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left / Top Side */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-brand-green-dark mb-4">
                Costa de la Luz
              </p>
              <h2 className="font-display font-bold text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-8">
                {t.areas.title}
              </h2>
              <p className="text-xl md:text-2xl font-light text-brand-dark/70 max-w-md">
                {t.areas.desc}
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="w-24 h-24 rounded-full border-2 border-brand-green flex items-center justify-center mt-16 overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/map-cadiz/200/200?grayscale" 
                  alt="Map Location" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-60"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Right / Bottom Side */}
          <div className="flex flex-col justify-center">
            {areasList.map((area, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="group border-b border-brand-dark/10 py-6 md:py-8 flex items-center justify-between cursor-default"
              >
                <div className="flex items-center space-x-6">
                  <span className="font-display text-brand-green-dark/40 text-2xl font-bold group-hover:text-brand-green-dark transition-colors duration-300">
                    0{index + 1}
                  </span>
                  <span className="font-display text-3xl md:text-5xl font-medium tracking-tight group-hover:pl-4 transition-all duration-300">
                    {area}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
