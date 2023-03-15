import React, { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const Input = ({
  label: labelText,
  name,
  ...inputProps
}: InputProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {labelText}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name={name}
          id={name}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...inputProps}
        />
      </div>
    </div>
  );
};

export default Input;
