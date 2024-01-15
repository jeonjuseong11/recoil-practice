// cartAtoms.ts
import { atom } from 'recoil';

export const cartState = atom({
  key: 'cartState',
  default: [], // 초기 장바구니는 빈 배열로 시작합니다.
});
