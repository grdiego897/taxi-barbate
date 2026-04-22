import { ArrowRight, Plane, Train, CarFront } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  CALCULATOR_ROUTE_SELECTED_EVENT,
  type CalculatorRouteSelection,
} from '../lib/calculatorRouteSelection';

const icons = [Plane, Plane, Plane, Train, CarFront, CarFront];
const routeSelections: CalculatorRouteSelection[] = [
  { origin: 'Barbate', destination: 'Jerez Airport' },
  { origin: 'Barbate', destination: 'Seville Airport' },
  { origin: 'Barbate', destination: 'Malaga Airport' },
  { origin: 'Barbate', destination: 'Cadiz Station' },
  { origin: 'Zahara de los Atunes', destination: 'Barbate' },
  { origin: 'Caños de Meca', destination: 'Barbate' },
];

export default function PopularRoutes() {
  const { t } = useLanguage();

  return (
    <section id="popular-routes" className="py-24 bg-brand-white text-brand-dark relative z-10 border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="font-display font-medium text-3xl md:text-5xl tracking-tight mb-4"
          >
            {t.popularRoutes.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-dark/70 font-light leading-relaxed"
          >
            {t.popularRoutes.subtitle}
          </motion.p>
        </div>

        <div className="rounded-[1.75rem] border border-brand-dark/10 bg-linear-to-br from-brand-white to-brand-green/10 p-3 md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2.5">
          {t.popularRoutes.items.map((route, index) => {
            const Icon = icons[index];
            const selection = routeSelections[index];

            return (
              <motion.article
                key={route.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.06 }}
                className="group rounded-[1.25rem] border border-brand-dark/8 bg-brand-white/90 px-4 py-3 hover:border-brand-green-dark/20 hover:bg-brand-white transition-colors"
              >
                <a
                  href="#calculator"
                  className="flex items-center gap-3 min-w-0"
                  onClick={() => {
                    window.dispatchEvent(
                      new CustomEvent<CalculatorRouteSelection>(CALCULATOR_ROUTE_SELECTED_EVENT, {
                        detail: selection,
                      }),
                    );
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-green/18 border border-brand-green/25 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-brand-green-dark" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base md:text-lg font-medium text-brand-dark tracking-tight leading-snug">
                      {route.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-green-dark transition-transform group-hover:translate-x-0.5 shrink-0" />
                </a>
              </motion.article>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
