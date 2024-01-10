import React from 'react';
import tw from 'tailwind-styled-components';
import LoginForm from '../components/Login/LoginForm';
import { Container, Card } from '../common/BaseStyledComponents';

const Title = tw.h1`
  text-center
  text-xl 
  font-bold 
  leading-tight 
  tracking-tight 
  text-gray-900 
  md:text-2xl 
  dark:text-white
`;

const Login: React.FC = () => {
  return (
    <Container>
      <Card>
        <Title>Login</Title>
        <LoginForm />
      </Card>
    </Container>
  );
};

export default Login;
