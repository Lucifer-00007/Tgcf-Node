import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Page } from '../types';
import { Theme } from '../App';
import ThemeToggle from './ThemeToggle';

interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage, theme, setTheme }) => {
  return (
    <aside className="fixed top-0 left-0 flex h-full w-64 flex-col border-r border-slate-200 bg-slate-100 text-gray-800 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200">
      <div className="mt-1 flex h-16 items-center justify-end border-b border-slate-200 px-4 dark:border-slate-700">
        <button className="rounded-full p-2 hover:bg-slate-200 dark:hover:bg-slate-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex-1 space-y-2 px-4 py-4">
        {NAV_ITEMS.map((item) => {
          const isActive = activePage === item.name;
          return (
            <a
              key={item.name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActivePage(item.name);
              }}
              className={`flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                  : 'text-gray-600 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700'
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </a>
          );
        })}
      </nav>
      <div className="border-t border-slate-200 p-4 dark:border-slate-700">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </aside>
  );
};
