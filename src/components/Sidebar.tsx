import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import type { Theme } from '../App';
import { Home, User, Key, Users, Link2, Plug, Play, Settings, LogOut, ChevronLeft, ChevronRight, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface SidebarProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    collapsed: boolean;
    onToggleCollapsed: () => void;
    mobileOpen: boolean;
    onCloseMobile: () => void;
    onLogout: () => void;
}

const pages = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Profile', href: '/profile', icon: User },
    { name: 'Credentials', href: '/credentials', icon: Key },
    { name: 'Admins', href: '/admins', icon: Users },
    { name: 'Connections', href: '/connections', icon: Link2 },
    { name: 'Plugins', href: '/plugins', icon: Plug },
    { name: 'Run', href: '/run', icon: Play },
    { name: 'Advanced', href: '/advanced', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({
    theme,
    setTheme,
    collapsed,
    onToggleCollapsed,
    mobileOpen,
    onCloseMobile,
    onLogout,
}) => {
    // The key change is here: reducing the transition duration for a snappier feel.
    const transitionSpeed = 'transition-all duration-300 ease-in-out';

    const sidebarWidthClass = collapsed ? 'md:w-20' : 'md:w-64';
    const mobileTransformClass = mobileOpen ? 'translate-x-0' : '-translate-x-full';

    return (
        <>
            {/* Overlay for mobile */}
            <div
                className={`fixed inset-0 z-30 bg-black/30 md:hidden ${mobileOpen ? 'block' : 'hidden'}`}
                onClick={onCloseMobile}
                aria-hidden="true"
            ></div>

            {/* Main Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 flex h-full w-64 flex-col border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 md:flex ${sidebarWidthClass} ${transitionSpeed} transform md:translate-x-0 ${mobileTransformClass}`}
            >
                {/* Sidebar Header */}
                <div className={`flex h-16 items-center border-b border-gray-200 px-4 dark:border-gray-700 ${collapsed ? 'justify-center' : 'justify-between'}`}>
                    {!collapsed && (
                        <Link to="/dashboard" className="flex items-center gap-2" onClick={onCloseMobile}>
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-gradient-to-br from-blue-600 to-indigo-600 font-bold text-white">T</span>
                            <span className="text-sm font-semibold">TGCF Web UI</span>
                        </Link>
                    )}
                     <button onClick={onCloseMobile} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 md:hidden">
                        <X className="h-6 w-6" />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 space-y-1 overflow-y-auto px-2 py-4">
                    {pages.map((page) => (
                        <NavLink
                            key={page.name}
                            to={page.href}
                            onClick={onCloseMobile}
                            className={({ isActive }) =>
                                `flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                                    isActive
                                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300'
                                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                } ${collapsed ? 'justify-center' : ''}`
                            }
                        >
                            <page.icon className={`h-5 w-5 flex-shrink-0 ${!collapsed ? 'mr-3' : ''}`} />
                            {!collapsed && <span className="truncate">{page.name}</span>}
                        </NavLink>
                    ))}
                </nav>

                {/* Sidebar Footer */}
                <div className="border-t border-gray-200 p-2 dark:border-gray-700">
                    <div className={`flex items-center p-2 ${collapsed ? 'justify-center' : 'justify-between'}`}>
                        {!collapsed && <ThemeToggle theme={theme} setTheme={setTheme} />}
                        <button
                            onClick={onToggleCollapsed}
                            className={`hidden items-center rounded-md p-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 md:flex`}
                            title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
                        >
                            {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
                        </button>
                    </div>
                    <button
                        onClick={onLogout}
                        className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 ${collapsed ? 'justify-center' : ''}`}
                    >
                        <LogOut className={`h-5 w-5 ${!collapsed ? 'mr-3' : ''}`} />
                        {!collapsed && <span>Logout</span>}
                    </button>
                </div>
            </aside>
        </>
    );
};