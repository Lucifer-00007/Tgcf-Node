import React from 'react';
import { Link, Plug, PlayCircle, Shield } from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      {/* Hero Section */}
      <div className="py-16 text-center sm:py-24">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          <span className="block">The Ultimate Tool for</span>
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Telegram Message Forwarding
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
          Automate your Telegram workflows with an elegant, configurable interface. Manage connections, plugins, and run modes with ease.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300">
            <Link className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold">Connections</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Link sources to destinations — channels, groups, users, or bots.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300">
            <Plug className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold">Plugins</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Filter, format, replace, add watermarks, perform OCR, and more.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-300">
            <PlayCircle className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold">Run Modes</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Choose between live and past modes. Monitor logs in real-time.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-300">
            <Shield className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold">Secure by Design</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Keep sensitive credentials out of code. Configure safely using the UI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;