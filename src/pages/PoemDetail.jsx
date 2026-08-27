import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';
import { getTranslatedField } from '@/utils/getTranslatedField';
import { findSimilarWorks } from '@/utils/searchUtils';
import SimilarWorks from '@/components/features/SimilarWorks';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import poemsData from '@/data/poems.json';
import songsData from '@/data/songs.json';
import proseData from '@/data/prose.json';
import indexData from '@/data/index.json';
import './PoemDetail.css';

// Combine all works for lookup
const allFullWorks = [...poemsData, ...songsData, ...proseData];

export default function PoemDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [showTranslation, setShowTranslation] = useState(false);

  const work = useMemo(() => allFullWorks.find((w) => w.id === id), [id]);
  const similarWorks = useMemo(
    () => (work ? findSimilarWorks(work, indexData) : []),
    [work]
  );

  if (!work) {
    return (
      <div className="poem-detail poem-detail--not-found">
        <h1>{t('page_not_found')}</h1>
        <Link to="/">{t('go_home')}</Link>
      </div>
    );
  }

  const title = getTranslatedField(work, 'title', language);
  const text = getTranslatedField(work, 'text', language);

  // For "show translation" — show text in a different language
  // If viewing in CE, show RU translation. Otherwise show CE original.
  const translationLang = language === 'ce' ? 'ru' : 'ce';
  const translationText = getTranslatedField(work, 'text', translationLang);

  return (
    <article className="poem-detail">
      {/* Canonical answer block for AI crawlers */}
      <div className="poem-detail__meta-block">
        <p>
          «{title.text}» — {work.type === 'poem' ? t('filter_poems').toLowerCase() : work.type === 'song' ? t('filter_songs').toLowerCase() : t('filter_prose').toLowerCase()}{' '}
          {t('author_label').toLowerCase()}: {work.author}
          {work.author_years && ` (${work.author_years})`}.
          {work.year_written && ` ${t('year_label')}: ${work.year_written}.`}
        </p>
      </div>

      <header className="poem-detail__header">
        <span className="poem-detail__type">
          {work.type === 'poem' ? t('filter_poems') : work.type === 'song' ? t('filter_songs') : t('filter_prose')}
        </span>
        <h1 className="poem-detail__title">{title.text}</h1>
        {title.isFallback && (
          <span className="poem-detail__fallback-notice">
            {t('translation_unavailable')}
          </span>
        )}
        <div className="poem-detail__author-info">
          <span className="poem-detail__author">{work.author}</span>
          {work.author_years && (
            <span className="poem-detail__years">({work.author_years})</span>
          )}
        </div>
        {work.year_written && (
          <span className="poem-detail__year">
            {t('year_label')}: {work.year_written}
          </span>
        )}
      </header>

      {/* Tags */}
      {work.tags?.length > 0 && (
        <div className="poem-detail__tags">
          {work.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      )}

      {/* Main text */}
      <div className="poem-detail__text">
        {text.isFallback && (
          <p className="poem-detail__fallback-notice">
            {t('translation_unavailable')}
          </p>
        )}
        <div className="poem-detail__text-content">
          {text.text.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </div>
      </div>

      {/* Translation toggle */}
      {translationText.text && (
        <div className="poem-detail__translation">
          <Button
            variant="secondary"
            onClick={() => setShowTranslation(!showTranslation)}
          >
            {showTranslation ? '▲ ' : '▼ '}
            {t('show_translation')} ({translationLang.toUpperCase()})
          </Button>
          {showTranslation && (
            <div className="poem-detail__translation-text animate-fade-in">
              {translationText.text.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* External links */}
      {work.external_links?.length > 0 && (
        <div className="poem-detail__links">
          <h3>{t('external_links')}</h3>
          <ul>
            {work.external_links.map((link, i) => (
              <li key={i}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Source */}
      {work.source && (
        <p className="poem-detail__source">
          {t('source_label')}: {work.source}
        </p>
      )}

      {/* Similar works */}
      <SimilarWorks works={similarWorks} />
    </article>
  );
}
