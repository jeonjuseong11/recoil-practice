import { useState, useEffect } from 'react';

const useValidation = (email: string, password: string) => {
  const [isEmailValid, setEmailValid] = useState(true);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [isPasswordValid, setPasswordValid] = useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  useEffect(() => {
    // 이메일 유효성 검사
    if (!email) {
      setEmailValid(false);
      setEmailErrorMessage('이메일을 입력해주세요.');
    } else if (!email.includes('@') || !email.includes('.')) {
      setEmailValid(false);
      setEmailErrorMessage('유효한 이메일 주소를 입력해주세요.');
    } else {
      setEmailValid(true);
      setEmailErrorMessage('');
    }

    // 비밀번호 유효성 검사
    if (!password) {
      setPasswordValid(false);
      setPasswordErrorMessage('비밀번호를 입력해주세요.');
    } else if (password.length < 8) {
      setPasswordValid(false);
      setPasswordErrorMessage('비밀번호는 8자 이상이어야 합니다.');
    } else {
      setPasswordValid(true);
      setPasswordErrorMessage('');
    }
  }, [email, password]);

  return {
    isEmailValid,
    emailErrorMessage,
    isPasswordValid,
    passwordErrorMessage,
  };
};

export default useValidation;
