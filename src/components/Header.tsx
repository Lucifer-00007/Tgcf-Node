import React from 'react';
import ThemeToggle from './ThemeToggle';
import { Theme } from '../App';
import { Menu, LogOut } from 'lucide-react';

interface HeaderProps {
  onToggleMobileSidebar: () => void;
  onLogout: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleMobileSidebar, onLogout, theme, setTheme }) => {
  return (
    <header className="fixed left-0 top-1 z-30 flex h-14 w-full items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur-md dark:border-gray-700 dark:bg-gray-800/80 md:left-auto" style={{ width: 'calc(100%)' }}>
      {/* Left side: Hamburger for mobile, hidden on desktop */}
      <div className="flex items-center gap-4">
        <button
          aria-label="Toggle sidebar"
          className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
          onClick={onToggleMobileSidebar}
        >
          <Menu className="h-6 w-6" />
        </button>
         <div className="text-sm font-semibold md:hidden">TGCF Web UI</div>
      </div>

      {/* Right side: Controls */}
      <div className="flex items-center gap-4">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <button
          onClick={onLogout}
          className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;