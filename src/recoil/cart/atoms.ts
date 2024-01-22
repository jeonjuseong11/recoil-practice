// cartAtoms.ts
import { atom } from 'recoil';
import { CartItem } from './types';

const cartState = atom<CartItem[]>({
  key: 'cartState',
  default: [], // 초기 장바구니는 빈 배열로 시작합니다.
});
export default cartState;
