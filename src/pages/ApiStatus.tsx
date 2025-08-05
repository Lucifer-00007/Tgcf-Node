import React from 'react';
import GenericPage from '../components/GenericPage';

const ApiStatus: React.FC = () => {
  return (
    <GenericPage title="API Status">
      <p>All systems are currently operational.</p>
      <p>This page provides real-time status updates for our services. If you are experiencing any issues, please check here first.</p>
    </GenericPage>
  );
};

export default ApiStatus;