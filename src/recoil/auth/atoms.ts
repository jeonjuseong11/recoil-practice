import { atom } from 'recoil';
import { User } from './types';

const storedUser = sessionStorage.getItem('user');
const storedToken = sessionStorage.getItem('token');

export const userState = atom<User | null>({
  key: 'user',
  default: storedUser ? JSON.parse(storedUser) : null,
});

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedIn',
  default: !!storedToken,
});
