import React from 'react';
import EmailVerificationForm from '../components/SignUp/EmailVerificationForm';
import { Card, Container } from '../common/BaseStyledComponents';

const SignUpStepOne: React.FC = () => {
  return (
    <div className="SignUpStepOne">
      <Container>
        <Card>
          <h1 className="text-center text-xl font-semibold">이메일 인증</h1>
          <EmailVerificationForm />
        </Card>
      </Container>
    </div>
  );
};

export default SignUpStepOne;
