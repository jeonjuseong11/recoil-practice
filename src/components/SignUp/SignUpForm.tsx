import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useLocation } from 'react-router-dom';
import InputField from '../../common/InputField';
import { BaseButton } from '../../common/BaseStyledComponents';
import useAuth from '../../hooks/useAuth';
import useValidation from '../../hooks/useValidation';

const PrimaryButton = tw(BaseButton)`
  bg-blue-600 hover:bg-blue-700 focus:ring-blue-300
`;

const Form = tw.form`
  space-y-4 
  md:space-y-6
`;

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { handleSignup } = useAuth();
  const {
    isEmailValid,
    emailErrorMessage,
    isPasswordValid,
    passwordErrorMessage,
  } = useValidation(formData.email, formData.password);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setFormData((prevData) => ({ ...prevData, email: location.state.email }));
    }
  }, [location.state]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid) {
      await handleSignup(formData);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        label="이메일"
        type="email"
        name="email"
        id="email"
        value={formData.email}
        placeholder="이메일을 입력해주세요"
        onChange={handleChange}
        readOnly
        disabled
      />
      {!isEmailValid && <p className="error-message">{emailErrorMessage}</p>}
      <InputField
        label="비밀번호"
        type="password"
        name="password"
        id="password"
        value={formData.password}
        placeholder="비밀번호를 입력해주세요"
        onChange={handleChange}
      />
      {!isPasswordValid && (
        <p className="error-message">{passwordErrorMessage}</p>
      )}
      <InputField
        label="이름"
        type="text"
        name="username"
        id="username"
        value={formData.username}
        placeholder="이름을 입력해주세요"
        onChange={handleChange}
      />
      <PrimaryButton type="submit">회원가입</PrimaryButton>
    </Form>
  );
};

export default SignUpForm;
