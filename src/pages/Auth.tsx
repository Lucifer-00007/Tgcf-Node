import React, { useState } from 'react';

interface AuthProps {
  onAuthSuccess?: () => void;
}

type Tab = 'login' | 'register';

const Auth: React.FC<AuthProps> = ({ onAuthSuccess }) => {
  const [tab, setTab] = useState<Tab>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [name, setName] = useState('');
  const [confirm, setConfirm] = useState('');

  const submitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: client-only validation
    if (!email || !password) return;
    onAuthSuccess?.();
  };

  const submitRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || password !== confirm) return;
    onAuthSuccess?.();
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold">Account</h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Login to continue or create a new account.</p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <div className="mb-4 grid grid-cols-2 gap-2">
          <button
            className={`rounded-md px-3 py-2 text-sm font-medium ${
              tab === 'login'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setTab('login')}
          >
            Login
          </button>
          <button
            className={`rounded-md px-3 py-2 text-sm font-medium ${
              tab === 'register'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
            onClick={() => setTab('register')}
          >
            Register
          </button>
        </div>

        {tab === 'login' ? (
          <form onSubmit={submitLogin} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-md border-slate-200 bg-slate-100 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                required
                className="w-full rounded-md border-slate-200 bg-slate-100 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Sign in
            </button>
          </form>
        ) : (
          <form onSubmit={submitRegister} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                required
                className="w-full rounded-md border-slate-200 bg-slate-100 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-md border-slate-200 bg-slate-100 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input
                type="password"
                required
                className="w-full rounded-md border-slate-200 bg-slate-100 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm password</label>
              <input
                type="password"
                required
                className="w-full rounded-md border-slate-200 bg-slate-100 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Re-enter password"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Create account
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;