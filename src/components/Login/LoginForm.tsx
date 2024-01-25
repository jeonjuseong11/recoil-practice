import { useState, ChangeEvent, FormEvent, MouseEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import InputField from '../../common/InputField';
import { Form } from '../../common/BaseStyledComponents';
import Spinner from '../../common/Spinner';
import BaseButton from '../../common/Buttons';
import useAuth from '../../hooks/useAuth';
import useValidation from '../../hooks/useValidation';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { handleLogin, loading } = useAuth();
  const {
    isEmailValid,
    emailErrorMessage,
    isPasswordValid,
    passwordErrorMessage,
  } = useValidation(formData.email, formData.password);

  const isFormValid = () => isEmailValid && isPasswordValid;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid()) {
      await handleLogin(formData);
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
      {!isEmailValid && (
        <div className="text-sm text-red-500">{emailErrorMessage}</div>
      )}
      <InputField
        type="password"
        name="password"
        label="비밀번호"
        id="password"
        value={formData.password}
        placeholder="비밀번호를 입력해주세요"
        onChange={handleChange}
      />
      {!isPasswordValid && (
        <div className="text-sm text-red-500">{passwordErrorMessage}</div>
      )}

      <BaseButton
        type="submit"
        onClick={() => handleSubmit}
        variant="primary"
        disabled={!isFormValid() || loading}
      >
        로그인 {loading && <Spinner />}
      </BaseButton>
      <div className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
        계정이 없으신가요?{' '}
        <a
          href="signup"
          className="font-medium text-blue-600 hover:underline"
          onClick={handleClick}
        >
          회원가입
        </a>
      </div>
      <div className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
        비밀번호를 까먹으셨나요?{' '}
        <Link
          to="/findpw"
          className="font-medium text-blue-600 hover:underline"
        >
          비밀번호 찾기
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
