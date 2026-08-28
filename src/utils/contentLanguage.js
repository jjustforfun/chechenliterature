export const CONTENT_LANGUAGES = ['ce', 'ru', 'en', 'fr'];

const isPresent = (value) =>
  typeof value === 'string' ? value.trim().length > 0 : value !== null && value !== undefined;

/**
 * Returns the languages in which the work has a full text.
 * The catalog can provide an explicit list; full records are derived from text.
 */
export function getAvailableContentLanguages(work) {
  if (Array.isArray(work?.available_languages)) {
    return work.available_languages.filter((lang) => CONTENT_LANGUAGES.includes(lang));
  }

  return CONTENT_LANGUAGES.filter((lang) => isPresent(work?.text?.[lang]));
}

export function hasContentInLanguage(work, language) {
  const available = getAvailableContentLanguages(work);
  if (language === 'all') return available.length > 0;
  return available.includes(language);
}

/**
 * Selects the language used to render a card when the catalog is in
 * "all languages" mode. The requested language always wins when available.
 */
export function getPreferredContentLanguage(work, requestedLanguage = 'ce') {
  const available = getAvailableContentLanguages(work);
  if (requestedLanguage !== 'all' && available.includes(requestedLanguage)) {
    return requestedLanguage;
  }
  if (available.length > 0) return available[0];

  // Index-only legacy records may have a preview but no full record.
  const previewLanguage = CONTENT_LANGUAGES.find((lang) => isPresent(work?.text_preview?.[lang]));
  if (previewLanguage) return previewLanguage;

  const titleLanguage = CONTENT_LANGUAGES.find((lang) => isPresent(work?.title?.[lang]));
  return titleLanguage || (requestedLanguage === 'all' ? 'ce' : requestedLanguage);
}

export function getLanguageLabelKey(language) {
  return `language_${language}`;
}

export function isPresentText(value) {
  return isPresent(value);
}
