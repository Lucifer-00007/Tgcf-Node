import React from 'react';
import { Theme } from '../App';

interface ThemeToggleProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const SunIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.95-4.243l-1.59-1.59M3 12h2.25m.386-6.364l1.59 1.59M12 6.75A5.25 5.25 0 0117.25 12 5.25 5.25 0 0112 17.25 5.25 5.25 0 016.75 12 5.25 5.25 0 0112 6.75z" />
  </svg>
);

const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);


const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center justify-center">
        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          className="relative flex h-8 w-14 items-center rounded-full bg-gray-300 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-100 dark:bg-gray-700 dark:focus:ring-offset-slate-800"
        >
          <span
            className={`${
              theme === 'light' ? 'translate-x-1' : 'translate-x-7'
            } inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white transition-transform duration-300 ease-in-out`}
          >
            {theme === 'light' 
              ? <SunIcon className="h-4 w-4 text-yellow-500" /> 
              : <MoonIcon className="h-4 w-4 text-blue-400" />
            }
          </span>
        </button>
    </div>
  );
};

export default ThemeToggle;
