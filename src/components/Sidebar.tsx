import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { Theme } from '../App';
import ThemeToggle from './ThemeToggle';
import { LogOut, PanelLeftClose } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface SidebarProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  collapsed: boolean;
  onToggleCollapsed: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
  onLogout: () => void;
}

const NavLinks: React.FC<{ collapsed: boolean; onLinkClick?: () => void }> = ({ collapsed, onLinkClick }) => {
  return (
    <nav className={`flex-1 space-y-1 px-2 py-4 ${collapsed ? 'overflow-hidden' : ''}`}>
      {NAV_ITEMS.map((item) => {
        const path = `/${item.name.toLowerCase().replace(/ /g, '-')}`;
        return (
          <Tooltip key={item.name} text={item.name} position="right" disabled={!collapsed}>
            <NavLink
              to={path}
              onClick={onLinkClick}
              className={({ isActive }) =>
                `group relative flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300'
                    : 'text-gray-600 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700'
                } ${collapsed ? 'justify-center' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`absolute left-0 h-6 w-1 rounded-r-full bg-blue-600 transition-transform ${isActive ? 'scale-y-100' : 'scale-y-0'} group-hover:scale-y-100`}></span>
                  <item.icon className={`h-5 w-5 flex-shrink-0 ${!collapsed ? 'mr-3' : ''}`} />
                  {!collapsed && <span className="truncate">{item.name}</span>}
                </>
              )}
            </NavLink>
          </Tooltip>
        );
      })}
    </nav>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({
  theme,
  setTheme,
  collapsed,
  onToggleCollapsed,
  mobileOpen,
  onCloseMobile,
  onLogout,
}) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-20 hidden h-full border-r border-slate-200 bg-slate-100 text-gray-800 transition-all duration-300 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200 md:flex md:flex-col ${
          collapsed ? 'w-20' : 'w-64'
        }`}
      >
        <div className={`flex h-16 items-center border-b border-slate-200 px-4 dark:border-slate-700 ${collapsed ? 'justify-center' : 'justify-between'}`}>
          {!collapsed && (
            <Link to="/hello" className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-bold text-white">T</span>
              <span className="truncate font-semibold">TGCF Web UI</span>
            </Link>
          )}
          <button
            className="rounded-full p-2 hover:bg-slate-200 dark:hover:bg-slate-700"
            onClick={onToggleCollapsed}
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <PanelLeftClose className={`h-5 w-5 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <NavLinks collapsed={collapsed} />

        <div className="border-t border-slate-200 p-2 dark:border-slate-700">
          {collapsed ? (
            <div className="flex flex-col items-center space-y-2">
              <ThemeToggle theme={theme} setTheme={setTheme} />
              <Tooltip text="Logout" position="right" disabled={!collapsed}>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); onLogout(); }}
                  className="group flex w-full justify-center rounded-lg p-2.5 text-sm font-medium text-gray-600 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700"
                >
                  <LogOut className="h-5 w-5 flex-shrink-0" />
                </a>
              </Tooltip>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); onLogout(); }}
                className="group flex flex-1 items-center rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700"
              >
                <LogOut className="mr-3 h-5 w-5 flex-shrink-0" />
                <span>Logout</span>
              </a>
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          )}
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
        className={`fixed left-0 top-0 z-40 flex h-full w-64 transform flex-col border-r border-slate-200 bg-slate-100 text-gray-800 shadow-xl transition-transform duration-300 dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200 md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4 dark:border-slate-700">
          <Link to="/hello" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-bold text-white">T</span>
            <span className="font-semibold">TGCF Web UI</span>
          </Link>
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

        <NavLinks collapsed={false} onLinkClick={onCloseMobile} />

        <div className="flex items-center justify-between border-t border-slate-200 p-4 dark:border-slate-700">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); onLogout(); onCloseMobile(); }}
            className="group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 hover:bg-slate-200 dark:text-gray-300 dark:hover:bg-slate-700"
          >
            <LogOut className="mr-3 h-5 w-5" />
            <span>Logout</span>
          </a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </aside>
    </>
  );
};