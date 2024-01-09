import { client } from './apiClient';
import axios from 'axios';

export const login = async (formData: { userId: string; password: string }) => {
  try {
    const response = await client.post('/login', formData);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    console.error('Error:', error);
    return error;
  }
};

export const signup = async (formData: {
  userId: string;
  password: string;
  emp_ID: string;
}) => {
  try {
    const response = await client.post('/signup', formData);
    const { userId, password, emp_ID } = response.data;

    return { userId, password, emp_ID };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    console.error('An unexpected error occurred:', error);
    return error;
  }
};

export const logout = async () => {
  try {
    // await axios.post('http://api주소/auth/logout');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
    console.error('An unexpected error occurred:', error);
    return error;
  }
};
