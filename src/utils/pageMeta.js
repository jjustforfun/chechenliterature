export const SITE_URL = 'https://noxchiindosh.vercel.app';

/**
 * Builds a document title like "Нана — Шайхи Арсанукаев — Нохчийн дош".
 * Pure function so it stays testable without a DOM.
 */
export function buildPageTitle(parts, siteTitle) {
  return [...parts, siteTitle].filter(Boolean).join(' — ');
}

/**
 * Builds a canonical URL from a route path (always stripping query parameters).
 */
export function buildCanonicalUrl(path = '/', siteUrl = SITE_URL) {
  const base = siteUrl.replace(/\/$/, '');
  const cleanPath = String(path || '/')
    .split('?')[0]
    .split('#')[0];
  const normalized = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  return `${base}${normalized}`;
}

/**
 * Truncates text cleanly to a meta-description-friendly length.
 */
export function truncateDescription(text, maxLength = 155) {
  const normalized = String(text || '')
    .replace(/\s+/g, ' ')
    .trim();
  if (!normalized || normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 1).trimEnd()}…`;
}

/** Sets document.title, no-op outside the browser (tests, SSR). */
export function setPageTitle(title) {
  if (typeof document !== 'undefined') {
    document.title = title;
  }
}

function upsertMeta(attrName, attrValue, content) {
  if (typeof document === 'undefined' || !content) return;
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!href) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(jsonLd) {
  if (typeof document === 'undefined') return;
  let el = document.head.querySelector('script[type="application/ld+json"][data-seo-jsonld]');
  if (!jsonLd) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-seo-jsonld', 'true');
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(jsonLd);
}

/**
 * Updates document title, meta description, robots, Open Graph, Twitter Card,
 * canonical URL, and JSON-LD structured data for the active route.
 */
export function setPageMeta({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  robots = 'index, follow, max-snippet:-1, max-image-preview:large',
  jsonLd = null,
} = {}) {
  if (typeof document === 'undefined') return;

  if (title) {
    document.title = title;
    upsertMeta('property', 'og:title', title);
    upsertMeta('name', 'twitter:title', title);
  }
  if (description) {
    const cleanDesc = truncateDescription(description);
    upsertMeta('name', 'description', cleanDesc);
    upsertMeta('property', 'og:description', cleanDesc);
    upsertMeta('name', 'twitter:description', cleanDesc);
  }
  if (robots) {
    upsertMeta('name', 'robots', robots);
  }
  if (ogType) {
    upsertMeta('property', 'og:type', ogType);
  }

  const canonicalUrl = canonicalPath === null ? null : buildCanonicalUrl(canonicalPath || '/');
  upsertCanonical(canonicalUrl);
  if (canonicalUrl) {
    upsertMeta('property', 'og:url', canonicalUrl);
  }
  upsertJsonLd(jsonLd);
}
