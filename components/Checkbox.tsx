
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
    <div className="flex flex-col mb-4">
        <div className="flex items-center">
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor={id} className="ml-3 block text-sm text-gray-700">
                {label}
            </label>
        </div>
        {description && <p className="ml-7 text-xs text-gray-500 mt-1">{description}</p>}
    </div>
  );
};
