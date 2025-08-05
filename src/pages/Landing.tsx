import React from 'react';
import { Link, Plug, PlayCircle, Shield, KeyRound, Settings, Rocket, Quote } from 'lucide-react';

interface LandingProps {
  onExplore: () => void;
}

const Landing: React.FC<LandingProps> = ({ onExplore }) => {
  return (
    <>
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

        {/* How It Works Section */}
        <div className="py-16 sm:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">How It Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
              Get up and running in just a few simple steps.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
                <KeyRound className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">1. Connect Account</h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                Securely log in to your Telegram account (user or bot) using your API credentials.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">2. Configure Forwards</h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                Set up connections, apply powerful plugins, and customize every aspect of your forwarding rules.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">3. Run & Monitor</h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                Start the tgcf process in live or past mode and watch the logs in real-time from the dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-16 sm:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Loved by Developers & Power Users</h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <Quote className="h-8 w-8 text-gray-300 dark:text-gray-600" />
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                "This UI is a game-changer. I used to spend hours editing YAML files. Now I can configure everything in minutes. Absolutely brilliant!"
              </p>
              <div className="mt-6 font-semibold">- Alex, Community Manager</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <Quote className="h-8 w-8 text-gray-300 dark:text-gray-600" />
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                "The plugin system is incredibly powerful. I've automated my entire content pipeline from source channels to my public-facing ones. A must-have tool."
              </p>
              <div className="mt-6 font-semibold">- Sam, Indie Developer</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-center text-white">
          <h2 className="text-3xl font-extrabold">Ready to Automate Your Telegram?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Explore the demo or log in to take full control of your message forwarding.
          </p>
          <div className="mt-8">
            <button
              onClick={onExplore}
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-md transition hover:bg-gray-100"
            >
              Explore Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;