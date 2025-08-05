import React from 'react';
import GenericPage from '../components/GenericPage';

const Contact: React.FC = () => {
  return (
    <GenericPage 
      title="Contact Us"
      subtitle="Have questions or feedback? We'd love to hear from you."
    >
      <p>You can reach out to us through our GitHub repository or our community Discord server.</p>
    </GenericPage>
  );
};

export default Contact;