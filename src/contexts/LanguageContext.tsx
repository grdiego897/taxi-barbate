import React, { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { detectLanguageFromPath, getLanguagePath } from '../lib/i18n';
import { translations, type Language, type TranslationTree } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationTree;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => detectLanguageFromPath(window.location.pathname));

  useEffect(() => {
    const syncLanguage = () => {
      setLanguageState(detectLanguageFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', syncLanguage);

    return () => window.removeEventListener('popstate', syncLanguage);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (lang: Language) => {
        if (lang === language) {
          return;
        }

        window.location.assign(getLanguagePath(lang, window.location.hash));
      },
      t: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
