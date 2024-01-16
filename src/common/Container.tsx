import React, { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

const Container = tw.div`
  min-h-[calc(100vh)]
  w-full
  bg-gray-50 dark:bg-gray-900
  flex flex-col items-center justify-center 
  mx-auto
`;

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PageContainer;
