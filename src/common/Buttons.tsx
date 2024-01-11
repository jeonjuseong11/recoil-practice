import React from 'react';
import tw from 'tailwind-styled-components';

const BaseButton = tw.button`
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
`;

// 버튼의 타입을 정의합니다 (예: 'primary', 'success')
const buttonVariants = {
  primary: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300',
  success: 'bg-green-600 hover:bg-green-700 focus:ring-green-300',
};

// 버튼의 Props 타입을 정의합니다
type ButtonProps = {
  variant: keyof typeof buttonVariants;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

// 재사용 가능한 Button 컴포넌트
const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  disabled,
}) => {
  const StyledButton = tw(BaseButton)(buttonVariants[variant]);

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
