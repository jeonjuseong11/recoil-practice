import tw from 'tailwind-styled-components';

export const CheckboxContainer = tw.div`
  flex items-center 
  justify-between
`;

export const Checkbox = tw.input`
  w-4 h-4 
  text-blue-600 
  border-gray-300 
  rounded 
  focus:ring-blue-500 
  dark:focus:ring-blue-600
`;

export const CheckboxLabel = tw.label`
  ml-2 
  text-sm 
  font-medium 
  text-gray-900 
  dark:text-gray-300
`;
export const SignInButton = tw.button`
  w-full 
  text-white 
  bg-blue-600 
  hover:bg-blue-700 
  focus:ring-4 
  focus:ring-blue-300 
  font-medium 
  rounded-lg
  text-sm 
  px-5 
  py-2.5 
  text-center 
  transition-colors 
  duration-200
`;
