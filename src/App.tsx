import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Page } from './types';
import Hello from './pages/Hello';
import TelegramLogin from './pages/TelegramLogin';
import Admins from './pages/Admins';
import Connections from './pages/Connections';
import Plugins from './pages/Plugins';
import Run from './pages/Run';
import Advanced from './pages/Advanced';
import Auth from './pages/Auth';

export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Hello);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

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
      case Page.Auth:
        return <Auth onAuthSuccess={() => setActivePage(Page.Hello)} />;
      default:
        return <Hello />;
    }
  };

  // Width for main content when sidebar is expanded vs collapsed on md+ screens
  const sidebarWidth = collapsed ? 'md:ml-20' : 'md:ml-64';

  return (
    <div className="flex h-screen bg-gray-100 font-sans text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="fixed left-0 top-0 h-1 w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>

      {/* Mobile top bar */}
      <header className="fixed left-0 top-1 z-30 flex h-14 w-full items-center justify-between bg-white/80 px-4 backdrop-blur-md dark:bg-gray-800/80 md:hidden">
        <button
          aria-label="Toggle sidebar"
          className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h14M4 18h16" />
          </svg>
        </button>
        <div className="text-sm font-semibold">TGCF Web UI</div>
        <div className="w-8" />
      </header>

      <Sidebar
        activePage={activePage}
        setActivePage={(p) => {
          setActivePage(p);
          setMobileOpen(false);
        }}
        theme={theme}
        setTheme={setTheme}
        collapsed={collapsed}
        onToggleCollapsed={() => setCollapsed((v) => !v)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <main className={`relative flex-1 overflow-y-auto pt-16 md:pt-12 ${sidebarWidth} px-4 sm:px-6 md:px-8`}>
        {renderPage()}
      </main>
    </div>
  );
};

export default App;