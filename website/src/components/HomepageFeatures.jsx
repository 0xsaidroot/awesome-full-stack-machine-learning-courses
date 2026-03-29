import React from 'react';
import Link from '@docusaurus/Link';
import '../css/custom.css';

export default function HomepageFeatures({
  stats = {
    totalCourses: 0,
    universities: 0,
    specializations: 0,
  },
  featuredPaths = [],
}) {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero__title">
          Master Full Stack Machine Learning
        </h1>
        <p className="hero__tagline">
          Discover curated courses from top universities and platforms
          to learn production-grade ML engineering from foundation to advanced systems
        </p>
        <div className="hero__ctas">
          <Link
            className="button button--primary"
            to="/explore"
          >
            Explore Courses →
          </Link>
          <Link
            className="button button--secondary"
            to="/learning-paths"
          >
            View Learning Paths
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      {(stats.totalCourses > 0 || stats.universities > 0) && (
        <div className="stats">
          <div className="stat-card">
            <div className="stat-card__number">
              {stats.totalCourses}
            </div>
            <div className="stat-card__label">
              Curated Courses
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__number">
              {stats.universities}
            </div>
            <div className="stat-card__label">
              Top Universities
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__number">
              {stats.specializations}
            </div>
            <div className="stat-card__label">
              Learning Specializations
            </div>
          </div>
        </div>
      )}

      {/* Featured Paths */}
      {featuredPaths.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{
            textAlign: 'center',
            marginBottom: '2rem',
            color: 'var(--ml-text)',
          }}>
            Featured Learning Paths
          </h2>
          <div className="grid grid--cols-1 grid--cols-2">
            {featuredPaths.map((path, idx) => (
              <div
                key={idx}
                className="card"
                style={{ padding: '2rem' }}
              >
                <h3 style={{
                  marginBottom: '0.75rem',
                  color: 'var(--ml-text)',
                }}>
                  {path.title}
                </h3>
                <p style={{
                  color: 'var(--ml-text-secondary)',
                  marginBottom: '1rem',
                  fontSize: '0.95rem',
                }}>
                  {path.description}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--ml-text-secondary)',
                  fontSize: '0.9rem',
                }}>
                  <span>📚</span>
                  <span>{path.courseCount} courses</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div style={{
        marginTop: '4rem',
        padding: '2rem',
        background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
        borderRadius: '0.75rem',
        border: '1px solid var(--ml-border)',
        textAlign: 'center',
      }}>
        <h3 style={{
          marginBottom: '1rem',
          color: 'var(--ml-text)',
        }}>
          Ready to Start Learning?
        </h3>
        <p style={{
          color: 'var(--ml-text-secondary)',
          marginBottom: '1.5rem',
        }}>
          Explore our full catalog of carefully selected ML and AI courses
        </p>
        <Link
          className="button button--primary"
          to="/explore"
        >
          Browse All Courses →
        </Link>
      </div>
    </div>
  );
}
