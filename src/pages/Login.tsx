import React from 'react';
import tw from 'tailwind-styled-components';
import LoginForm from '../components/Login/LoginForm';

const Container = tw.div`
  min-h-[calc(100vh-4rem)]
  w-full
  bg-gray-50 dark:bg-gray-900
  flex flex-col items-center justify-center 
  px-4 py-4 mx-auto
`;
const Card = tw.div`
  w-full 
  max-w-md 
  bg-white 
  rounded-lg 
  shadow dark:border 
  md:mt-0 xl:p-0 
  dark:bg-gray-800 
  dark:border-gray-700
`;

const CardContent = tw.div`
  p-6 
  space-y-4 
  md:space-y-6 
  sm:p-8
`;

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
        <CardContent>
          <Title>Login</Title>
          <LoginForm />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
