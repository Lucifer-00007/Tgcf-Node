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
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Hello);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth') === '1';
    }
    return false;
  });

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

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('auth', '1');
    setActivePage(Page.Hello);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
    setActivePage(Page.Hello);
  };

  const renderProtectedPage = () => {
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

      {/* Sidebar hidden when not authenticated */}
      {isAuthenticated && (
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
      )}

      <main className={`relative flex-1 overflow-y-auto pt-16 md:pt-12 ${isAuthenticated ? sidebarWidth : ''} px-4 sm:px-6 md:px-8`}>
        {!isAuthenticated ? (
          // Unauthenticated flow: Landing with buttons to login/register pages
          <>
            <Landing onLogin={login} onRegister={login} />
            <div className="mx-auto mt-8 flex max-w-5xl justify-center gap-3">
              <button
                onClick={() => setActivePage(Page.Hello)}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                Explore demo content
              </button>
              <button
                onClick={() => setActivePage(Page.Hello)}
                className="rounded-md px-4 py-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Learn more
              </button>
            </div>
            <div className="mx-auto mt-10 max-w-md">
              <Login onSuccess={login} onGoRegister={() => { /* kept for UI parity, no enum navigation */ }} />
            </div>
            <div className="mx-auto mt-10 max-w-md">
              <Register onSuccess={login} onGoLogin={() => { /* kept for UI parity, no enum navigation */ }} />
            </div>
          </>
        ) : (
          <>
            <div className="mb-4 flex items-center justify-end">
              <button
                onClick={logout}
                className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                Logout
              </button>
            </div>
            {renderProtectedPage()}
          </>
        )}
      </main>
    </div>
  );
};

export default App;