import React, { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

const Card = tw.div`
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

interface ICard {
  children: ReactNode;
}

const CardWrapper: React.FC<ICard> = ({ children }) => {
  return <Card>{children}</Card>;
};

export default CardWrapper;
