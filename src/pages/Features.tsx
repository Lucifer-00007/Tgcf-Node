import React from 'react';
import GenericPage from '../components/GenericPage';

const Features: React.FC = () => {
  return (
    <GenericPage title="Features">
      <p>Our platform offers a wide range of features designed to streamline your Telegram message forwarding. Here are some of the highlights:</p>
      <ul>
        <li>Multi-Connection Management</li>
        <li>Powerful Plugin System (Filter, Format, Watermark, etc.)</li>
        <li>Live and Past Mode Operation</li>
        <li>Real-time Log Monitoring</li>
        <li>Secure Credential Management</li>
        <li>User-friendly Web Interface</li>
      </ul>
    </GenericPage>
  );
};

export default Features;