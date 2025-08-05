import React from 'react';

interface GenericPageProps {
  title: string;
  children: React.ReactNode;
  subtitle?: string;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, children, subtitle }) => {
  return (
    <div className="pb-16">
      {/* Page Header */}
      <div className="bg-slate-100 dark:bg-gray-800">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="-mt-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-lg dark:border-gray-700 dark:bg-slate-800/50 sm:p-8 lg:p-10">
            <div className="prose prose-lg max-w-none dark:prose-invert prose-a:text-blue-600 hover:prose-a:text-blue-500 dark:prose-a:text-blue-400">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;