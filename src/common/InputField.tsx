import React, { ChangeEvent } from 'react';
import tw from 'tailwind-styled-components';

const InputLabel = tw.label`
  block mb-2 text-sm font-medium text-gray-900 dark:text-white
`;

const InputWrapper = tw.div`
  relative
`;

const Input = tw.input`
  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 
  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
  outline-none hover:border-blue-300
`;

const VerificationButton = tw.button`
  absolute top-0 right-0 h-10 w-20 text-white rounded-lg bg-blue-600 
  hover:bg-blue-700 focus:ring-blue-300 text-sm
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
  onVerifyClick?: () => void; // 인증 버튼 클릭 이벤트 추가
};

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
  onVerifyClick,
}) => {
  return (
    <div>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <InputWrapper>
        <Input
          type={type}
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
        {onVerifyClick && (
          <VerificationButton onClick={onVerifyClick}>
            인증하기
          </VerificationButton>
        )}
      </InputWrapper>
    </div>
  );
};

export default InputField;
