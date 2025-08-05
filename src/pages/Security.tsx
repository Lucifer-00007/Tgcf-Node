import React from 'react';
import GenericPage from '../components/GenericPage';

const Security: React.FC = () => {
  return (
    <GenericPage 
      title="Security"
      subtitle="We take security seriously. Your data and credentials are treated with the utmost care."
    >
      <p>Our application is designed with security as a top priority, ensuring that your sensitive information remains protected.</p>
      <p>All API keys and tokens are stored securely and are never exposed on the client-side. Configuration is handled through a secure backend API, preventing unauthorized access.</p>
    </GenericPage>
  );
};

export default Security;