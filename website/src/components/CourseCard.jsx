import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import '../css/custom.css';

export default function CourseCard({
  id,
  name,
  url,
  university,
  level,
  description,
  videos,
  solutions,
  starred,
  section,
  type,
}) {
  return (
    <div className="card course-card animate-slide-up">
      <div className="course-card__header">
        <h3 className="course-card__title">{name}</h3>
        <div className="course-card__badges">
          {university && (
            <span className="badge badge--primary">
              {university}
            </span>
          )}
          {level && (
            <span className={clsx('badge', {
              'badge--success': level === 'Beginner',
              'badge--primary': level === 'Intermediate',
              'badge--accent': level === 'Advanced',
            })}>
              {level}
            </span>
          )}
          {type && (
            <span className={clsx('badge', {
              'badge--warning': type === 'Textbook',
              'badge--primary': type === 'Course',
            })}>
              {type}
            </span>
          )}
          {videos > 0 && (
            <span className="badge badge--success" title="Has video lectures">
              📹 {videos}
            </span>
          )}
          {solutions > 0 && (
            <span className="badge badge--primary" title="Has solutions">
              ✓ {solutions}
            </span>
          )}
          {starred && (
            <span className="badge badge--danger" title="Recommended">
              ⭐ Starred
            </span>
          )}
        </div>
      </div>

      <p className="course-card__description">
        {description}
      </p>

      <div className="course-card__footer">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="course-card__link"
          >
            View Course →
          </a>
        ) : (
          <span className="course-card__link" style={{
            opacity: 0.5,
            cursor: 'not-allowed',
          }}>
            No Link Available
          </span>
        )}
      </div>
    </div>
  );
}
