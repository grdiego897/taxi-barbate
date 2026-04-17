import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  MapPin, 
  Plane, 
  Train, 
  ChevronDown, 
  CalendarDays,
  BadgeEuro 
} from 'lucide-react';

// Distance Matrix based in logic: total KMs calculated.
// distToOrigin = distances["Barbate"][origin]
// distTrip = distances[origin][destination]
// distReturn = distances["Barbate"][destination]
const distances: Record<string, Record<string, number>> = {
  "Barbate": {
    "Malaga Airport": 190, "Seville Airport": 165, "Jerez Airport": 90,
    "San Fernando-Bahía Sur": 55, "Cádiz Station": 65, "Algeciras Station": 70, 
    "Jerez de la Frontera Station": 80, "Seville-Santa Justa Station": 160,
    "Cádiz": 65, "Málaga": 195, "Seville": 160, "Jerez de la Frontera": 80, 
    "Caños de Meca": 10, "Barbate": 0, "Zahara de los Atunes": 12, "Atlanterra": 16,
    "Algeciras": 70, "San Fernando": 55, "Conil de la Frontera": 25, "Vejer de la Frontera": 15, "Montenmedio": 10
  },
  "Zahara de los Atunes": {
    "Malaga Airport": 180, "Seville Airport": 175, "Jerez Airport": 100,
    "San Fernando-Bahía Sur": 65, "Cádiz Station": 75, "Algeciras Station": 60, 
    "Jerez de la Frontera Station": 90, "Seville-Santa Justa Station": 170,
    "Cádiz": 75, "Málaga": 185, "Seville": 170, "Jerez de la Frontera": 90, 
    "Caños de Meca": 22, "Barbate": 12, "Zahara de los Atunes": 0, "Atlanterra": 4,
    "Algeciras": 60, "San Fernando": 65, "Conil de la Frontera": 35, "Vejer de la Frontera": 20, "Montenmedio": 15
  },
  "Caños de Meca": {
    "Malaga Airport": 200, "Seville Airport": 155, "Jerez Airport": 80,
    "San Fernando-Bahía Sur": 45, "Cádiz Station": 55, "Algeciras Station": 80, 
    "Jerez de la Frontera Station": 70, "Seville-Santa Justa Station": 150,
    "Cádiz": 55, "Málaga": 205, "Seville": 150, "Jerez de la Frontera": 70, 
    "Caños de Meca": 0, "Barbate": 10, "Zahara de los Atunes": 22, "Atlanterra": 26,
    "Algeciras": 80, "San Fernando": 45, "Conil de la Frontera": 15, "Vejer de la Frontera": 18, "Montenmedio": 12
  }
};

const BASE_FARE = 3.66;
const RATE_WEEKDAY = 0.71;
const RATE_WEEKEND = 0.82;

const DESTINATION_GROUPS = [
  {
    key: 'airports',
    icon: <Plane className="w-4 h-4" />,
    items: ['Malaga Airport', 'Seville Airport', 'Jerez Airport']
  },
  {
    key: 'stations',
    icon: <Train className="w-4 h-4" />,
    items: ['San Fernando-Bahía Sur', 'Cádiz Station', 'Algeciras Station', 'Jerez de la Frontera Station', 'Seville-Santa Justa Station']
  },
  {
    key: 'towns',
    icon: <MapPin className="w-4 h-4" />,
    items: ['Cádiz', 'Málaga', 'Seville', 'Jerez de la Frontera', 'Caños de Meca', 'Barbate', 'Zahara de los Atunes', 'Atlanterra', 'Algeciras', 'San Fernando', 'Conil de la Frontera', 'Vejer de la Frontera', 'Montenmedio']
  }
];

