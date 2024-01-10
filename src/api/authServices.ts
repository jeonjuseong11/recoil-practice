import { client } from './apiClient';
import axios from 'axios';

export const login = async (formData: { email: string; password: string }) => {
  try {
    const response = await client.post('/login', formData);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    console.error('로그인 에러 : ', error);
    return error;
  }
};

export const signup = async (formData: {
  username: string;
  password: string;
  email: string;
}) => {
  try {
    const response = await client.post('/signup', formData);
    console.log(response);

    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    console.error('회원가입 에러 : ', error);
    return error;
  }
};

export const logout = async () => {
  try {
    await client.post('/logout');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    console.error('로그아웃 에러 : ', error);
    return error;
  }
};

export const sendVerificationCode = async (email: string) => {
  try {
    const response = await client.post('/send-verification-email', {
      email,
    });
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    console.error('인증메일 발송 에러 : ', error);
    return error;
  }
};

export const verifyEmail = async (code: string, email: string) => {
  try {
    const response = await client.post('/verify-email', { code, email });
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    console.error('이메일 인증 에러 : ', error);
    return error;
  }
};

export const updateToken = async (token: string) => {
  try {
    const response = await client.post('/update-token', { token });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    console.error('토큰 재발급 에러 : ', error);
    return error;
  }
};
