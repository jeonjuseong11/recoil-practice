import React from 'react';
import EmailVerificationForm from '../components/SignUp/EmailVerificationForm';
import { CardWrapper, PageContainer } from '../common';

const EmailVerification: React.FC = () => {
  return (
    <PageContainer>
      <CardWrapper>
        <h1 className="text-center text-xl font-semibold">이메일 인증</h1>
        <EmailVerificationForm />
      </CardWrapper>
    </PageContainer>
  );
};

export default EmailVerification;
