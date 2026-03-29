import React, { useEffect, useState, useCallback } from 'react';
import Layout from '@theme/Layout';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import CourseGrid from '../components/CourseGrid';
import '../css/custom.css';

const DEBOUNCE_DELAY = 300;

export default function Explore() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Load courses on mount
  useEffect(() => {
    setIsLoading(true);
    fetch('/awesome-full-stack-machine-learning-courses/data/courses.json')
      .then(r => {
        if (!r.ok) throw new Error('Failed to load courses');
        return r.json();
      })
      .then(data => {
        setCourses(Array.isArray(data) ? data : []);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error loading courses:', err);
        setCourses([]);
        setIsLoading(false);
      });
  }, []);

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSearchChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  return (
    <Layout
      title="Explore Courses - Awesome ML Courses"
      description="Browse all machine learning courses with search and filters"
    >
      <main style={{ padding: '2rem 0' }}>
        <div style={{
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '0 1.5rem',
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{
              color: 'var(--ml-text)',
              marginBottom: '0.5rem',
            }}>
              Explore Courses
            </h1>
            <p style={{
              color: 'var(--ml-text-secondary)',
              fontSize: '1.1rem',
            }}>
              Search and filter through {courses.length} carefully curated ML and AI courses
            </p>
          </div>

          {/* Search Bar */}
          <SearchBar
            onSearchChange={handleSearchChange}
            resultCount={courses.length}
            placeholder="Search by course name, university, or topic..."
          />

          {/* Filter Panel */}
          <FilterPanel
            courses={courses}
            filters={filters}
            onFilterChange={handleFilterChange}
          />

          {/* Course Grid */}
          <CourseGrid
            courses={courses}
            isLoading={isLoading}
            searchTerm={debouncedSearch}
            filters={filters}
          />
        </div>
      </main>
    </Layout>
  );
}
