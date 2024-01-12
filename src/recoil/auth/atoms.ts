import { atom } from 'recoil';
import { User } from './types';

export const userState = atom<User>({
  key: 'user',
  default: { username: '', email: '' },
});

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedIn',
  default: false,
});
