import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendVerificationCode, verifyEmail } from '../../api/authServices';
import { BaseButton, Form } from '../../common/BaseStyledComponents';
import InputField from '../../common/InputField';
import tw from 'tailwind-styled-components';
const PrimaryButton = tw(BaseButton)`
  bg-blue-600 hover:bg-blue-700 focus:ring-blue-300
`;

const SuccessButton = tw(BaseButton)`
  bg-green-600 hover:bg-green-700 focus:ring-green-300
`;
const DangerButton = tw(BaseButton)`
  bg-red-600 hover:bg-red-700 focus:ring-red-300`;

const EmailVerificationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleVerificationCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };

  const handleSendVerificationEmail = async () => {
    const result = await sendVerificationCode(email);
    if (result === 200) {
      setIsCodeSent(true);
    } else {
      alert(result || '이메일 인증 코드 발송 실패');
    }
  };

  const handleVerifyCode = async () => {
    const result = await verifyEmail(verificationCode, email);
    if (result === 200) {
      navigate('/signup/2', { state: { email } });
    } else {
      alert(result || '인증 코드 검증 실패');
    }
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <InputField
        type="email"
        name="email"
        id="email"
        value={email}
        placeholder="이메일을 입력해주세요"
        onChange={handleEmailChange}
        disabled={isCodeSent}
      />
      {isCodeSent ? (
        <>
          <InputField
            type="text"
            name="verificationCode"
            id="verificationCode"
            value={verificationCode}
            placeholder="인증 코드를 입력해주세요"
            onChange={handleVerificationCodeChange}
          />
          <SuccessButton onClick={handleVerifyCode}>코드 검증</SuccessButton>
          <PrimaryButton onClick={handleSendVerificationEmail}>
            재발송
          </PrimaryButton>
        </>
      ) : (
        <PrimaryButton onClick={handleSendVerificationEmail}>
          메일 인증
        </PrimaryButton>
      )}
    </Form>
  );
};

export default EmailVerificationForm;
