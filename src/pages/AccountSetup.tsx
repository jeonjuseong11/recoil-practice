import React from 'react';
import SignUpForm from '../components/SignUp/SignUpForm';
import { CardWrapper, PageContainer } from '../common';
import Logo from '../common/Logo';

const AccountSetup: React.FC = () => {
  return (
    <PageContainer>
      <CardWrapper>
        <Logo />
        <h1 className="text-center text-lg">회원가입</h1>
        <SignUpForm />
      </CardWrapper>
    </PageContainer>
  );
};

export default AccountSetup;
