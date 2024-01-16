import React, { ChangeEvent, useState } from 'react';
import tw from 'tailwind-styled-components';
import EyeIcon from '../icons/EyeIcon';

const InputLabel = tw.label`
  block mb-2 text-sm font-medium text-gray-900 dark:text-white
`;
const InputWrapper = tw.div`
  relative
`;

const Input = tw.input`
  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
  outline-none hover:border-blue-300
`;

const VerificationButton = tw.div`
  absolute inset-y-0 right-0 flex items-center justify-center
`;

type InputFieldProps = {
  label?: string;
  type: string;
  name: string;
  id: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  children?: React.ReactNode;
};
const ShowPasswordButton = tw.button`
  p-2 cursor-pointer text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white
`;

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  name,
  id,
  placeholder,
  onChange,
  value,
  disabled,
  readOnly,
  autoFocus,
  maxLength,
  children,
}) => {
  const [inputType, setInputType] = useState(type);

  const toggleShowPassword = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <InputWrapper>
        <Input
          type={inputType}
          name={name}
          id={id}
          placeholder={placeholder}
          required
          onChange={onChange}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          autoFocus={autoFocus}
          maxLength={maxLength}
        />
        <VerificationButton>{children}</VerificationButton>
        {type === 'password' && (
          <VerificationButton>
            <ShowPasswordButton type="button" onClick={toggleShowPassword}>
              <EyeIcon isVisible={inputType === 'password'} />
            </ShowPasswordButton>
          </VerificationButton>
        )}
      </InputWrapper>
    </div>
  );
};

export default InputField;
