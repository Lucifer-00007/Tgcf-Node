import React from 'react';
import GenericPage from '../components/GenericPage';

const Blog: React.FC = () => {
  return (
    <GenericPage 
      title="Blog"
      subtitle="Updates, tutorials, and tips on how to get the most out of TGCF Web UI."
    >
      <p>Welcome to our blog! Here we'll share updates, tutorials, and tips on how to get the most out of TGCF Web UI.</p>
      <p>Check back soon for our first post!</p>
    </GenericPage>
  );
};

export default Blog;