export default function PricingCalculator() {
  const { t } = useLanguage();
  
  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [isWeekend, setIsWeekend] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);
  const [breakdown, setBreakdown] = useState<{distToOrigin: number, distTrip: number, distReturn: number, totalKms: number} | null>(null);

  // Dropdown states
  const [originOpen, setOriginOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.custom-select')) {
        setOriginOpen(false);
        setDestOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    if (origin && destination && origin !== destination) {
      calculateFare();
    } else {
      setCalculatedPrice(null);
    }
  }, [origin, destination, isWeekend]);

  const calculateFare = () => {
    if (!origin || !destination || origin === destination) return;
    
    const distToOrigin = distances["Barbate"][origin] || 0;
    const distTrip = distances[origin]?.[destination] || 0;
    const distReturn = distances["Barbate"][destination] || 0;
    
    // Taxi must leave Barbate, pick up client at Origin, drop off at Destination, and return to Barbate.
    const totalKms = distToOrigin + distTrip + distReturn;
    
    const currentRate = isWeekend ? RATE_WEEKEND : RATE_WEEKDAY;
    const total = BASE_FARE + (totalKms * currentRate);
    
    setCalculatedPrice(total);
    setBreakdown({ distToOrigin, distTrip, distReturn, totalKms });
  };

  const getTranslatedPlaceName = (key: string) => {
    // @ts-ignore
    return t.calculator.places[key] || key;
  };

  return (
    <section id="calculator" className="py-24 bg-brand-white text-brand-dark relative z-30 border-t border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-2xl"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green-dark shadow-sm">
              <Calculator className="w-8 h-8" />
            </div>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4 text-brand-dark">
            {t.calculator.title}
          </h2>
          <p className="text-lg text-brand-dark/70 font-light">
            {t.calculator.subtitle}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-3xl bg-white rounded-3xl p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-dark/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            
            {/* ORIGIN SELECT */}
            <div className="relative custom-select">
              <label className="block text-sm font-semibold uppercase tracking-wider text-brand-dark/50 mb-2">
                {t.calculator.origin}
              </label>
              <button 
                type="button"
                className={`w-full flex items-center justify-between bg-brand-white/50 border ${origin ? 'border-brand-green-dark border-b-2' : 'border-brand-dark/10'} rounded-xl px-4 py-4 focus:outline-none transition-all`}
                onClick={() => { setOriginOpen(!originOpen); setDestOpen(false); }}
              >
                <div className="flex items-center space-x-3 truncate font-medium text-brand-dark">
                  <MapPin className="w-5 h-5 text-brand-green-dark" />
                  <span className="truncate">
                    {origin ? getTranslatedPlaceName(origin) : t.calculator.selectOrigin}
                  </span>
                </div>
                <ChevronDown className="w-5 h-5 text-brand-dark/30" />
              </button>
              
              <AnimatePresence>
                {originOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                    className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-brand-dark/10 overflow-hidden"
                  >
                    <div className="max-h-[50vh] overflow-y-auto p-2">
                      {Object.keys(distances).map(k => (
                        <button
                          key={k}
                          className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${origin === k ? 'bg-brand-green/20 text-brand-green-dark' : 'hover:bg-brand-white text-brand-dark'}`}
                          onClick={() => { 
                            setOrigin(k); 
                            setOriginOpen(false); 
                            if(destination === k) setDestination(''); 
                          }}
                        >
                          {getTranslatedPlaceName(k)}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* DESTINATION SELECT */}
            <div className="relative custom-select">
              <label className="block text-sm font-semibold uppercase tracking-wider text-brand-dark/50 mb-2">
                {t.calculator.dest}
              </label>
              <button 
                type="button"
                className={`w-full flex items-center justify-between bg-brand-white/50 border ${destination ? 'border-brand-green-dark border-b-2' : 'border-brand-dark/10'} rounded-xl px-4 py-4 focus:outline-none transition-all`}
                onClick={() => { setDestOpen(!destOpen); setOriginOpen(false); }}
              >
                <div className="flex items-center space-x-3 truncate font-medium text-brand-dark">
                  <MapPin className="w-5 h-5 text-brand-green-dark" />
                  <span className="truncate">
                    {destination ? getTranslatedPlaceName(destination) : t.calculator.selectDest}
                  </span>
                </div>
                <ChevronDown className="w-5 h-5 text-brand-dark/30" />
              </button>
              
              <AnimatePresence>
                {destOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                    className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-xl border border-brand-dark/10 overflow-hidden"
                  >
                    <div className="max-h-[50vh] overflow-y-auto p-2">
                      {DESTINATION_GROUPS.map((group) => (
                        <div key={group.key} className="mb-2">
                           <div className="px-3 md:px-4 py-2 flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-brand-dark/30">
                              {group.icon}
                              {/* @ts-ignore */}
                              <span>{t.calculator.groups[group.key]}</span>
                           </div>
                           <div className="space-y-1">
                             {group.items.map(item => {
                               const isDisabled = item === origin;
                               return (
                                <button
                                  key={item}
                                  disabled={isDisabled}
                                  className={`w-full text-left px-4 py-2 md:py-3 rounded-lg text-sm font-medium transition-colors ${
                                    isDisabled ? 'opacity-30 cursor-not-allowed' : 
                                    destination === item ? 'bg-brand-green/20 text-brand-green-dark' : 'hover:bg-brand-white text-brand-dark'
                                  }`}
                                  onClick={() => { setDestination(item); setDestOpen(false); }}
                                >
                                  {getTranslatedPlaceName(item)}
                                </button>
                               )
                             })}
                           </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </div>

          <div className="mt-8 flex items-center justify-between bg-brand-white/50 rounded-xl p-4 border border-brand-dark/5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-brand-white flex justify-center items-center shrink-0 border border-brand-dark/5">
                <CalendarDays className="w-5 h-5 text-brand-green-dark" />
              </div>
              <div>
                <p className="font-medium text-brand-dark">{t.calculator.weekend}</p>
                <p className="text-xs text-brand-dark/50">+0.11€/km</p>
              </div>
            </div>
            <button
              type="button"
              className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                isWeekend ? 'bg-brand-green-dark' : 'bg-brand-dark/20'
              }`}
              onClick={() => setIsWeekend(!isWeekend)}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  isWeekend ? 'translate-x-6' : 'translate-x-1'
                } shadow-sm`}
              />
            </button>
          </div>

          <AnimatePresence>
            {calculatedPrice !== null && breakdown && (
              <motion.div 
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-brand-green/10 border-2 border-brand-green/30 rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start justify-between">
                  <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
                    <span className="text-sm font-semibold text-brand-green-dark uppercase tracking-wide mb-1">
                      {t.calculator.estimate}
                    </span>
                    <span className="font-display font-medium text-5xl text-brand-dark flex items-center">
                      {calculatedPrice.toFixed(2).replace('.', ',')}
                      <BadgeEuro className="w-8 h-8 ml-2 text-brand-green-dark" />
                    </span>
                  </div>
                  <div className="text-center md:text-right max-w-[200px] flex flex-col justify-center h-full pt-2">
                     <p className="text-xs text-brand-dark/60 italic leading-relaxed">
                       {t.calculator.note}
                     </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
}
