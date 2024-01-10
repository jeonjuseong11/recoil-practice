import tw from 'tailwind-styled-components';

export const Container = tw.div`
  min-h-[calc(100vh-4rem)]
  w-full
  bg-gray-50 dark:bg-gray-900
  flex flex-col items-center justify-center 
  px-4 py-4 mx-auto
`;
export const Card = tw.div`
  animate-slide-up  
  w-full 
  max-w-md 
  bg-white 
  rounded-lg 
  shadow dark:border 
  dark:bg-gray-800 
  dark:border-gray-700
  p-6 
  space-y-4 
  md:space-y-6 
  sm:p-8
`;
export const Form = tw.form`
  space-y-4 
  md:space-y-6
`;
export const BaseButton = tw.button`
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
