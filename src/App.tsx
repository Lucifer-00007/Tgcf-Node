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
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';

export type Theme = 'light' | 'dark';

type PublicRoute = 'landing' | 'login' | 'register';

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
  const [publicRoute, setPublicRoute] = useState<PublicRoute>('landing');

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
    setPublicRoute('landing');
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

  const renderPublicContent = () => {
    switch (publicRoute) {
      case 'login':
        return <Login onSuccess={login} onGoRegister={() => setPublicRoute('register')} />;
      case 'register':
        return <Register onSuccess={login} onGoLogin={() => setPublicRoute('login')} />;
      case 'landing':
      default:
        return (
          <>
            <Landing />
            <div className="mx-auto my-10 flex max-w-6xl justify-center gap-3">
              <button
                onClick={() => { setIsAuthenticated(true); setActivePage(Page.Hello); }}
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                Explore demo
              </button>
            </div>
          </>
        );
    }
  };

  const sidebarWidth = collapsed ? 'md:ml-20' : 'md:ml-64';

  return (
    <div className="bg-gray-100 font-sans text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="fixed left-0 top-0 h-1 w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 z-50"></div>

      {isAuthenticated ? (
        <div className="flex h-screen">
          <Header
            onToggleMobileSidebar={() => setMobileOpen(true)}
            onLogout={logout}
            theme={theme}
            setTheme={setTheme}
          />
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
          <main className={`relative w-full flex-1 overflow-y-auto pt-20 ${sidebarWidth} px-4 sm:px-6 md:px-8`}>
            {renderProtectedPage()}
          </main>
        </div>
      ) : (
        <>
          <header className="sticky top-1 z-20 border-b border-slate-200 bg-white/80 py-3 backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/70">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold">T</span>
                <span className="text-sm font-semibold">TGCF Web UI</span>
              </div>
              <div className="flex items-center gap-4">
                <ThemeToggle theme={theme} setTheme={setTheme} />
                <button
                  onClick={() => setPublicRoute('login')}
                  className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Login
                </button>
              </div>
            </div>
          </header>
          <main className="relative flex-1 overflow-y-auto px-4 sm:px-6 md:px-8">
            {renderPublicContent()}
          </main>
        </>
      )}
    </div>
  );
};

export default App;