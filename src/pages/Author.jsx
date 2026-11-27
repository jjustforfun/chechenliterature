import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';
import { useSearch } from '@/hooks/useSearch';
import { usePagination } from '@/hooks/usePagination';
import { getAllTags } from '@/utils/searchUtils';
import { getAuthorName, isNamedAuthor } from '@/utils/authorName';
import { buildCanonicalUrl, buildPageTitle, setPageMeta } from '@/utils/pageMeta';
import SearchBar from '@/components/features/SearchBar';
import CatalogGrid from '@/components/features/CatalogGrid';
import { catalogWorks } from '@/data/catalog';
import NotFound from './NotFound';
import './Author.css';

export default function Author() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const { t } = useTranslation();
  // The slug is the URI-encoded canonical (Cyrillic) author name.
  const author = useMemo(() => {
    try {
      return decodeURIComponent(slug || '');
    } catch {
      return '';
    }
  }, [slug]);

  const authorWorks = useMemo(() => catalogWorks.filter((w) => w.author === author), [author]);

  const {
    query,
    setQuery,
    filters,
    setFilters,
    sortBy,
    setSortBy,
    results,
    contentWorks,
    contentLanguage,
    setContentLanguage,
  } = useSearch(authorWorks);
  const allTags = useMemo(() => getAllTags(contentWorks), [contentWorks]);
  const authorName = getAuthorName(author, language);

  const paginationKey = JSON.stringify({
    author,
    query,
    tags: filters.tags,
    sortBy,
    contentLanguage,
  });
  const { visibleCount, showMore } = usePagination(paginationKey);
  const visibleResults = results.slice(0, visibleCount);

  useEffect(() => {
    if (!author || authorWorks.length === 0) return;
    const canonicalPath = `/author/${encodeURIComponent(author)}`;
    const altNames = Array.from(
      new Set([author, getAuthorName(author, 'en'), getAuthorName(author, 'fr')].filter(Boolean))
    );
    setPageMeta({
      title: buildPageTitle([authorName], t('site_title')),
      description: `${authorName} — ${authorWorks.length} ${t('works_label').toLowerCase()} · ${t('site_title')}`,
      canonicalPath,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        url: buildCanonicalUrl(canonicalPath),
        mainEntity: {
          '@type': isNamedAuthor(author) ? 'Person' : 'Thing',
          name: authorName,
          alternateName: altNames.filter((n) => n !== authorName),
        },
      },
    });
  }, [author, authorName, authorWorks.length, t]);

  if (!author || authorWorks.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="author">
      <header className="author__header">
        {isNamedAuthor(author) && <span className="author__eyebrow">{t('author_label')}</span>}
        <h1 className="author__title">{authorName}</h1>
        <p className="author__count">
          {contentWorks.length} {t('works_label').toLowerCase()}
        </p>
      </header>

      <section className="author__search">
        <SearchBar
          query={query}
          setQuery={setQuery}
          filters={filters}
          setFilters={setFilters}
          sortBy={sortBy}
          setSortBy={setSortBy}
          allTags={allTags}
          contentLanguage={contentLanguage}
          setContentLanguage={setContentLanguage}
        />
      </section>

      <section className="author__results">
        <CatalogGrid
          results={results}
          visibleResults={visibleResults}
          visibleCount={visibleCount}
          showMore={showMore}
          contentLanguage={contentLanguage}
        />
      </section>
    </div>
  );
}
