import { createContext, useContext, useReducer, useEffect } from 'react';

const LANGUAGES = ['ce', 'ru', 'en', 'fr'];
const DEFAULT_LANG = 'ce';

const LanguageContext = createContext(null);

function languageReducer(state, action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
}

function getInitialLanguage() {
  // localStorage has priority over default
  const saved = localStorage.getItem('lang');
  if (saved && LANGUAGES.includes(saved)) return saved;
  return DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [state, dispatch] = useReducer(languageReducer, {
    language: getInitialLanguage(),
  });

  const setLanguage = (lang) => {
    if (LANGUAGES.includes(lang)) {
      dispatch({ type: 'SET_LANGUAGE', payload: lang });
    }
  };

  useEffect(() => {
    document.documentElement.lang = state.language;
    localStorage.setItem('lang', state.language);
  }, [state.language]);

  return (
    <LanguageContext.Provider
      value={{ language: state.language, setLanguage, languages: LANGUAGES }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
