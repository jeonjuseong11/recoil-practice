import React from 'react';
import SignUpForm from '../components/SignUp/SignUpForm';
import { CardWrapper, PageContainer } from '../common';

const AccountSetup: React.FC = () => {
  return (
    <PageContainer>
      <CardWrapper>
        <h1 className="text-center text-xl font-semibold">회원가입</h1>
        <SignUpForm />
      </CardWrapper>
    </PageContainer>
  );
};

export default AccountSetup;
