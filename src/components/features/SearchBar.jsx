import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import Input from '../ui/Input';
import Tag from '../ui/Tag';
import './SearchBar.css';

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const SearchBar = ({ query, setQuery, filters, setFilters, sortBy, setSortBy, allTags = [] }) => {
  const { t } = useTranslation();
  const [showAllTags, setShowAllTags] = useState(false);
  const tagsRef = useRef(null);
  const [tagsOverflow, setTagsOverflow] = useState(false);

  useEffect(() => {
    const el = tagsRef.current;
    if (el) setTagsOverflow(el.scrollHeight > el.clientHeight + 1);
  }, [allTags, showAllTags]);

  const handleTypeChange = (type) => {
    setFilters(prev => ({ ...prev, type }));
  };

  const handleTagToggle = (tag) => {
    setFilters(prev => {
      const tags = prev.tags || [];
      if (tags.includes(tag)) {
        return { ...prev, tags: tags.filter(t => t !== tag) };
      }
      return { ...prev, tags: [...tags, tag] };
    });
  };

  const types = ['all', 'poem', 'song', 'prose'];
  const showTagsToggle = tagsOverflow || showAllTags;

  return (
    <div className="search-bar">
      <Input 
        icon={<SearchIcon />} 
        placeholder={t('search_placeholder')} 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
      />
      
      <div className="search-bar__filters">
        <div className="search-bar__types">
          {types.map(type => (
            <button 
              key={type} 
              className={`search-bar__type-btn ${filters.type === type ? 'active' : ''}`}
              onClick={() => handleTypeChange(type)}
            >
              {t(type === 'all' ? 'filter_all' : type === 'prose' ? 'filter_prose' : `filter_${type}s`)}
            </button>
          ))}
        </div>
        
        <div className="search-bar__sort">
          <label className="search-bar__sort-label">{t('sort_label')}</label>
          <select 
            className="search-bar__sort-select"
            value={sortBy} 
            onChange={e => setSortBy(e.target.value)}
          >
            <option value="date">{t('sort_by_date')}</option>
            <option value="alphabetical">{t('sort_alphabetical')}</option>
            <option value="author">{t('sort_by_author')}</option>
          </select>
        </div>
      </div>

      {allTags.length > 0 && (
        <div className="search-bar__tags-panel">
          <div className="search-bar__tags-header">
            <span className="search-bar__tags-label">{t('tags_label')}</span>
            {showTagsToggle && (
              <button
                className="search-bar__tags-toggle"
                onClick={() => setShowAllTags(v => !v)}
                aria-expanded={showAllTags}
              >
                {showAllTags ? t('hide_tags') : `${t('show_all_tags')} (${allTags.length})`}
              </button>
            )}
          </div>
          <div
            ref={tagsRef}
            className={`search-bar__tags ${showAllTags ? 'search-bar__tags--expanded' : ''}`}
          >
            {allTags.map(tag => (
              <Tag 
                key={tag} 
                label={tag} 
                active={filters.tags?.includes(tag)} 
                onClick={() => handleTagToggle(tag)} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
