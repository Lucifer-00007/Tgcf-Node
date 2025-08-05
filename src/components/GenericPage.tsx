import React from 'react';

interface GenericPageProps {
  title: string;
  children: React.ReactNode;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, children }) => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
};

export default GenericPage;