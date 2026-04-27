import { ArrowRight, CarFront, Plane, Sparkles, Train } from 'lucide-react';
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
    <section
      id="popular-routes"
      className="py-24 md:py-28 bg-brand-white text-brand-dark relative z-10 border-t border-brand-dark/5 overflow-hidden"
    >
      <div className="hidden md:block absolute -bottom-20 -left-20 -z-0 h-80 w-80 rounded-full bg-brand-green/15 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10"
        >
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 mb-4 text-xs font-semibold tracking-[0.32em] uppercase text-brand-green-dark">
              <Sparkles className="w-3.5 h-3.5" />
              {t.popularRoutes.eyebrow}
            </p>
            <h2 className="font-display font-medium text-3xl md:text-5xl tracking-tight mb-4 leading-tight">
              {t.popularRoutes.title}
            </h2>
            <p className="text-base md:text-lg text-brand-dark/65 font-light leading-relaxed">
              {t.popularRoutes.subtitle}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.popularRoutes.items.map((route, index) => {
            const Icon = icons[index];
            const selection = routeSelections[index];

            return (
              <motion.a
                key={route.title}
                href="#calculator"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.04, duration: 0.4, ease: 'easeOut' }}
                whileHover={{ y: -3 }}
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent<CalculatorRouteSelection>(CALCULATOR_ROUTE_SELECTED_EVENT, {
                      detail: selection,
                    }),
                  );
                }}
                className="group relative flex items-center gap-4 rounded-[1.5rem] border border-brand-dark/10 bg-white px-5 py-4 shadow-[0_6px_20px_rgba(2,44,34,0.04)] hover:shadow-[0_18px_40px_rgba(2,44,34,0.09)] hover:border-brand-green-dark/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-brand-green via-brand-green-dark to-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-11 h-11 rounded-xl bg-linear-to-br from-brand-green/30 to-brand-green/10 border border-brand-green/30 flex items-center justify-center shrink-0 transition-transform group-hover:rotate-[-6deg] group-hover:scale-105">
                  <Icon className="w-5 h-5 text-brand-green-dark" />
                </div>

                <h3 className="font-display text-base md:text-lg font-medium text-brand-dark tracking-tight leading-snug flex-1">
                  {route.title}
                </h3>

                <ArrowRight className="w-4 h-4 text-brand-green-dark shrink-0 transition-transform group-hover:translate-x-1" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
