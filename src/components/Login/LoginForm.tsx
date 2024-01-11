import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isLoggedInSelector, userStateSelector } from '../../recoil/auth';
import InputField from '../../common/InputField';
import { Form } from '../../common/BaseStyledComponents';
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  PrimaryButton,
} from './styles/Login.styled';
import useAxios from '../../hooks/useAxios';
import { authAPI } from '../../api';
import { instance } from '../../api/apiClient';
import Spinner from '../../common/Spinner';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userStateSelector);
  const setIsLoggedIn = useSetRecoilState(isLoggedInSelector);
  const {
    sendRequest: login,
    loading: isLogging,
    status: loginStatus,
    error: loginError,
    done: loginDone,
  } = useAxios(authAPI.login);

  const isFormValid = () => {
    return formData.email.trim() !== '' && formData.password.trim() !== '';
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await login(formData);
    console.log(response);
    if (response) {
      if ('data' in response) {
        const { username, userId, refreshToken, token } = response.data;
        if (token) {
          instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        }
        setUser({
          username,
          email: userId,
        });
        setIsLoggedIn(true);
        sessionStorage.setItem('token', JSON.stringify(refreshToken));

        navigate('/');
      }
      if (loginError) {
        alert('로그인 실패');
      }
    }
  };

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    navigate('/signup/1');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        type="text"
        name="email"
        label="이메일"
        id="email"
        value={formData.email}
        placeholder="이메일을 입력해주세요"
        onChange={handleChange}
      />
      <InputField
        type="password"
        name="password"
        label="비밀번호"
        id="password"
        value={formData.password}
        placeholder="비밀번호를 입력해주세요"
        onChange={handleChange}
      />
      {/* <CheckboxContainer>
        <div className="flex items-center">
          <Checkbox id="remember" type="checkbox" />
          <CheckboxLabel htmlFor="remember">로그인 상태 유지</CheckboxLabel>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          비밀번호 찾기
        </a>
      </CheckboxContainer> */}

      <PrimaryButton type="submit" disabled={!isFormValid() || isLogging}>
        로그인
        {isLogging && <Spinner />}
      </PrimaryButton>
      <div className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
        계정이 없으신가요?{' '}
        <a
          href="#"
          className="font-medium text-blue-600 hover:underline"
          onClick={handleClick}
        >
          회원가입
        </a>
        {' | '}
        <a href="#" className="text-sm text-blue-600 hover:underline">
          비밀번호 찾기
        </a>
      </div>
    </Form>
  );
};

export default LoginForm;
