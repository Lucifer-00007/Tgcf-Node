import React, { useState } from 'react';

interface LoginProps {
  onSuccess: () => void;
  onGoRegister: () => void;
}

const Login: React.FC<LoginProps> = ({ onSuccess, onGoRegister }) => {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState<string>('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy credentials
    if (email === 'user@example.com' && password === 'password') {
      setError('');
      onSuccess();
    } else {
      setError('Invalid credentials. Try user@example.com / password');
    }
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <h1 className="mb-4 text-center text-2xl font-semibold">Login</h1>
      <form onSubmit={submit} className="space-y-4 rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        {error && (
          <div className="rounded-md bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/30 dark:text-red-300">
            {error}
          </div>
        )}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
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
            className="w-full rounded-md border-slate-200 bg-slate-100 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>
        <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Sign in
        </button>
        <button
          type="button"
          onClick={onGoRegister}
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          Create an account
        </button>
      </form>
    </div>
  );
};

export default Login;