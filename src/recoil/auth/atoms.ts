import { atom } from 'recoil';
import { User } from './types';
``;
export const userState = atom<User>({
  key: 'user',
  default: (() => {
    const userString = sessionStorage.getItem('user');
    if (userString) {
      try {
        return JSON.parse(userString) as User;
      } catch {
        return { emp_NM: '', passwd: '', emp_ID: '' };
      }
    }
    return { emp_NM: '', passwd: '', emp_ID: '' };
  })(),
});

export const isLoggedInState = atom<boolean>({
  key: 'isLoggedIn',
  default: sessionStorage.getItem('user') ? true : false,
});
