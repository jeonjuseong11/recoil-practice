import { atom } from 'recoil';
import User from './interfaces';

export const userState = atom<User>({
  key: 'user',
  default: { username: '', email: '' },
});

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedIn',
  default: localStorage.getItem('user') ? true : false,
});
