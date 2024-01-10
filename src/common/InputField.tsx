import React, { ChangeEvent } from 'react';
import tw from 'tailwind-styled-components';

const InputLabel = tw.label`
  block 
  mb-2 
  text-sm 
  font-medium 
  text-gray-900 
  dark:text-white
`;

const Input = tw.input`
  bg-gray-50 
  border border-gray-300 
  text-gray-900 sm:text-sm 
  rounded-lg 
  focus:ring-blue-500 
  focus:border-blue-500 
  block w-full 
  p-2.5 
  dark:bg-gray-700 
  dark:border-gray-600 
  dark:placeholder-gray-400 
  dark:text-white
`;

type InputFieldProps = {
  label?: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  id,
  placeholder,
  onChange,
  disabled,
}) => {
  return (
    <div>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;
