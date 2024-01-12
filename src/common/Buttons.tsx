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

const buttonVariants = {
  primary: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300',
  success: 'bg-green-600 hover:bg-green-700 focus:ring-green-300',
};

type ButtonProps = {
  variant: keyof typeof buttonVariants;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  onClick,
  disabled,
  type = 'button',
}) => {
  const StyledButton = tw(BaseButton)`${buttonVariants[variant]}`;

  return (
    <StyledButton onClick={onClick} disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
