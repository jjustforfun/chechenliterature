import { describe, it, expect } from 'vitest';
import {
  SITE_URL,
  buildCanonicalUrl,
  buildPageTitle,
  setPageMeta,
  setPageTitle,
  truncateDescription,
} from './pageMeta.js';

describe('buildPageTitle', () => {
  it('joins parts with the site title', () => {
    expect(buildPageTitle(['Нана', 'Шайхи Арсанукаев'], 'Нохчийн дош')).toBe(
      'Нана — Шайхи Арсанукаев — Нохчийн дош'
    );
    expect(buildPageTitle(['Mother', 'Shaikhi Arsanukayev'], 'Noxçiyn Doş')).toBe(
      'Mother — Shaikhi Arsanukayev — Noxçiyn Doş'
    );
  });
  it('skips empty parts', () => {
    expect(buildPageTitle(['', null, 'Home'], 'Site')).toBe('Home — Site');
    expect(buildPageTitle([], 'Site')).toBe('Site');
  });
});

describe('buildCanonicalUrl', () => {
  it('builds clean canonical URLs without query parameters', () => {
    expect(buildCanonicalUrl('/')).toBe(`${SITE_URL}/`);
    expect(buildCanonicalUrl('/poem/nana?lang=fr#top')).toBe(`${SITE_URL}/poem/nana`);
    expect(buildCanonicalUrl('category/poem')).toBe(`${SITE_URL}/category/poem`);
  });
});

describe('truncateDescription', () => {
  it('collapses whitespace and truncates cleanly', () => {
    expect(truncateDescription('  Hello\n  world  ', 50)).toBe('Hello world');
    expect(truncateDescription('a'.repeat(170), 155)).toHaveLength(155);
  });
});

describe('setPageTitle & setPageMeta', () => {
  it('are no-ops without a DOM', () => {
    expect(() => setPageTitle('x')).not.toThrow();
    expect(() =>
      setPageMeta({
        title: 'Test',
        description: 'Desc',
        canonicalPath: '/poem/nana',
        jsonLd: { '@type': 'CreativeWork' },
      })
    ).not.toThrow();
  });
});
