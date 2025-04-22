import React from 'react';

interface AuthInputProps {
  label: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder?: string;
  value: string;
}

const AuthInputContainer: React.FC<AuthInputProps> = ({
  label,
  error,
  onChange,
  type,
  placeholder,
  value,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <div className="flex flex-col justify-center items-start md:flex-row md:justify-between md:items-center">
        <label htmlFor={label} className="text-sm font-inter text-grey-700 mb-1 md:mb-2">
          {label}
        </label>
        {error && <p className="text-red-500 text-xs text-center mb-1 md:mb-4">{error}</p>}
      </div>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 h-9 w-56 lg:h-10 lg:w-96"
      />
    </div>
  );
};

export default AuthInputContainer;
