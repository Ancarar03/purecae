"use client";

import { ReactNode } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface FormFieldProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  children?: ReactNode;
}

export default function FormField({
  label,
  name,
  register,
  error,
  type = 'text',
  placeholder,
  required = false,
  children,
}: FormFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {children || (
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className={`w-full p-2.5 bg-white border ${
            error ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-gold-500 focus:border-gold-500'
          } rounded-sm focus:outline-none focus:ring-1`}
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}