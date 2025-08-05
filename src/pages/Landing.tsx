import React from 'react';

interface LandingProps {
  onLogin: () => void;
  onRegister: () => void;
}

const Landing: React.FC<LandingProps> = ({ onLogin, onRegister }) => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
      <div className="rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-6 sm:p-10 text-white shadow-lg">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          TGCF Web UI
        </h1>
        <p className="mt-3 max-w-2xl text-blue-50">
          Automate Telegram message forwarding with an elegant, configurable interface. Manage connections, plugins, and run modes with ease.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={onLogin}
            className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50"
          >
            Login
          </button>
          <button
            onClick={onRegister}
            className="rounded-md border border-white/70 bg-transparent px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            Register
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="text-lg font-semibold">Connections</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Link sources to destinations — channels, groups, users, or bots. Manage multiple connections easily.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="text-lg font-semibold">Plugins</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Filter, format, replace, add watermarks, perform OCR, and more with modular plugins.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h3 className="text-lg font-semibold">Run Modes</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Choose between live and past modes. Monitor logs in real-time within your browser.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
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