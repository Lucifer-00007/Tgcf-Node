import React from 'react';

interface LandingProps {
  onLogin: () => void;
  onRegister: () => void;
}

const Landing: React.FC<LandingProps> = ({ onLogin, onRegister }) => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          TGCF Web UI
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
          Automate Telegram message forwarding with an elegant, configurable interface. Manage connections, plugins, and run modes with ease.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={onLogin}
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Login
          </button>
          <button
            onClick={onRegister}
            className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            Register
          </button>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
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