import { atom } from 'recoil';
import User from './types';
import axios from 'axios';

export const userState = atom<User>({
  key: 'user',
  default: { userId: '', password: '' },
});

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedIn',
  default: localStorage.getItem('user') ? true : false,
});

//기본 api url 설정
export const client = axios.create({
  baseURL: import.meta.env.REACT_APP_API_BASE_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  responseType: 'json',
});

export const login = async (formData: { userId: string; password: string }) => {
  console.log(import.meta.env.REACT_APP_API_BASE_URL);
  const response = await client.post('/login', formData);
  const { userId, password, emp_ID } = response.data;

  localStorage.setItem('userInfo', JSON.stringify(response.data)); // 로컬 스토리지에 토큰 저장

  return { password, userId, emp_ID };
};

export const signup = async (formData: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await client.post('/signup', formData);
  const { username, email, token } = response.data;

  localStorage.setItem('userInfo', JSON.stringify(response.data)); // 로컬 스토리지에 토큰 저장

  return { username, email, token };
};

export const logout = async () => {
  try {
    // await axios.post('http://api주소/auth/logout');

    // 로컬 스토리지에서 토큰 제거
    localStorage.removeItem('userInfo');
  } catch (error) {
    console.error('Error:', error);
  }
};
