import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import '../css/custom.css';

export default function About() {
  return (
    <Layout
      title="About - Awesome ML Courses"
      description="About the Awesome ML Courses project"
    >
      <main style={{ padding: '2rem 0' }}>
        <div style={{
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '0 1.5rem',
        }}>
          <h1 style={{ color: 'var(--ml-text)', marginBottom: '2rem' }}>
            About Awesome ML Courses
          </h1>

          <div style={{
            color: 'var(--ml-text-secondary)',
            lineHeight: '1.8',
            fontSize: '1rem',
          }}>
            <h2 style={{ color: 'var(--ml-text)', marginTop: '2rem', marginBottom: '1rem' }}>
              Our Mission
            </h2>
            <p>
              Awesome ML Courses is a curated collection of the best machine learning and
              artificial intelligence courses from top universities and platforms worldwide.
              We aim to help learners navigate the vast landscape of ML education and find
              the resources that matter most.
            </p>

            <h2 style={{ color: 'var(--ml-text)', marginTop: '2rem', marginBottom: '1rem' }}>
              What We Offer
            </h2>
            <ul style={{ lineHeight: '1.9' }}>
              <li>
                <strong>Curated Courses:</strong> Hand-picked from leading universities like
                Stanford, MIT, Carnegie Mellon, and online platforms like Coursera and edX
              </li>
              <li>
                <strong>Learning Paths:</strong> Structured sequences of courses to guide
                your journey from fundamentals to advanced topics
              </li>
              <li>
                <strong>Comprehensive Metadata:</strong> Difficulty levels, video availability,
                solution materials, and more for each course
              </li>
              <li>
                <strong>Full-Stack Focus:</strong> Courses covering mathematics, algorithms,
                engineering, and production ML systems
              </li>
            </ul>

            <h2 style={{ color: 'var(--ml-text)', marginTop: '2rem', marginBottom: '1rem' }}>
              How to Contribute
            </h2>
            <p>
              We welcome contributions from the community! If you know of excellent ML courses
              that should be included, please check out our{' '}
              <a href="https://github.com/leehanchung/awesome-full-stack-machine-learning-courses">
                GitHub repository
              </a>
              {' '}and submit a pull request.
            </p>

            <h2 style={{ color: 'var(--ml-text)', marginTop: '2rem', marginBottom: '1rem' }}>
              About the Creator
            </h2>
            <p>
              This project was created to help individuals learn cutting-edge machine learning
              engineering in a structured and accessible way. Built with love and passion for
              education and technology.
            </p>

            <div style={{
              marginTop: '3rem',
              padding: '2rem',
              background: 'var(--ml-surface)',
              borderRadius: '0.75rem',
              border: '1px solid var(--ml-border)',
              textAlign: 'center',
            }}>
              <p style={{ marginBottom: '1rem' }}>
                Have a suggestion or found an issue?
              </p>
              <Link
                className="button button--primary"
                href="https://github.com/leehanchung/awesome-full-stack-machine-learning-courses/issues"
              >
                Open an Issue on GitHub
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
