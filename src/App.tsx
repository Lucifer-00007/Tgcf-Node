import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Link, Navigate } from 'react-router-dom';
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
import { Menu } from 'lucide-react';
import Footer from './components/Footer';
import Features from './pages/Features';
import Security from './pages/Security';
import Changelog from './pages/Changelog';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Documentation from './pages/Documentation';
import ApiStatus from './pages/ApiStatus';
import Support from './pages/Support';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';

export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth') === '1';
    }
    return false;
  });
  const navigate = useNavigate();

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
    navigate('/hello');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
    navigate('/');
  };

  const sidebarWidth = collapsed ? 'md:ml-20' : 'md:ml-64';

  return (
    <div className="bg-gray-100 font-sans text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="fixed left-0 top-0 h-1 w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 z-50"></div>

      {isAuthenticated ? (
        <div className="flex h-screen">
          <Sidebar
            theme={theme}
            setTheme={setTheme}
            collapsed={collapsed}
            onToggleCollapsed={() => setCollapsed((v) => !v)}
            mobileOpen={mobileOpen}
            onCloseMobile={() => setMobileOpen(false)}
            onLogout={logout}
          />
          <main className={`relative w-full flex-1 overflow-y-auto pt-8 ${sidebarWidth} px-4 sm:px-6 md:px-8`}>
            <button
              aria-label="Open sidebar"
              className="absolute top-4 left-4 z-10 rounded-md p-2 text-gray-500 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 md:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <Routes>
              <Route path="/hello" element={<Hello />} />
              <Route path="/telegram-login" element={<TelegramLogin />} />
              <Route path="/admins" element={<Admins />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/plugins" element={<Plugins />} />
              <Route path="/run" element={<Run />} />
              <Route path="/advanced" element={<Advanced />} />
              <Route path="*" element={<Navigate to="/hello" />} />
            </Routes>
          </main>
        </div>
      ) : (
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-1 z-20 border-b border-slate-200 bg-white/80 py-3 backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/70">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
              <Link to="/" className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold">T</span>
                <span className="text-sm font-semibold">TGCF Web UI</span>
              </Link>
              <div className="flex items-center gap-4">
                <ThemeToggle theme={theme} setTheme={setTheme} />
                <Link
                  to="/login"
                  className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  Login
                </Link>
              </div>
            </div>
          </header>
          <main className="relative flex-1">
            <Routes>
              <Route path="/" element={<Landing onExplore={login} />} />
              <Route path="/login" element={<Login onSuccess={login} />} />
              <Route path="/register" element={<Register onSuccess={login} />} />
              <Route path="/features" element={<Features />} />
              <Route path="/security" element={<Security />} />
              <Route path="/changelog" element={<Changelog />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/api-status" element={<ApiStatus />} />
              <Route path="/support" element={<Support />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;