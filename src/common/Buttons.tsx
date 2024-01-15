import React from 'react';
import tw from 'tailwind-styled-components';

// 버튼의 기본 스타일
const StyledButton = tw.button`
  w-full 
  text-white 
  font-medium 
  rounded-lg
  text-sm 
  px-5 
  py-2.5 
  text-center 
  focus:ring-4 
  transition-colors 
  duration-200 
  flex items-center justify-center gap-2
`;

// 버튼 속성 정의
interface ButtonProps {
  variant?: 'primary' | 'success';
  disabled?: boolean;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

// BaseButton 컴포넌트
const BaseButton: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  disabled = false,
  type = 'button',
  onClick,
}) => {
  // 버튼 변형에 따른 스타일
  const variantStyles = {
    primary: `bg-blue-600 hover:bg-blue-700 focus:ring-blue-300`,
    success: `bg-green-600 hover:bg-green-700 focus:ring-green-300`,
  };

  // 비활성화 스타일
  const disabledStyle = `opacity-50 cursor-not-allowed`;

  return (
    <StyledButton
      className={`${variantStyles[variant]} ${disabled ? disabledStyle : ''}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default BaseButton;
