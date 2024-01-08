import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState, userState } from '../recoil/auth/atoms';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const setUser = useSetRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const navigate = useNavigate();
  return <div></div>;
};

export default LoginForm;
