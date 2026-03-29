import React, { useMemo } from 'react';
import '../css/custom.css';

export default function FilterPanel({
  courses = [],
  filters = {},
  onFilterChange = () => {},
}) {
  // Extract unique values from courses
  const universities = useMemo(() => {
    return [...new Set(courses
      .map(c => c.university)
      .filter(Boolean)
      .sort())
    ];
  }, [courses]);

  const sections = useMemo(() => {
    return [...new Set(courses
      .map(c => c.section)
      .filter(Boolean)
      .sort())
    ];
  }, [courses]);

  const types = useMemo(() => {
    return [...new Set(courses
      .map(c => c.type)
      .filter(Boolean)
      .sort())
    ];
  }, [courses]);

  const hasStarred = courses.some(c => c.starred);

  // Count active filters
  const activeFilterCount = Object.values(filters).filter(v => v).length;

  const handleFilterChange = (filterKey, value) => {
    onFilterChange({
      ...filters,
      [filterKey]: value,
    });
  };

  const handleClearFilters = () => {
    onFilterChange({});
  };

  return (
    <div className="filter-panel">
      {sections.length > 0 && (
        <div className="filter-group">
          <label className="filter-group__label" htmlFor="section-select">
            Section:
          </label>
          <select
            id="section-select"
            className="filter-group__select"
            value={filters.section || ''}
            onChange={(e) => handleFilterChange('section', e.target.value || null)}
          >
            <option value="">All Sections</option>
            {sections.map(section => (
              <option key={section} value={section}>
                {section}
              </option>
            ))}
          </select>
        </div>
      )}

      {universities.length > 0 && (
        <div className="filter-group">
          <label className="filter-group__label" htmlFor="university-select">
            University:
          </label>
          <select
            id="university-select"
            className="filter-group__select"
            value={filters.university || ''}
            onChange={(e) => handleFilterChange('university', e.target.value || null)}
          >
            <option value="">All Universities</option>
            {universities.map(university => (
              <option key={university} value={university}>
                {university}
              </option>
            ))}
          </select>
        </div>
      )}

      {types.length > 0 && (
        <div className="filter-group">
          <label className="filter-group__label" htmlFor="type-select">
            Type:
          </label>
          <select
            id="type-select"
            className="filter-group__select"
            value={filters.type || ''}
            onChange={(e) => handleFilterChange('type', e.target.value || null)}
          >
            <option value="">All Types</option>
            {types.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      )}

      {hasStarred && (
        <div className="filter-group">
          <label htmlFor="starred-check" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
            <input
              id="starred-check"
              type="checkbox"
              className="filter-group__checkbox"
              checked={filters.starredOnly || false}
              onChange={(e) => handleFilterChange('starredOnly', e.target.checked || null)}
            />
            Starred Only
          </label>
        </div>
      )}

      {activeFilterCount > 0 && (
        <div className="filter-panel__clear">
          <button
            className="button button--secondary"
            onClick={handleClearFilters}
            style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
          >
            Clear Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
          </button>
        </div>
      )}
    </div>
  );
}
