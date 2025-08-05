import React from 'react';
import GenericPage from '../components/GenericPage';

const ApiStatus: React.FC = () => {
  return (
    <GenericPage 
      title="API Status"
      subtitle="This page provides real-time status updates for our services."
    >
      <p>All systems are currently operational.</p>
      <p>If you are experiencing any issues, please check here first.</p>
    </GenericPage>
  );
};

export default ApiStatus;