import tw from 'tailwind-styled-components';

export const Section = tw.section`
flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900
`;

export const Container = tw.div`
  flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0
`;

export const LogoLink = tw.a`
  flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white
`;

export const LogoImage = tw.img`
  w-8 h-8 mr-2
`;

export const Card = tw.div`
  w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700
`;

export const CardContent = tw.div`
  p-6 space-y-4 md:space-y-6 sm:p-8
`;

export const Title = tw.h1`
  text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white
`;

export const Form = tw.form`
  space-y-4 md:space-y-6
`;

export const InputLabel = tw.label`
  block mb-2 text-sm font-medium text-gray-900 dark:text-white
`;

export const Input = tw.input`
  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
`;

export const FlexContainer = tw.div`
  flex items-center justify-between
`;

export const CheckboxContainer = tw.div`
  flex items-start
`;

export const Checkbox = tw.input`
  w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800
`;

export const CheckboxLabel = tw.label`
  ml-3 text-sm text-gray-500 dark:text-gray-300
`;

export const Link = tw.a`
  text-sm font-medium text-primary-600 hover:underline dark:text-primary-500
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

export const Text = tw.p`
  text-sm font-light text-gray-500 dark:text-gray-400
`;
