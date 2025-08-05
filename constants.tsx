
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
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.321h5.365a.562.562 0 01.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.528 5.318a.562.562 0 01-.84.622l-4.204-3.602a.563.563 0 00-.667 0l-4.204 3.602a.562.562 0 01-.84-.622l1.528-5.318a.563.563 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988h5.365a.563.563 0 00.475-.321L11.48 3.5z" />
  </svg>
);

const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
);

const PuzzleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.629.507-1.137 1.137-1.137h1.5a.75.75 0 01.75.75v1.5c0 .63-.507 1.137-1.137 1.137h-4.226c-.431 0-.855.14-1.206.39l-1.857 1.318a.75.75 0 000 1.298l1.857 1.318c.351.25.775.39 1.206.39h4.226c.63 0 1.137.507 1.137 1.137v1.5a.75.75 0 01-.75.75h-1.5a1.137 1.137 0 01-1.137-1.137v-1.125a.75.75 0 00-.75-.75h-1.5a.75.75 0 00-.75.75v1.125c0 .63.507 1.137 1.137 1.137h1.5a.75.75 0 01.75.75v1.5c0 .63-.507 1.137-1.137 1.137h-4.226c-1.31 0-2.427-.832-2.849-2.071l-.288-.865a1.125 1.125 0 01.21-1.282l1.857-1.318a.75.75 0 000-1.298L5.91 9.702a1.125 1.125 0 01-.21-1.282l.288-.865C6.423 5.332 7.54 4.5 8.85 4.5h4.226c.63 0 1.137.507 1.137 1.137v1.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75V6.087z" />
  </svg>
);

const CogIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-1.007 1.11-1.226l2.28.855c.326.123.67.297.993.525l2.28-.855a1.125 1.125 0 011.11 1.226l-.855 2.28c-.123.326-.297.67-.525.993l.855 2.28a1.125 1.125 0 01-1.226 1.11l-2.28-.855a4.373 4.373 0 00-.993.525l-2.28.855a1.125 1.125 0 01-1.11-1.226l.855-2.28a4.373 4.373 0 00-.525-.993l-.855-2.28a1.125 1.125 0 011.226-1.11l2.28.855c.326-.123.67-.297.993-.525l2.28-.855z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const AdjustmentsIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 16v-2m0-10v2M6 12H4m16 0h-2m-10 0h2m10 0h-2M12 20.25a8.25 8.25 0 100-16.5 8.25 8.25 0 000 16.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
  </svg>
);


export const NAV_ITEMS = [
  { name: Page.Hello, icon: HandWaveIcon },
  { name: Page.TelegramLogin, icon: KeyIcon },
  { name: Page.Admins, icon: StarIcon },
  { name: Page.Connections, icon: LinkIcon },
  { name: Page.Plugins, icon: PuzzleIcon },
  { name: Page.Run, icon: CogIcon },
  { name: Page.Advanced, icon: AdjustmentsIcon },
];
