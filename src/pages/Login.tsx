import React, { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState, login, userState } from '../recoil/auth/atoms';
import { useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
// import { SignInButton } from './LoginStyle';

const Container = tw.div`
  min-h-[calc(100vh-4rem)]
  w-full
  bg-gray-50 dark:bg-gray-900
  flex flex-col items-center justify-center 
  px-4 py-4 mx-auto
`;
const Card = tw.div`
  w-full 
  max-w-md 
  bg-white 
  rounded-lg 
  shadow dark:border 
  md:mt-0 xl:p-0 
  dark:bg-gray-800 
  dark:border-gray-700
`;

const CardContent = tw.div`
  p-6 
  space-y-4 
  md:space-y-6 
  sm:p-8
`;

const Title = tw.h1`
  text-center
  text-xl 
  font-bold 
  leading-tight 
  tracking-tight 
  text-gray-900 
  md:text-2xl 
  dark:text-white
`;

const Form = tw.form`
  space-y-4 md:space-y-6
`;

const InputLabel = tw.label`
  block mb-2 text-sm font-medium text-gray-900 dark:text-white
`;

const Input = tw.input`
  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
`;

const CheckboxContainer = tw.div`
  flex items-center justify-between
`;

const Checkbox = tw.input`
  w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600
`;

const CheckboxLabel = tw.label`
  ml-2 text-sm font-medium text-gray-900 dark:text-gray-300
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

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ userId: '', password: '' });
  const setUser = useSetRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loggedInUser = await login(formData);
    setUser(loggedInUser);
    setIsLoggedIn(true);
    navigate('/');
  };
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Title>Login</Title>
          <Form onSubmit={handleSubmit}>
            <div>
              <InputLabel htmlFor="userId">아이디</InputLabel>
              <Input
                type="text"
                name="userId"
                id="userId"
                placeholder="아이디를 입력해주세요"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <InputLabel htmlFor="password">비밀번호</InputLabel>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="비밀번호를 입력해주세요"
                required
                onChange={handleChange}
              />
            </div>
            <CheckboxContainer>
              <div className="flex items-center">
                <Checkbox id="remember" type="checkbox" />
                <CheckboxLabel htmlFor="remember">
                  로그인 상태 유지
                </CheckboxLabel>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                비밀번호 찾기
              </a>
            </CheckboxContainer>
            <SignInButton type="submit">로그인</SignInButton>
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
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
