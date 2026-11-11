#!/usr/bin/env node
/**
 * generate-sitemap.mjs — génère public/sitemap.xml depuis les données.
 *
 * Usage:
 *   npm run generate-sitemap
 *   npm run generate-sitemap -- --site-url=https://example.com
 *
 * Lancé par `npm run build` : le sitemap est régénéré à chaque déploiement.
 *
 * L'adresse du site est lue dans package.json ("homepage"), seul endroit où
 * elle est déclarée pour les scripts. --site-url vise ponctuellement un autre
 * domaine (Vercel : Project Settings → Domains).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'src/data');

const SITE_URL_ARG = '--site-url=';
const siteUrlArg = process.argv.find((a) => a.startsWith(SITE_URL_ARG));
const { homepage } = JSON.parse(readFileSync(path.join(ROOT, 'package.json'), 'utf-8'));
const rawSiteUrl = siteUrlArg ? siteUrlArg.slice(SITE_URL_ARG.length) : homepage || '';
const siteUrl = rawSiteUrl.replace(/\/$/, '');
if (!/^https?:\/\//.test(siteUrl)) {
  console.error(
    'Adresse du site introuvable : renseignez "homepage" dans package.json ' +
      'ou passez --site-url=https://example.com'
  );
  process.exit(1);
}

const load = (name) => JSON.parse(readFileSync(path.join(DATA_DIR, name), 'utf-8'));
const full = [...load('poems.json'), ...load('songs.json'), ...load('prose.json')];
const today = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: `${siteUrl}/`, lastmod: today, changefreq: 'daily', priority: '1.0' },
  { loc: `${siteUrl}/authors`, lastmod: today, changefreq: 'weekly', priority: '0.8' },
  ...['poem', 'song', 'prose'].map((type) => ({
    loc: `${siteUrl}/category/${type}`,
    lastmod: today,
    changefreq: 'daily',
    priority: '0.8',
  })),
  ...[...new Set(full.map((w) => w.author))].map((author) => ({
    loc: `${siteUrl}/author/${encodeURIComponent(author)}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.7',
  })),
  ...full.map((w) => ({
    loc: `${siteUrl}/${w.type}/${w.id}`,
    lastmod: w.date_added || today,
    changefreq: 'monthly',
    priority: '0.6',
  })),
];

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join('\n') +
  `\n</urlset>\n`;

writeFileSync(path.join(ROOT, 'public', 'sitemap.xml'), xml, 'utf-8');
console.log(`✅ sitemap.xml généré : ${urls.length} URLs (${siteUrl})`);
