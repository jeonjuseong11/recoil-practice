import React from 'react';
import LoginForm from '../components/Login/LoginForm';
import { CardWrapper, PageContainer } from '../common';
import Logo from '../common/Logo';

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
