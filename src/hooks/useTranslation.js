import { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';

import ce from '../locales/ce.json';
import ru from '../locales/ru.json';
import en from '../locales/en.json';
import fr from '../locales/fr.json';

const locales = { ce, ru, en, fr };

/**
 * Custom translation hook.
 * Returns t(key) which looks up the key in the current language's locale file.
 * Falls back to Chechen ('ce') if the key is missing in the current language.
 */
export function useTranslation() {
  const { language } = useLanguage();

  const t = useMemo(() => {
    return (key) => {
      const value = locales[language]?.[key];
      if (value !== undefined && value !== null) return value;
      // Fallback to Chechen
      return locales.ce?.[key] || key;
    };
  }, [language]);

  return { t };
}
