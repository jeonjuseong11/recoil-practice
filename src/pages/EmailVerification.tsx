import React from 'react';
import EmailVerificationForm from '../components/SignUp/EmailVerificationForm';
import { CardWrapper, PageContainer } from '../common';
import Logo from '../common/Logo';

const EmailVerification: React.FC = () => {
  return (
    <PageContainer>
      <CardWrapper>
        <Logo />
        <h1 className="text-left text-lg">이메일 인증</h1>
        <EmailVerificationForm />
      </CardWrapper>
    </PageContainer>
  );
};

export default EmailVerification;
