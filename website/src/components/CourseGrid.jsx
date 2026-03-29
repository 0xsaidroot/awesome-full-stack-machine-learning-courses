import React, { useMemo } from 'react';
import clsx from 'clsx';
import CourseCard from './CourseCard';
import '../css/custom.css';

export default function CourseGrid({
  courses = [],
  isLoading = false,
  searchTerm = '',
  filters = {},
}) {
  const filteredCourses = useMemo(() => {
    if (!courses.length) return [];

    return courses.filter(course => {
      // Search filter
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        const matchesSearch =
          (course.name && course.name.toLowerCase().includes(term)) ||
          (course.description && course.description.toLowerCase().includes(term)) ||
          (course.university && course.university.toLowerCase().includes(term));
        if (!matchesSearch) return false;
      }

      // Section filter
      if (filters.section && course.section !== filters.section) {
        return false;
      }

      // University filter
      if (filters.university && course.university !== filters.university) {
        return false;
      }

      // Type filter
      if (filters.type && course.type !== filters.type) {
        return false;
      }

      // Starred only filter
      if (filters.starredOnly && !course.starred) {
        return false;
      }

      return true;
    });
  }, [courses, searchTerm, filters]);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem 0' }}>
        <div className="loading">Loading courses...</div>
      </div>
    );
  }

  if (!filteredCourses.length) {
    return (
      <div style={{
        textAlign: 'center',
        padding: '3rem 2rem',
        background: 'var(--ml-surface)',
        borderRadius: '0.75rem',
        border: '1px solid var(--ml-border)',
      }}>
        <h3 style={{ color: 'var(--ml-text)', marginBottom: '0.5rem' }}>
          No courses found
        </h3>
        <p style={{ color: 'var(--ml-text-secondary)' }}>
          Try adjusting your search or filters
        </p>
      </div>
    );
  }

  return (
    <div>
      <div style={{
        marginBottom: '1.5rem',
        color: 'var(--ml-text-secondary)',
        fontSize: '0.95rem',
      }}>
        Showing {filteredCourses.length} of {courses.length} courses
      </div>

      <div className={clsx(
        'grid',
        'grid--cols-1',
        'grid--cols-2',
        'grid--cols-3',
      )}>
        {filteredCourses.map(course => (
          <CourseCard
            key={course.id}
            {...course}
          />
        ))}
      </div>
    </div>
  );
}
