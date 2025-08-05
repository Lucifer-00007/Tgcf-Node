import React from 'react';
import GenericPage from '../components/GenericPage';

const Changelog: React.FC = () => {
  return (
    <GenericPage title="Changelog">
      <h3>Version 1.0.0 - Initial Release</h3>
      <p><em>Date: 2024-05-28</em></p>
      <ul>
        <li>Initial release of the TGCF Web UI.</li>
        <li>Core features including connection management, plugins, and run modes.</li>
        <li>Secure login and authentication system.</li>
      </ul>
    </GenericPage>
  );
};

export default Changelog;