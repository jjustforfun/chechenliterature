import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslatedField } from '@/utils/getTranslatedField';
import { useTranslation } from '@/hooks/useTranslation';
import Tag from '../ui/Tag';
import './PoemCard.css';

const PoemCard = ({ work }) => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  if (!work) return null;

  const titleField = getTranslatedField(work, 'title', language);
  const previewField = getTranslatedField(work, 'text_preview', language);

  return (
    <Link to={`/${work.type}/${work.id}`} className="poem-card">
      <div className="poem-card__type">{t(work.type === 'prose' ? 'filter_prose' : `filter_${work.type}s`)}</div>
      <h3 className="poem-card__title">{titleField.text}</h3>
      <p className="poem-card__author">{work.author}</p>
      <p className="poem-card__preview">{previewField.text}</p>
      
      {work.tags && work.tags.length > 0 && (
        <div className="poem-card__tags">
          {work.tags.map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      )}
    </Link>
  );
};

export default PoemCard;
