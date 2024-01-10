import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../api/authServices';
import tw from 'tailwind-styled-components';
import { useSetRecoilState } from 'recoil';
import { isLoggedInSelector, userStateSelector } from '../../recoil/auth';
import InputField from '../../common/InputField';
import { BaseButton, Form } from '../../common/BaseStyledComponents';

const CheckboxContainer = tw.div`
  flex items-center 
  justify-between
`;

const Checkbox = tw.input`
  w-4 h-4 
  text-blue-600 
  border-gray-300 
  rounded 
  focus:ring-blue-500 
  dark:focus:ring-blue-600
`;

const CheckboxLabel = tw.label`
  ml-2 
  text-sm 
  font-medium 
  text-gray-900 
  dark:text-gray-300
`;
const SignInButton = tw.button`
  w-full 
  text-white 
  bg-blue-600 
  hover:bg-blue-700 
  focus:ring-4 
  focus:ring-blue-300 
  font-medium 
  rounded-lg
  text-sm 
  px-5 
  py-2.5 
  text-center 
  transition-colors 
  duration-200
`;

const LoginForm = () => {
  const [formData, setFormData] = useState({ userId: '', password: '' });
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userStateSelector);
  const setIsLoggedIn = useSetRecoilState(isLoggedInSelector);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await login(formData);
    if (result.userVO) {
      setUser(result.userVO);
      setIsLoggedIn(true);
      sessionStorage.setItem('user', JSON.stringify(result.userVO));
      navigate('/');
    } else {
      alert(result.msg);
    }
  };
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/signup/1');
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputField
        type="text"
        name="userId"
        label="아이디"
        id="userId"
        placeholder="아이디를 입력해주세요"
        onChange={handleChange}
      />
      <InputField
        type="password"
        name="password"
        label="비밀번호"
        id="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={handleChange}
      />
      <CheckboxContainer>
        <div className="flex items-center">
          <Checkbox id="remember" type="checkbox" />
          <CheckboxLabel htmlFor="remember">로그인 상태 유지</CheckboxLabel>
        </div>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          비밀번호 찾기
        </a>
      </CheckboxContainer>
      <BaseButton
        bgColor="blue"
        hoverBgColor="blue"
        focusRingColor="blue"
        type="submit"
      >
        로그인
      </BaseButton>
      <div className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
        계정이 없으신가요?{' '}
        <a
          href="#"
          className="font-medium text-blue-600 hover:underline"
          onClick={handleClick}
        >
          회원가입
        </a>
      </div>
    </Form>
  );
};

export default LoginForm;
