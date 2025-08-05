import React, { useState } from 'react';
import { User, Mail, Lock } from 'lucide-react';

interface RegisterProps {
  onSuccess: () => void;
  onGoLogin: () => void;
}

const Register: React.FC<RegisterProps> = ({ onSuccess, onGoLogin }) => {
  const [name, setName] = useState('Jane Doe');
  const [email, setEmail] = useState('jane@example.com');
  const [password, setPassword] = useState('password');
  const [confirm, setConfirm] = useState('password');
  const [error, setError] = useState<string>('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirm) {
      setError('Please fill out all fields.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    // Dummy success
    setError('');
    onSuccess();
  };

  return (
    <div className="flex min-h-[calc(100vh-100px)] items-center justify-center py-12">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-8 text-center">
            <div className="mb-2 flex items-center justify-center gap-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-bold text-white">T</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Create your account</h1>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
                Or{' '}
                <button type="button" onClick={onGoLogin} className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">
                    sign in to your existing account
                </button>
            </p>
        </div>

        <form onSubmit={submit} className="space-y-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          {error && (
            <div className="rounded-md bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/30 dark:text-red-300">
              {error}
            </div>
          )}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <User className="h-5 w-5 text-gray-400" />
                </span>
                <input
                    type="text"
                    className="w-full rounded-md border-slate-200 bg-slate-100 py-2 pl-10 pr-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                </span>
                <input
                    type="email"
                    className="w-full rounded-md border-slate-200 bg-slate-100 py-2 pl-10 pr-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="h-5 w-5 text-gray-400" />
                </span>
                <input
                    type="password"
                    className="w-full rounded-md border-slate-200 bg-slate-100 py-2 pl-10 pr-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm password</label>
            <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <Lock className="h-5 w-5 text-gray-400" />
                </span>
                <input
                    type="password"
                    className="w-full rounded-md border-slate-200 bg-slate-100 py-2 pl-10 pr-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    placeholder="Re-enter password"
                />
            </div>
          </div>
          <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;