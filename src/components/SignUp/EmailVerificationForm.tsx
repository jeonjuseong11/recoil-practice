import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { Form } from '../../common/BaseStyledComponents';
import InputField from '../../common/InputField';
import Spinner from '../../common/Spinner';
import BaseButton from '../../common/Buttons';
import useAuth from '../../hooks/useAuth';
import useValidation from '../../hooks/useValidation';

const VerificationButton = tw(BaseButton)`
  absolute inset-y-0 right-0 flex items-center justify-center px-3 text-white bg-blue-600
  hover:bg-blue-700 focus:ring-blue-300 text-sm rounded-lg
`;

const EmailVerificationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const navigate = useNavigate();

  const { handleSendVerificationEmail, handleVerifyCode, loading } = useAuth(); // useAuth 훅 사용
  const { isEmailValid, emailErrorMessage } = useValidation(email, ''); // useValidation 훅 사용

  // 이메일 변경 핸들러
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // 인증 코드 변경 핸들러
  const handleVerificationCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };

  // 인증 코드 발송 핸들러
  const handleSendCode = async () => {
    if (isEmailValid) {
      await handleSendVerificationEmail(email);
      setIsCodeSent(true);
    } else {
      alert(emailErrorMessage);
    }
  };

  // 인증 코드 검증 핸들러
  const handleVerify = async () => {
    await handleVerifyCode({ email, code: verificationCode });
    navigate('/signup/2', { state: { email } });
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <InputField
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="이메일을 입력해주세요"
          onChange={handleEmailChange}
          disabled={isCodeSent}
          autoFocus
        >
          <VerificationButton
            type="button"
            variant="primary"
            onClick={handleSendCode}
            disabled={!isEmailValid || loading}
          >
            인증 메일 전송
            {loading && <Spinner />}
          </VerificationButton>
        </InputField>
      </div>
      {emailErrorMessage && (
        <div className="text-sm text-red-500">{emailErrorMessage}</div>
      )}
      {isCodeSent && (
        <>
          <InputField
            type="text"
            name="verificationCode"
            id="verificationCode"
            value={verificationCode}
            placeholder="인증 코드를 입력해주세요"
            onChange={handleVerificationCodeChange}
            maxLength={6}
          />
          <BaseButton type="button" variant="primary" onClick={handleVerify}>
            코드 검증
          </BaseButton>
        </>
      )}
    </Form>
  );
};

export default EmailVerificationForm;
