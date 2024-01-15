import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../common/BaseStyledComponents';
import InputField from '../../common/InputField';
import useAxios from '../../hooks/useAxios';
import Spinner from '../../common/Spinner';
import { sendVerificationCode, verifyEmail } from '../../api';
import BaseButton from '../../common/Buttons';
import tw from 'tailwind-styled-components';

const VerificationButton = tw(BaseButton)`
  absolute inset-y-0 right-0 flex items-center justify-center px-3 text-white bg-blue-600
  hover:bg-blue-700 focus:ring-blue-300 text-sm rounded-lg
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
          alert(`${email}에 인증메일을 보냈습니다. 
메일에서 인증코드를 확인해주세요`);
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
        setVerificationCodeError('이메일 인증 실패 다시 시도해주세요');
        alert('인증 코드 검증 실패');
      }
    );
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
          autoFocus={true}
        >
          <VerificationButton
            onClick={handleSendVerificationEmail}
            disabled={!isEmailValid() || isCodeSending || isVerifying}
          >
            인증 메일 전송
            {isCodeSending && <Spinner />}
          </VerificationButton>
        </InputField>
      </div>
      {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
      {isCodeSent && (
        <>
          <InputField
            type="text"
            name="verificationCode"
            id="verificationCode"
            value={verificationCode}
            placeholder="인증 코드를 입력해주세요"
            autoFocus
            onChange={handleVerificationCodeChange}
            maxLength={6}
          />
          {verificationCodeError && (
            <div style={{ color: 'red' }}>{verificationCodeError}</div>
          )}
          <BaseButton
            onClick={handleVerifyCode}
            disabled={isCodeSending || isVerifying}
          >
            코드 검증 {isVerifying ? <Spinner /> : <></>}
          </BaseButton>
        </>
      )}
    </Form>
  );
};

export default EmailVerificationForm;
