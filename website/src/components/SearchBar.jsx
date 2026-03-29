import React, { useState, useCallback } from 'react';
import '../css/custom.css';

export default function SearchBar({
  onSearchChange = () => {},
  resultCount = 0,
  placeholder = 'Search courses by name, university, or topic...',
}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = useCallback((e) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Debounce is handled by parent if needed
    onSearchChange(value);
  }, [onSearchChange]);

  const handleClear = () => {
    setSearchTerm('');
    onSearchChange('');
  };

  return (
    <div className="search-bar">
      <div style={{ position: 'relative', flex: 1 }}>
        <input
          type="text"
          className="search-bar__input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearchChange}
          aria-label="Search courses"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: 'var(--ml-text-secondary)',
              cursor: 'pointer',
              padding: '0.5rem',
              fontSize: '1.2rem',
            }}
            aria-label="Clear search"
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>
      {resultCount > 0 && (
        <span className="search-bar__count">
          {resultCount} course{resultCount !== 1 ? 's' : ''}
        </span>
      )}
    </div>
  );
}
