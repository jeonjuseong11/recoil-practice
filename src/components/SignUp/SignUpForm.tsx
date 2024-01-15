import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import InputField from '../../common/InputField';
import { BaseButton } from '../../common/BaseStyledComponents';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { signup } from '../../api';

const PrimaryButton = tw(BaseButton)`
  bg-blue-600 hover:bg-blue-700 focus:ring-blue-300
`;

const Form = tw.form`
  space-y-4 
  md:space-y-6
`;

interface SignUpFormData {
  username: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    username: '',
    email: '',
    password: '',
  });
  const { sendRequest: signupRequest, error } = useAxios();
  const location = useLocation();
  const navigate = useNavigate();

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

    await signupRequest(
      signup(formData),
      () => {
        alert('환영합니다 로그인 페이지로 이동합니다');
        navigate('/login');
      },
      () => {
        alert('회원가입 실패');
        console.error(error);
      }
    );
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
        readOnly={true}
        disabled={true}
      />
      <InputField
        label="비밀번호"
        type="password"
        name="password"
        id="password"
        value={formData.password}
        placeholder="비밀번호를 입력해주세요"
        onChange={handleChange}
      />
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
