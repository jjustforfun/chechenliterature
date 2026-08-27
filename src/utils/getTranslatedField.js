/**
 * Returns the translated value of a field from a literary work object.
 * If no translation exists for the requested language, falls back to Chechen ('ce').
 *
 * @param {Object} item - The literary work object (poem, song, prose)
 * @param {string} field - The field name to translate (e.g., 'title', 'text')
 * @param {string} lang - The requested language code ('ce', 'ru', 'en', 'fr')
 * @param {string} fallbackLang - Fallback language (default: 'ce')
 * @returns {{ text: string, isFallback: boolean }} The translated text and whether it's a fallback
 */
export function getTranslatedField(item, field, lang, fallbackLang = 'ce') {
  if (!item || !item[field]) {
    return { text: '', isFallback: false };
  }

  const fieldObj = item[field];

  // If the field is not an object (e.g., author is a plain string), return as-is
  if (typeof fieldObj !== 'object') {
    return { text: fieldObj, isFallback: false };
  }

  // Try requested language
  if (fieldObj[lang] !== null && fieldObj[lang] !== undefined) {
    return { text: fieldObj[lang], isFallback: false };
  }

  // Fallback to default language
  if (fieldObj[fallbackLang] !== null && fieldObj[fallbackLang] !== undefined) {
    return { text: fieldObj[fallbackLang], isFallback: true };
  }

  // Try any available language
  const availableLang = Object.keys(fieldObj).find(
    (key) => fieldObj[key] !== null && fieldObj[key] !== undefined
  );
  if (availableLang) {
    return { text: fieldObj[availableLang], isFallback: true };
  }

  return { text: '', isFallback: true };
}
