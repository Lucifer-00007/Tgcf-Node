import React from 'react';
import { Page } from './types';

const HandWaveIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const KeyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
  </svg>
);

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.321h5.365a.562.562 0 01.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.528 5.318a.562.562 0 01-.84.622l-4.204-3.602a.563.563 0 00-.667 0l-4.204 3.602a.562.562 0 01-.84-.622l1.528-5.318a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988h5.365a.563.563 0 00.475-.321L11.48 3.5z" />
  </svg>
);

const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);

/* New, clearer icons */
const PlugIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 13l6-6m-1.5 7.5l3-3a3 3 0 10-4.243-4.243l-3 3M7.5 15L6 16.5a4.243 4.243 0 006 6L13.5 21" />
  </svg>
);

const PlayCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 8.5l5 3.5-5 3.5V8.5z" />
  </svg>
);

const SlidersIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h10m-6 0v12M4 18h16m6-6H8m10 0V6" />
  </svg>
);

export const NAV_ITEMS = [
  { name: Page.Hello, icon: HandWaveIcon },
  { name: Page.TelegramLogin, icon: KeyIcon },
  { name: Page.Admins, icon: StarIcon },
  { name: Page.Connections, icon: LinkIcon },
  { name: Page.Plugins, icon: PlugIcon },
  { name: Page.Run, icon: PlayCircleIcon },
  { name: Page.Advanced, icon: SlidersIcon },
  { name: Page.Auth, icon: KeyIcon },
];