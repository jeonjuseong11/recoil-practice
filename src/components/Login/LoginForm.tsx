import { useState, ChangeEvent, FormEvent, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isLoggedInSelector, userStateSelector } from '../../recoil/auth';
import InputField from '../../common/InputField';
import { Form } from '../../common/BaseStyledComponents';
import { PrimaryButton } from './styles/Login.styled';
import useAxios from '../../hooks/useAxios';
import Spinner from '../../common/Spinner';
import { login } from '../../api/apiRequests';
import { instance } from '../../api/apiClient';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userStateSelector);
  const setIsLoggedIn = useSetRecoilState(isLoggedInSelector);
  const { sendRequest, loading } = useAxios();
  const isFormValid = () =>
    formData.email.trim() !== '' && formData.password.trim() !== '';

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid()) {
      await sendRequest(
        login(formData),
        (data) => {
          const { username, userId, role, token } = data.data;
          const userInfo = {
            username,
            email: userId,
            role,
          };
          setUser(userInfo);
          sessionStorage.setItem('user', JSON.stringify(userInfo));
          setIsLoggedIn(true);
          if (token) {
            sessionStorage.setItem(
              'token',
              JSON.stringify(data.data.refreshToken)
            );
            instance.defaults.headers.common['Authorization'] =
              `Bearer ${data.data.token}`;
            navigate('/');
          }
        },
        (error) => {
          console.error(error);
          alert('로그인 실패: ' + error.message);
        }
      );
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
      <PrimaryButton type="submit" disabled={!isFormValid() || loading}>
        로그인 {loading && <Spinner />}
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
