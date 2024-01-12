import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseButton, Form } from '../../common/BaseStyledComponents';
import InputField from '../../common/InputField';
import tw from 'tailwind-styled-components';
import useAxios from '../../hooks/useAxios';
import Spinner from '../../common/Spinner';
import { sendVerificationCode, verifyEmail } from '../../api/apiRequests';

const PrimaryButton = tw(BaseButton)`
  bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 gap-3	
`;
const SuccessButton = tw(BaseButton)`
  bg-green-600 hover:bg-green-700 focus:ring-green-300 gap-3
`;

const EmailVerificationForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationCodeError, setVerificationCodeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const navigate = useNavigate();

  // 이메일 인증 코드 발송

  const { sendRequest: sendCodeRequest, loading: isCodeSending } = useAxios();

  // 이메일 인증 코드 검증
  const { sendRequest: verifyEmailRequest, loading: isVerifying } = useAxios();

  // 이메일 변경 핸들러
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // 이메일 형식을 검사하는 정규 표현식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!newEmail) {
      setEmailError('이메일을 입력해주세요');
    } else if (!emailRegex.test(newEmail)) {
      setEmailError('유효한 이메일 주소를 입력해주세요');
    } else {
      setEmailError('');
    }
  };

  const isEmailValid = () => {
    return email.length > 0 && emailError === '';
  };

  // 인증 코드 변경 핸들러
  const handleVerificationCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  };

  // 인증 코드 발송 핸들러
  const handleSendVerificationEmail = async () => {
    if (emailError === '') {
      await sendCodeRequest(
        sendVerificationCode({ email }),
        () => {
          setIsCodeSent(true);
        },
        (error) => {
          console.error(error);
          alert('인증 코드 전송 실패');
        }
      );
    }
  };

  // 인증 코드 검증 핸들러
  const handleVerifyCode = async () => {
    await verifyEmailRequest(
      verifyEmail({ email, code: verificationCode }),
      () => {
        navigate('/signup/2', { state: { email } });
      },
      (error) => {
        console.error(error);
        alert('인증 코드 검증 실패');
      }
    );
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
        autoFocus={true}
      />
      {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
      {isCodeSent && (
        <>
          <InputField
            type="text"
            name="verificationCode"
            id="verificationCode"
            value={verificationCode}
            placeholder="인증 코드를 입력해주세요"
            onChange={handleVerificationCodeChange}
          />{' '}
          {verificationCodeError && (
            <div style={{ color: 'red' }}>{verificationCodeError}</div>
          )}
          <SuccessButton
            onClick={handleVerifyCode}
            disabled={isCodeSending || isVerifying}
          >
            코드 검증 {isVerifying ? <Spinner /> : <></>}
          </SuccessButton>
        </>
      )}
      <PrimaryButton
        onClick={handleSendVerificationEmail}
        disabled={!isEmailValid() || isCodeSending || isVerifying}
      >
        {isCodeSent ? '재발송' : '메일 인증'}
        {isCodeSending && <Spinner />}
      </PrimaryButton>
    </Form>
  );
};

export default EmailVerificationForm;
