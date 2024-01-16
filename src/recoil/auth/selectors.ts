import { selector } from 'recoil';
import { userState, isLoggedInState, userEmailVerifiedState } from './atoms';
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
    return user.username !== '';
  },
  set: ({ set }, newValue) => {
    set(isLoggedInState, newValue);
  },
});
// 사용자가 이메일 인증을 통과했는지 확인
export const userEmailVerifiedSelector = selector<boolean>({
  key: 'userEmailVerifiedSelector',
  get: ({ get }) => {
    return get(userEmailVerifiedState);
  },
  set: ({ set }, newValue) => {
    set(userEmailVerifiedState, newValue);
  },
});
