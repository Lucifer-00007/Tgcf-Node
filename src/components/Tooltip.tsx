import React from 'react';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  disabled?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, text, position = 'right', disabled = false }) => {
  if (disabled) {
    return <>{children}</>;
  }

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-4',
  };

  return (
    <div className="group relative flex items-center">
      {children}
      <div
        className={`pointer-events-none absolute z-50 hidden whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:block group-hover:opacity-100 dark:bg-gray-700 ${positionClasses[position]}`}
        role="tooltip"
      >
        {text}
      </div>
    </div>
  );
};