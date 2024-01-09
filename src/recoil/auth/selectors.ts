import { selector } from 'recoil';
import { userState, isLoggedInState } from './atoms';
import { User } from './types';

//현재 사용자의 정보
export const userStateSelector = selector<User>({
  key: 'userStateSelector',
  get: ({ get }) => {
    return get(userState);
  },
  set: ({ set }, newValue) => {
    set(userState, newValue);
  },
});
// 사용자의 로그인 여부
export const isLoggedInSelector = selector<boolean>({
  key: 'isLoggedInSelector',
  get: ({ get }) => {
    const user = get(userState);
    return user.emp_ID !== '';
  },
  set: ({ set }, newValue) => {
    set(isLoggedInState, newValue);
  },
});