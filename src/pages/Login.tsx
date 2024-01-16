import React from 'react';
import tw from 'tailwind-styled-components';
import LoginForm from '../components/Login/LoginForm';
import { CardWrapper, PageContainer } from '../common';
import Logo from '../common/Logo';

const Title = tw.h1`
  text-center
  text-xl 
  font-bold 
  leading-tight 
  tracking-tight 
  text-gray-900 
  dark:text-white
`;

const Login: React.FC = () => {
  return (
    <PageContainer>
      <CardWrapper>
        <Logo />
        <LoginForm />
      </CardWrapper>
    </PageContainer>
  );
};

export default Login;
