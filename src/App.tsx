import React, { useState, useEffect } from 'react';
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

export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Hello);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);


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
    <div className="flex h-screen font-sans text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-900">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
      <Sidebar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        theme={theme}
        setTheme={setTheme}
      />
      <main className="flex-1 ml-64 p-8 pt-12 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
