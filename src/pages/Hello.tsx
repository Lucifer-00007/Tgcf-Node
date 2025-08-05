import React from 'react';
import { Link } from 'react-router-dom';
import { CollapsibleSection } from '../components/CollapsibleSection';
import { Link as LinkIcon, PlayCircle, Plug } from 'lucide-react';

const TelegramIcon = () => (
    <div className="relative h-24 w-24 flex-shrink-0">
        <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
            <path d="M48 96C74.5097 96 96 74.5097 96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96Z" fill="#37AEE2"/>
            <path d="M72.9999 24L18 43.518L37.9427 49.3033L43.728 69.246L72.9999 24Z" fill="#C8DAEA"/>
            <path d="M37.9426 49.3033L58.5 33L43.728 49.3033V69.246L37.9426 49.3033Z" fill="#A9C9DD"/>
        </svg>
    </div>
);

const ActionCard: React.FC<{ to: string; icon: React.ElementType; title: string; children: React.ReactNode }> = ({ to, icon: Icon, title, children }) => (
    <Link to={to} className="group block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
                <Icon className="h-6 w-6" />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{children}</p>
            </div>
        </div>
    </Link>
);

const Hello: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl">
      {/* Welcome Banner */}
      <div className="flex flex-col items-center gap-6 rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:text-left">
        <TelegramIcon />
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            Welcome to tgcf 👋
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            You're all set up. Let's get started with automating your Telegram message forwarding.
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <ActionCard to="/connections" icon={LinkIcon} title="Configure Connections">
                Set up your message sources and destinations.
            </ActionCard>
            <ActionCard to="/run" icon={PlayCircle} title="Run & Monitor">
                Start the forwarding process and view logs.
            </ActionCard>
            <ActionCard to="/plugins" icon={Plug} title="Explore Plugins">
                Customize messages with filters, formatting, and more.
            </ActionCard>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-8">
        <CollapsibleSection title="Key Features Overview">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            tgcf is the ultimate tool to automate custom telegram message forwarding. The key features are:
          </p>
          <ul className="list-inside list-disc space-y-3 text-gray-600 dark:text-gray-400">
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