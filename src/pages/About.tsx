import React from 'react';
import GenericPage from '../components/GenericPage';

const About: React.FC = () => {
  return (
    <GenericPage 
      title="About Us"
      subtitle="Learn more about our mission and the team behind TGCF Web UI."
    >
      <p>TGCF Web UI was created to provide a simple, powerful, and user-friendly interface for the amazing `tgcf` tool. Our mission is to make Telegram automation accessible to everyone, from power users to community managers.</p>
    </GenericPage>
  );
};

export default About;