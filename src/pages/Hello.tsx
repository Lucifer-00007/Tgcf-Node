import React from 'react';
import { CollapsibleSection } from '../components/CollapsibleSection';

const TelegramIcon = () => (
    <div className="relative h-24 w-24">
        <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <path d="M48 96C74.5097 96 96 74.5097 96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96Z" fill="#37AEE2"/>
            <path d="M72.9999 24L18 43.518L37.9427 49.3033L43.728 69.246L72.9999 24Z" fill="#C8DAEA"/>
            <path d="M37.9426 49.3033L58.5 33L43.728 49.3033V69.246L37.9426 49.3033Z" fill="#A9C9DD"/>
        </svg>
        <div className="absolute top-16 left-1/2 flex -translate-x-1/2 space-x-1">
            {[...Array(5)].map((_, i) => <div key={i} className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" style={{ animationDelay: `${i * 100}ms` }}></div>)}
            {[...Array(4)].map((_, i) => <div key={i+5} className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" style={{ animationDelay: `${(i+5) * 100}ms` }}></div>)}
        </div>
    </div>
);


const Hello: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-800 dark:text-gray-200">
        Welcome to tgcf 👋
      </h1>
      <div className="my-8">
        <TelegramIcon />
      </div>
      <div className="w-full max-w-3xl text-left">
        <CollapsibleSection title="Features">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            tgcf is the ultimate tool to automate custom telegram message forwarding.
          </p>
          <p className="mb-4 text-gray-600 dark:text-gray-400">The key features are:</p>
          <ul className="list-disc space-y-3 list-inside text-gray-600 dark:text-gray-400">
            <li>
              Forward messages as "forwarded" or send a copy of the messages from source to destination chats. A chat can be anything: a group, channel, person or even another bot.
            </li>
            <li>
              Supports two modes of operation past or live. The past mode deals with all existing messages, while the live mode is for upcoming ones.
            </li>
            <li>
              You may login with a bot or an user account. Telegram imposes certain limitations on bot accounts. You may use an user account to perform the forwards if you wish.
            </li>
            <li>
              Perform custom manipulation on messages. You can filter, format, replace, watermark, ocr and do a lot more.
            </li>
          </ul>
        </CollapsibleSection>
      </div>
    </div>
  );
};

export default Hello;
