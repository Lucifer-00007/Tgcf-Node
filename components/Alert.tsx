
import React, { ReactNode } from 'react';

interface AlertProps {
  children: ReactNode;
  type?: 'info' | 'warning' | 'danger';
  icon?: ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ children, type = 'info', icon }) => {
  const baseClasses = 'p-4 rounded-md text-sm';
  const typeClasses = {
    info: 'bg-blue-50 text-blue-700',
    warning: 'bg-yellow-50 text-yellow-800',
    danger: 'bg-red-50 text-red-700',
  };

  const defaultIcon = {
      warning: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.636-1.1 2.29-1.1 2.926 0l5.485 9.5c.636 1.1-.182 2.5-1.463 2.5H4.235c-1.281 0-2.1-1.4-1.463-2.5l5.485-9.5zM10 12a1 1 0 110-2 1 1 0 010 2zm0-5a1 1 0 011 1v2a1 1 0 11-2 0V8a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
      ),
      info: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
      ),
      danger: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
      )
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]} flex`}>
        <div className="flex-shrink-0 mr-3">{icon || defaultIcon[type]}</div>
        <div>{children}</div>
    </div>
  );
};
