import { atom } from 'recoil';
import User from './types';
import axios from 'axios';

export const userState = atom<User>({
  key: 'user',
  default: { username: '', email: '' },
});

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedIn',
  default: localStorage.getItem('user') ? true : false,
});

export const login = async (formData: { email: string; password: string }) => {
  const response = await axios.post(
    'http://192.168.50.26:8000/api/login',
    formData
  );
  const { username, email, emp_ID } = response.data;

  localStorage.setItem('userInfo', email); // 로컬 스토리지에 토큰 저장

  return { username, email, emp_ID };
};

export const signup = async (formData: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post('http://api주소/auth/signup', formData);
  const { username, email, token } = response.data;

  localStorage.setItem('token', token); // 로컬 스토리지에 토큰 저장

  return { username, email, token };
};

export const logout = async () => {
  try {
    await axios.post('http://api주소/auth/logout');

    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem('token');
  } catch (error) {
    console.error('Error during logout:', error);
  }
};
