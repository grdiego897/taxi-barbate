import React from 'react';
import { motion } from 'motion/react';
import canos240 from '../../img/optimized/canos-240.webp';
import canos384 from '../../img/optimized/canos-384.webp';
import canos512 from '../../img/optimized/canos-512.webp';
import zahara240 from '../../img/optimized/zahara-240.webp';
import zahara384 from '../../img/optimized/zahara-384.webp';
import zahara512 from '../../img/optimized/zahara-512.webp';
import zahora240 from '../../img/optimized/zahora-240.webp';
import zahora384 from '../../img/optimized/zahora-384.webp';
import zahora512 from '../../img/optimized/zahora-512.webp';
import { useLanguage } from '../contexts/LanguageContext';

export default function Areas() {
  const { t } = useLanguage();

  const areasList = [t.areas.barbate, t.areas.zahara, t.areas.canos, t.areas.zahora];
  const featuredAreas = [
    { name: t.areas.canos, src: canos384, srcSet: `${canos240} 240w, ${canos384} 384w, ${canos512} 512w` },
    { name: t.areas.zahara, src: zahara384, srcSet: `${zahara240} 240w, ${zahara384} 384w, ${zahara512} 512w` },
    { name: t.areas.zahora, src: zahora384, srcSet: `${zahora240} 240w, ${zahora384} 384w, ${zahora512} 512w` },
  ];

  return (
    <section id="areas" className="py-24 bg-brand-white text-brand-dark relative z-10 border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-brand-green-dark mb-4">
                {t.areas.tag}
              </p>
              <h2 className="font-display font-bold text-5xl md:text-7xl uppercase leading-[0.9] tracking-tight mb-8">
                {t.areas.title}
              </h2>
              <p className="text-xl md:text-2xl font-light text-brand-dark/70 max-w-md">{t.areas.desc}</p>
            </div>

            <div className="mt-12 flex flex-nowrap items-center justify-between gap-2 sm:justify-start sm:gap-3">
              {featuredAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex flex-1 min-w-0 items-center sm:flex-none"
                >
                  <div className="w-full aspect-square rounded-[1.75rem] border-2 border-brand-green shadow-[0_10px_30px_rgba(2,44,34,0.08)] overflow-hidden sm:w-32 sm:h-32">
                    <img
                      src={area.src}
                      srcSet={area.srcSet}
                      sizes="(min-width: 640px) 128px, 30vw"
                      width={384}
                      height={384}
                      alt={area.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col justify-center">
            {areasList.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
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
