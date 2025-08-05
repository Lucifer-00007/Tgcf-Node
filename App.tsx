
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { NAV_ITEMS } from './constants';
import { Page } from './types';
import Hello from './pages/Hello';
import TelegramLogin from './pages/TelegramLogin';
import Admins from './pages/Admins';
import Connections from './pages/Connections';
import Plugins from './pages/Plugins';
import Run from './pages/Run';
import Advanced from './pages/Advanced';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Hello);

  const renderPage = () => {
    switch (activePage) {
      case Page.Hello:
        return <Hello />;
      case Page.TelegramLogin:
        return <TelegramLogin />;
      case Page.Admins:
        return <Admins />;
      case Page.Connections:
        return <Connections />;
      case Page.Plugins:
        return <Plugins />;
      case Page.Run:
        return <Run />;
      case Page.Advanced:
        return <Advanced />;
      default:
        return <Hello />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 ml-64 p-8 pt-12 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
