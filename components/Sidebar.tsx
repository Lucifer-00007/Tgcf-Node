
import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Page } from '../types';

interface SidebarProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-slate-100 text-gray-800 flex flex-col border-r border-slate-200">
      <div className="flex items-center justify-end h-16 px-4 border-b border-slate-200 mt-1">
        <button className="p-2 rounded-full hover:bg-slate-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2">
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
              className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-slate-200'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};
