import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import LearningPath from '../components/LearningPath';
import '../css/custom.css';

export default function LearningPaths() {
  const [learningPaths, setLearningPaths] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('/awesome-full-stack-machine-learning-courses/data/learning_paths.json')
      .then(r => {
        if (!r.ok) throw new Error('Failed to load learning paths');
        return r.json();
      })
      .then(data => {
        setLearningPaths(Array.isArray(data) ? data : []);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error loading learning paths:', err);
        setLearningPaths([]);
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout
      title="Learning Paths - Awesome ML Courses"
      description="Curated learning paths to guide your journey through machine learning"
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
              Learning Paths
            </h1>
            <p style={{
              color: 'var(--ml-text-secondary)',
              fontSize: '1.1rem',
            }}>
              Structured paths to guide your learning journey through the ML/AI landscape
            </p>
          </div>

          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div className="loading">Loading learning paths...</div>
            </div>
          ) : learningPaths.length > 0 ? (
            <div>
              {learningPaths.map((path, idx) => (
                <LearningPath
                  key={idx}
                  title={path.name || path.title}
                  description={path.description}
                  courses={path.courses || []}
                  pathId={`path-${idx}`}
                />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '3rem 2rem',
              background: 'var(--ml-surface)',
              borderRadius: '0.75rem',
              border: '1px solid var(--ml-border)',
            }}>
              <h3 style={{ color: 'var(--ml-text)', marginBottom: '0.5rem' }}>
                No learning paths available yet
              </h3>
              <p style={{ color: 'var(--ml-text-secondary)' }}>
                Check back soon for curated learning paths
              </p>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
