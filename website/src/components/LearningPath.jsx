import React from 'react';
import '../css/custom.css';

export default function LearningPath({
  title = 'Learning Path',
  description = '',
  courses = [],
  pathId = 'default-path',
}) {
  if (!courses.length) {
    return null;
  }

  return (
    <div className="learning-path">
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 className="learning-path__title">{title}</h3>
        {description && (
          <p style={{
            color: 'var(--ml-text-secondary)',
            fontSize: '0.95rem',
            margin: 0,
          }}>
            {description}
          </p>
        )}
      </div>

      <div className="learning-path__roadmap">
        {courses.map((course, index) => (
          <React.Fragment key={`${pathId}-${index}`}>
            {index > 0 && (
              <div className="learning-path__arrow">
                →
              </div>
            )}
            <div className="learning-path__node">
              <div className="path-node">
                <div className="path-node__title">
                  {course.name || course.title}
                </div>
                {course.university && (
                  <div className="path-node__meta">
                    {course.university}
                  </div>
                )}
                {course.level && (
                  <div className="path-node__meta">
                    {course.level}
                  </div>
                )}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {courses.length > 0 && (
        <div style={{
          marginTop: '1.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--ml-border)',
          fontSize: '0.9rem',
          color: 'var(--ml-text-secondary)',
        }}>
          {courses.length} course{courses.length !== 1 ? 's' : ''} in this path
        </div>
      )}
    </div>
  );
}
