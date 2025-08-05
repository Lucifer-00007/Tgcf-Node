import React from 'react';
import { Toaster } from 'react-hot-toast';

export const ToastProvider: React.FC = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        className: 'dark:bg-gray-700 dark:text-white',
        duration: 3000,
      }}
    />
  );
};