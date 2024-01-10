import React from 'react';
import { Card, Container } from '../common/BaseStyledComponents';
import SignUpForm from '../components/SignUp/SignUpForm';

const SignUpStepTwo: React.FC = () => {
  return (
    <div className="SignUpStepTwo">
      <Container>
        <Card>
          <h1 className="text-center text-xl font-semibold">회원가입</h1>
          <SignUpForm />
        </Card>
      </Container>
    </div>
  );
};

export default SignUpStepTwo;
