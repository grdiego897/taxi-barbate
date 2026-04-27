import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { PHONE_DISPLAY, PHONE_NUMBER, WHATSAPP_URL } from '../config/site';
import { useLanguage } from '../contexts/LanguageContext';

export default function WhatsAppFab() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!visible || dismissed) {
      setExpanded(false);

      return;
    }

    const id = setTimeout(() => setExpanded(true), 800);

    return () => clearTimeout(id);
  }, [visible, dismissed]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-[60] flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-[18rem] bg-white rounded-2xl shadow-[0_18px_40px_rgba(2,44,34,0.18)] border border-brand-dark/8 p-4 pr-8"
              >
                <button
                  type="button"
                  onClick={() => {
                    setExpanded(false);
                    setDismissed(true);
                  }}
                  aria-label={t.fab.close}
                  className="absolute top-2 right-2 w-6 h-6 rounded-full text-brand-dark/40 hover:bg-brand-dark/5 hover:text-brand-dark flex items-center justify-center transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-brand-green-dark mb-1.5">
                  {t.fab.eyebrow}
                </p>
                <p className="text-sm text-brand-dark/85 font-medium leading-snug mb-3">
                  {t.fab.message}
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-3 py-2 rounded-full text-xs font-semibold hover:bg-[#1ea954] transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{t.fab.whatsapp}</span>
                  </a>
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center justify-center gap-2 bg-brand-dark/5 text-brand-dark px-3 py-2 rounded-full text-xs font-semibold hover:bg-brand-dark/10 transition-colors"
                  >
                    <span className="tabular-nums">{PHONE_DISPLAY}</span>
                  </a>
                </div>
                <span className="absolute -bottom-1.5 right-7 w-3 h-3 bg-white border-r border-b border-brand-dark/8 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(37,211,102,0.45)] hover:scale-105 hover:shadow-[0_18px_40px_rgba(37,211,102,0.55)] transition-all"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
            <MessageCircle className="w-6 h-6 relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
