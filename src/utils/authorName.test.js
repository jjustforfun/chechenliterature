import { describe, it, expect } from 'vitest';
import {
  getAuthorName,
  getWorkAuthor,
  hasReviewedAuthorName,
  isNamedAuthor,
} from './authorName.js';

describe('getAuthorName', () => {
  it('keeps Cyrillic for ce/ru', () => {
    expect(getAuthorName('Муса Гешаев', 'ce')).toBe('Муса Гешаев');
    expect(getAuthorName('Муса Гешаев', 'ru')).toBe('Муса Гешаев');
  });
  it('uses reviewed transcriptions for known authors', () => {
    expect(getAuthorName('Муса Гешаев', 'en')).toBe('Musa Geshayev');
    expect(getAuthorName('Муса Гешаев', 'fr')).toBe('Moussa Gechayev');
    expect(getAuthorName('Ӏаьрби Мамакаев', 'en')).toBe('Arbi Mamakayev');
    expect(getAuthorName('СаьӀид Гацаев', 'fr')).toBe('Said Gatsayev');
    expect(getAuthorName('Бексултанов Муса', 'fr')).toBe('Beksoultanov Moussa');
  });
  it('translates collective/folk labels semantically instead of treating them as person names', () => {
    expect(getAuthorName('Халкъан', 'ce')).toBe('Халкъан');
    expect(getAuthorName('Халкъан', 'ru')).toBe('Народное (фольклор)');
    expect(getAuthorName('Халкъан', 'en')).toBe('Chechen folklore');
    expect(getAuthorName('Халкъан', 'fr')).toBe('Folklore tchétchène');
    expect(getAuthorName('Anonyme tchétchène', 'en')).toBe('Chechen anonymous');
    expect(getAuthorName('Anonyme tchétchène', 'fr')).toBe('Anonyme tchétchène');
  });
  it('falls back to transliteration for unknown authors', () => {
    const en = getAuthorName('Тест Тестов', 'en');
    const fr = getAuthorName('Тест Тестов', 'fr');
    expect(en).toMatch(/Test/);
    expect(fr).toMatch(/Test/);
    expect(en).not.toMatch(/[А-Яа-я]/);
  });
  it('passes through falsy values', () => {
    expect(getAuthorName('', 'en')).toBe('');
  });
});

describe('isNamedAuthor & hasReviewedAuthorName', () => {
  it('distinguishes real authors from folk/anonymous labels', () => {
    expect(isNamedAuthor('Халкъан')).toBe(false);
    expect(isNamedAuthor('Anonyme tchétchène')).toBe(false);
    expect(isNamedAuthor('Муса Гешаев')).toBe(true);
    expect(hasReviewedAuthorName('Муса Гешаев')).toBe(true);
    expect(hasReviewedAuthorName('Халкъан')).toBe(false);
  });
});

describe('getWorkAuthor', () => {
  it('reads work.author', () => {
    expect(getWorkAuthor({ author: 'Муса Гешаев' }, 'fr')).toBe('Moussa Gechayev');
  });
});
