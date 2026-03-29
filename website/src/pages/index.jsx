import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import '../css/custom.css';

export default function Home() {
  const [data, setData] = useState({
    stats: {
      totalCourses: 0,
      universities: 0,
      specializations: 0,
    },
    featuredPaths: [],
  });

  useEffect(() => {
    // Load data from generated JSON files
    Promise.all([
      fetch('/awesome-full-stack-machine-learning-courses/data/courses.json')
        .then(r => r.json())
        .catch(() => []),
      fetch('/awesome-full-stack-machine-learning-courses/data/learning_paths.json')
        .then(r => r.json())
        .catch(() => []),
    ]).then(([courses, learningPaths]) => {
      const universities = new Set(courses.map(c => c.university).filter(Boolean));
      const sections = new Set(courses.map(c => c.section).filter(Boolean));

      setData({
        stats: {
          totalCourses: courses.length,
          universities: universities.size,
          specializations: sections.size,
        },
        featuredPaths: (learningPaths || []).slice(0, 2).map(path => ({
          title: path.name || path.title,
          description: path.description || `A curated learning path with ${path.courses?.length || 0} courses`,
          courseCount: path.courses?.length || 0,
        })),
      });
    });
  }, []);

  return (
    <Layout
      title="Awesome ML Courses"
      description="Curated full stack machine learning engineering courses from top universities"
    >
      <main style={{ padding: '2rem 0' }}>
        <div style={{
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '0 1.5rem',
        }}>
          <HomepageFeatures
            stats={data.stats}
            featuredPaths={data.featuredPaths}
          />
        </div>
      </main>
    </Layout>
  );
}
