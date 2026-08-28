const isPresent = (value) =>
  typeof value === 'string' ? value.trim().length > 0 : value !== null && value !== undefined;

/**
 * Returns a field only when it exists in the requested language.
 * This is used for literary text so a missing translation is never silently
 * replaced with a text in another language.
 */
export function getFieldInLanguage(item, field, lang) {
  if (!item || !item[field]) {
    return { text: '', isFallback: false, language: null };
  }

  const fieldObj = item[field];
  if (typeof fieldObj !== 'object') {
    return { text: fieldObj, isFallback: false, language: null };
  }

  if (isPresent(fieldObj[lang])) {
    return { text: fieldObj[lang], isFallback: false, language: lang };
  }

  return { text: '', isFallback: true, language: null };
}

/**
 * Returns the translated value of a field from a literary work object.
 * If no translation exists for the requested language, falls back to Chechen
 * and then to the first available language. This legacy helper remains useful
 * for metadata, while literary text uses getFieldInLanguage above.
 *
 * @returns {{ text: string, isFallback: boolean, language: string|null }}
 */
export function getTranslatedField(item, field, lang, fallbackLang = 'ce') {
  if (!item || !item[field]) {
    return { text: '', isFallback: false, language: null };
  }

  const fieldObj = item[field];

  // If the field is not an object (e.g., author is a plain string), return as-is
  if (typeof fieldObj !== 'object') {
    return { text: fieldObj, isFallback: false, language: null };
  }

  // Try requested language
  if (isPresent(fieldObj[lang])) {
    return { text: fieldObj[lang], isFallback: false, language: lang };
  }

  // Fallback to default language
  if (isPresent(fieldObj[fallbackLang])) {
    return { text: fieldObj[fallbackLang], isFallback: true, language: fallbackLang };
  }

  // Try any available language
  const availableLang = Object.keys(fieldObj).find((key) => isPresent(fieldObj[key]));
  if (availableLang) {
    return { text: fieldObj[availableLang], isFallback: true, language: availableLang };
  }

  return { text: '', isFallback: true, language: null };
}
