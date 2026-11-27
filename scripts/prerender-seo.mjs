#!/usr/bin/env node
/**
 * prerender-seo.mjs — post-build static SEO & GEO pre-renderer.
 *
 * Reads the built `dist/index.html` template and emits route-specific static
 * HTML files (`dist/poem/<id>/index.html`, `dist/song/<id>/index.html`,
 * `dist/prose/<id>/index.html`, `dist/category/<type>/index.html`,
 * `dist/authors/index.html`, `dist/author/<name>/index.html`, and `dist/index.html`)
 * plus `dist/llms-full.txt`.
 *
 * Every route receives exact `<title>`, `<meta name="description">`,
 * `<link rel="canonical">`, OpenGraph, Twitter Card, Schema.org JSON-LD, and
 * full semantic HTML inside `<div id="root">` for search engines and AI
 * crawlers that do not execute JavaScript. React 18 `createRoot` mounts
 * seamlessly over `<div id="root">` for interactive visitors.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { getAuthorName, isNamedAuthor } from '../src/utils/authorName.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'src/data');
const DIST_DIR = path.join(ROOT, 'dist');

const LANGS = ['ce', 'ru', 'en', 'fr'];
const { homepage } = JSON.parse(readFileSync(path.join(ROOT, 'package.json'), 'utf-8'));
const SITE_URL_ARG = '--site-url=';
const siteUrlArg = process.argv.find((a) => a.startsWith(SITE_URL_ARG));
const siteUrl = (siteUrlArg ? siteUrlArg.slice(SITE_URL_ARG.length) : homepage || '').replace(
  /\/$/,
  ''
);

if (!/^https?:\/\//.test(siteUrl)) {
  console.error('Missing valid "homepage" in package.json or --site-url');
  process.exit(1);
}

const loadJson = (name) => JSON.parse(readFileSync(path.join(DATA_DIR, name), 'utf-8'));
const poems = loadJson('poems.json');
const songs = loadJson('songs.json');
const prose = loadJson('prose.json');
const allWorks = [...poems, ...songs, ...prose];

const template = readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeJsonLd(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function truncate(str, max = 155) {
  const clean = String(str || '')
    .replace(/\s+/g, ' ')
    .trim();
  if (!clean || clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).trimEnd()}…`;
}

function isPresent(v) {
  return typeof v === 'string' && v.trim().length > 0;
}

function firstTitle(work) {
  for (const l of LANGS) {
    if (isPresent(work.title?.[l])) return { text: work.title[l].trim(), lang: l };
  }
  return { text: work.id, lang: 'ce' };
}

function writeRouteHtml(relPath, htmlContent) {
  const targetDir = relPath ? path.join(DIST_DIR, relPath) : DIST_DIR;
  mkdirSync(targetDir, { recursive: true });
  writeFileSync(path.join(targetDir, 'index.html'), htmlContent, 'utf-8');
}

function renderPageHtml({ lang = 'ce', title, description, canonicalUrl, ogType, jsonLd, body }) {
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(truncate(description));
  const safeUrl = escapeHtml(canonicalUrl);

  let html = template;
  html = html.replace(/<html lang="[^"]*">/, `<html lang="${escapeHtml(lang)}">`);
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`);
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
    `<meta name="description" content="${safeDesc}" />`
  );
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${safeUrl}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${safeTitle}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${safeDesc}" />`
  );
  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:type" content="${escapeHtml(ogType || 'website')}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
    `<meta property="og:url" content="${safeUrl}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${safeTitle}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${safeDesc}" />`
  );
  html = html.replace(
    /<script type="application\/ld\+json" data-seo-jsonld>[\s\S]*?<\/script>/,
    `<script type="application/ld+json" data-seo-jsonld>${escapeJsonLd(jsonLd)}</script>`
  );
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  return html;
}

const GENRE_LABELS = {
  poem: { ce: 'Байташ', ru: 'Стихи', en: 'Poetry', fr: 'Poésie' },
  song: { ce: 'Иллеш', ru: 'Песни', en: 'Songs', fr: 'Chansons' },
  prose: { ce: 'Проза', ru: 'Проза', en: 'Prose', fr: 'Prose' },
};

// Group authors
const worksByAuthor = new Map();
for (const w of allWorks) {
  if (!w.author) continue;
  if (!worksByAuthor.has(w.author)) worksByAuthor.set(w.author, []);
  worksByAuthor.get(w.author).push(w);
}
const namedAuthors = [...worksByAuthor.keys()].filter(isNamedAuthor);

// 1. Pre-render work detail pages (/poem|song|prose/:id)
for (const work of allWorks) {
  const { text: mainTitle, lang: titleLang } = firstTitle(work);
  const availLangs = LANGS.filter((l) => isPresent(work.text?.[l]));
  const primaryLang = availLangs[0] || titleLang;
  const authorEn = getAuthorName(work.author, 'en');
  const authorFr = getAuthorName(work.author, 'fr');
  const altAuthors = [...new Set([work.author, authorEn, authorFr].filter(Boolean))];
  const authorDisplay =
    authorEn && authorEn !== work.author ? `${work.author} (${authorEn})` : work.author;
  const canonicalUrl = `${siteUrl}/${work.type}/${work.id}`;

  const previewText =
    LANGS.map((l) => work.text_preview?.[l]).find(isPresent) ||
    LANGS.map((l) => work.text?.[l]).find(isPresent) ||
    '';

  const schemaType =
    work.type === 'song'
      ? 'MusicComposition'
      : work.type === 'prose'
        ? 'ShortStory'
        : 'CreativeWork';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': schemaType,
      name: mainTitle,
      alternateName: LANGS.map((l) => work.title?.[l])
        .filter((v) => isPresent(v) && v.trim() !== mainTitle)
        .map((v) => v.trim()),
      url: canonicalUrl,
      inLanguage: availLangs.length ? availLangs : [primaryLang],
      genre: GENRE_LABELS[work.type].en,
      author: {
        '@type': isNamedAuthor(work.author) ? 'Person' : 'Organization',
        name: work.author,
        alternateName: altAuthors.filter((n) => n !== work.author),
      },
      ...(work.year_written ? { dateCreated: String(work.year_written) } : {}),
      ...(work.date_added ? { datePublished: work.date_added } : {}),
      ...(work.tags?.length ? { keywords: work.tags.join(', ') } : {}),
      isPartOf: {
        '@type': 'WebSite',
        name: 'Нохчийн дош / Noxçiyn Doş',
        url: `${siteUrl}/`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Нохчийн дош', item: `${siteUrl}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: GENRE_LABELS[work.type].ce,
          item: `${siteUrl}/category/${work.type}`,
        },
        { '@type': 'ListItem', position: 3, name: mainTitle, item: canonicalUrl },
      ],
    },
  ];

  const altTitlesHtml = LANGS.filter(
    (l) => isPresent(work.title?.[l]) && work.title[l] !== mainTitle
  )
    .map((l) => `<span lang="${l}">${escapeHtml(work.title[l])}</span>`)
    .join(' · ');

  const textSectionsHtml = availLangs
    .map((l) => {
      const blocks = work.text[l]
        .split(/\n{2,}/)
        .map((b) => `<p>${escapeHtml(b).replace(/\n/g, '<br />')}</p>`)
        .join('');
      return `<section lang="${l}" data-lang="${l}">${blocks}</section>`;
    })
    .join('');

  const linksHtml =
    work.external_links?.length > 0
      ? `<ul>${work.external_links
          .filter((l) => l?.url)
          .map(
            (l) =>
              `<li><a href="${escapeHtml(l.url)}" rel="noopener noreferrer">${escapeHtml(l.label || l.url)}</a></li>`
          )
          .join('')}</ul>`
      : '';

  const body = `<main class="container seo-fallback"><article>
<nav aria-label="Breadcrumb"><a href="/">Нохчийн дош</a> / <a href="/category/${work.type}">${escapeHtml(GENRE_LABELS[work.type].ce)}</a> / <a href="/author/${encodeURIComponent(work.author)}">${escapeHtml(authorDisplay)}</a></nav>
<header><h1>${escapeHtml(mainTitle)}</h1>${altTitlesHtml ? `<p>${altTitlesHtml}</p>` : ''}<p>${escapeHtml(authorDisplay)}${work.author_years ? ` (${escapeHtml(work.author_years)})` : ''}</p></header>
${textSectionsHtml}
${work.source ? `<p>Source: ${escapeHtml(work.source)}</p>` : ''}
${linksHtml}
</article></main>`;

  const html = renderPageHtml({
    lang: primaryLang,
    title: `${mainTitle} — ${authorDisplay} — Нохчийн дош / Noxçiyn Doş`,
    description: `${mainTitle} — ${authorDisplay}. ${previewText}`,
    canonicalUrl,
    ogType: 'article',
    jsonLd,
    body,
  });

  writeRouteHtml(path.join(work.type, work.id), html);
}

// 2. Pre-render author pages (/author/:slug)
for (const [author, works] of worksByAuthor.entries()) {
  const authorEn = getAuthorName(author, 'en');
  const authorFr = getAuthorName(author, 'fr');
  const altNames = [...new Set([author, authorEn, authorFr].filter(Boolean))];
  const display = authorEn && authorEn !== author ? `${author} / ${authorEn}` : author;
  const encoded = encodeURIComponent(author);
  const canonicalUrl = `${siteUrl}/author/${encoded}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: canonicalUrl,
    mainEntity: {
      '@type': isNamedAuthor(author) ? 'Person' : 'Thing',
      name: author,
      alternateName: altNames.filter((n) => n !== author),
    },
  };

  const listHtml = works
    .map((w) => {
      const { text: wt } = firstTitle(w);
      return `<li><a href="/${w.type}/${w.id}">${escapeHtml(wt)}</a></li>`;
    })
    .join('');

  const body = `<main class="container seo-fallback"><article>
<nav><a href="/">Нохчийн дош</a> / <a href="/authors">Яздархой / Authors</a></nav>
<h1>${escapeHtml(display)}</h1>
<p>${works.length} works</p>
<ul>${listHtml}</ul>
</article></main>`;

  const html = renderPageHtml({
    lang: 'ce',
    title: `${display} — Нохчийн дош / Noxçiyn Doş`,
    description: `${display} — ${works.length} Chechen literary works on Нохчийн дош (Noxçiyn Doş).`,
    canonicalUrl,
    ogType: 'profile',
    jsonLd,
    body,
  });

  writeRouteHtml(path.join('author', author), html);
}

// 3. Pre-render /authors directory
{
  const canonicalUrl = `${siteUrl}/authors`;
  const sortedAuthors = [...namedAuthors].sort(
    (a, b) => worksByAuthor.get(b).length - worksByAuthor.get(a).length
  );
  const listHtml = sortedAuthors
    .map((a) => {
      const en = getAuthorName(a, 'en');
      const count = worksByAuthor.get(a).length;
      return `<li><a href="/author/${encodeURIComponent(a)}">${escapeHtml(a)} (${escapeHtml(en)})</a> — ${count}</li>`;
    })
    .join('');

  const html = renderPageHtml({
    lang: 'ce',
    title: `Яздархой / Authors (${sortedAuthors.length}) — Нохчийн дош / Noxçiyn Doş`,
    description: `Directory of ${sortedAuthors.length} Chechen poets and writers on Нохчийн дош (Noxçiyn Doş).`,
    canonicalUrl,
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Chechen Authors Directory',
      url: canonicalUrl,
      numberOfItems: sortedAuthors.length,
    },
    body: `<main class="container seo-fallback"><h1>Яздархой / Chechen Authors (${sortedAuthors.length})</h1><ul>${listHtml}</ul></main>`,
  });
  writeRouteHtml('authors', html);
}

// 4. Pre-render category pages (/category/:type)
for (const [type, works] of [
  ['poem', poems],
  ['song', songs],
  ['prose', prose],
]) {
  const canonicalUrl = `${siteUrl}/category/${type}`;
  const labels = GENRE_LABELS[type];
  const listHtml = works
    .map((w) => {
      const { text: wt } = firstTitle(w);
      return `<li><a href="/${w.type}/${w.id}">${escapeHtml(wt)}</a> — ${escapeHtml(w.author)}</li>`;
    })
    .join('');

  const html = renderPageHtml({
    lang: 'ce',
    title: `${labels.ce} / ${labels.en} (${works.length}) — Нохчийн дош / Noxçiyn Doş`,
    description: `${labels.en} (${works.length} works) in Chechen, Russian, English, and French on Нохчийн дош (Noxçiyn Doş).`,
    canonicalUrl,
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${labels.ce} — ${labels.en}`,
      url: canonicalUrl,
      numberOfItems: works.length,
    },
    body: `<main class="container seo-fallback"><h1>${escapeHtml(labels.ce)} / ${escapeHtml(labels.en)} (${works.length})</h1><ul>${listHtml}</ul></main>`,
  });
  writeRouteHtml(path.join('category', type), html);
}

// 5. Enrich root dist/index.html with semantic navigation & summary
{
  const featured = allWorks
    .slice(0, 40)
    .map(
      (w) =>
        `<li><a href="/${w.type}/${w.id}">${escapeHtml(firstTitle(w).text)}</a> — ${escapeHtml(w.author)}</li>`
    )
    .join('');
  const homeBody = `<main class="container seo-fallback">
<header><h1>Нохчийн дош (Noxçiyn Doş) — Нохчийн литературан портал</h1>
<p>Chechen Literature Portal: ${poems.length} poems (байташ), ${songs.length} songs (иллеш), and ${prose.length} prose works across Chechen, Russian, English, and French.</p></header>
<nav><a href="/category/poem">Байташ / Poetry (${poems.length})</a> · <a href="/category/song">Иллеш / Songs (${songs.length})</a> · <a href="/category/prose">Проза / Prose (${prose.length})</a> · <a href="/authors">Яздархой / Authors (${namedAuthors.length})</a></nav>
<ul>${featured}</ul>
</main>`;

  const homeHtml = renderPageHtml({
    lang: 'ce',
    title: 'Нохчийн дош (Noxçiyn Doş) — Байташ, иллеш, проза',
    description:
      'Нохчийн дош (Noxçiyn Doş) — портал чеченской литературы: стихи (байташ), героические песни (иллеш) и проза на чеченском, русском, английском и французском языках.',
    canonicalUrl: `${siteUrl}/`,
    ogType: 'website',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Нохчийн дош',
      alternateName: ['Noxçiyn Doş', 'Chechen Literature Portal', 'Чеченская литература'],
      url: `${siteUrl}/`,
      inLanguage: ['ce', 'ru', 'en', 'fr'],
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    body: homeBody,
  });
  writeRouteHtml('', homeHtml);
}

// 6. Generate dist/llms-full.txt for AI crawlers
{
  const lines = [
    '# Нохчийн дош (Noxçiyn Doş) — Complete Catalog Index',
    '',
    `> Total works: ${allWorks.length} (${poems.length} poems, ${songs.length} songs, ${prose.length} prose) · Named authors: ${namedAuthors.length}`,
    `> Canonical base URL: ${siteUrl}/`,
    '',
  ];
  for (const w of allWorks) {
    const titles = LANGS.filter((l) => isPresent(w.title?.[l]))
      .map((l) => `${l}: ${w.title[l].trim()}`)
      .join(' | ');
    const avail = LANGS.filter((l) => isPresent(w.text?.[l])).join(', ');
    const authorEn = getAuthorName(w.author, 'en');
    const authorLabel = authorEn !== w.author ? `${w.author} (${authorEn})` : w.author;
    const preview = truncate(LANGS.map((l) => w.text_preview?.[l]).find(isPresent) || '', 140);
    lines.push(
      `- [${w.type}] ${titles} — ${authorLabel} [${avail}] — ${siteUrl}/${w.type}/${w.id}`
    );
    if (preview) lines.push(`  > ${preview}`);
  }
  writeFileSync(path.join(DIST_DIR, 'llms-full.txt'), lines.join('\n') + '\n', 'utf-8');
}

const totalPages = 1 + 1 + 3 + worksByAuthor.size + allWorks.length;
console.log(`✅ SEO/GEO pré-rendu : ${totalPages} pages HTML + llms-full.txt générés dans dist/`);
