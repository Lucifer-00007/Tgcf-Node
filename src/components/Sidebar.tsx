import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Theme } from '../App';
import ThemeToggle from './ThemeToggle';
import { LogOut } from 'lucide-react';

interface SidebarProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  collapsed: boolean;
  onToggleCollapsed: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  theme,
  setTheme,
  collapsed,
  onToggleCollapsed,
  mobileOpen,
  onCloseMobile,
  onLogout,
}) => {
  const renderLinks = (showLabels: boolean) => (
    <nav className="flex-1 space-y-2 px-2 py-4">
      {NAV_ITEMS.map((item) => {
        const path = `/${item.name.toLowerCase().replace(/ /g, '-')}`;
        return (
          <NavLink
            key={item.name}
            to={path}
            onClick={onCloseMobile}
            className={({ isActive }) =>
              `group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                  : 'text-gray-600 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700'
              }`
            }
          >
            <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
            {showLabels && <span>{item.name}</span>}
          </NavLink>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-20 hidden h-full border-r border-slate-200 bg-slate-100 text-gray-800 transition-all duration-300 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200 md:flex md:flex-col ${
          collapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div className="mt-1 flex h-16 items-center justify-between border-b border-slate-200 px-3 dark:border-slate-700">
          <button
            className="rounded-full p-2 hover:bg-slate-200 dark:hover:bg-slate-700"
            onClick={onToggleCollapsed}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            title={collapsed ? 'Expand' : 'Collapse'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${collapsed ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {!collapsed && <div className="text-sm font-semibold">TGCF</div>}
          <div className="w-8" />
        </div>

        {renderLinks(!collapsed)}

        <div className="space-y-2 border-t border-slate-200 p-3 dark:border-slate-700">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onLogout(); }}
            className="group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700"
            title="Logout"
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {!collapsed && <span className="ml-3">Logout</span>}
          </a>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-black/30 transition-opacity duration-200 md:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onCloseMobile}
      />
      
      {/* Mobile Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-full w-64 transform border-r border-slate-200 bg-slate-100 text-gray-800 shadow-xl transition-transform duration-300 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200 md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="mt-1 flex h-16 items-center justify-between border-b border-slate-200 px-4 dark:border-slate-700">
          <div className="text-sm font-semibold">TGCF</div>
          <button
            className="rounded-full p-2 hover:bg-slate-200 dark:hover:bg-slate-700"
            onClick={onCloseMobile}
            aria-label="Close sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {renderLinks(true)}

        <div className="border-t border-slate-200 p-4 dark:border-slate-700">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onLogout(); }}
            className="group mt-4 flex w-full items-center rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700"
          >
            <LogOut className="mr-3 h-5 w-5" />
            <span>Logout</span>
          </a>
        </div>
      </aside>
    </>
  );
};