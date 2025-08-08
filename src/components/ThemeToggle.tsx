import React from 'react';
import { Sun, Moon } from 'lucide-react';
import type { Theme } from '../App';

interface ThemeToggleProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus:ring-offset-gray-800"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;