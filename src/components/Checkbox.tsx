import React, { ReactNode } from 'react';

interface CheckboxProps {
  label: ReactNode;
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, id, checked, onChange, description }) => {
  return (
    <div className="mb-4 flex flex-col">
        <div className="flex items-center">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label htmlFor={id} className="ml-3 block text-sm text-gray-700 dark:text-gray-300">
                {label}
            </label>
        </div>
        {description && <p className="ml-7 mt-1 text-xs text-gray-500 dark:text-gray-400">{description}</p>}
    </div>
  );
};
