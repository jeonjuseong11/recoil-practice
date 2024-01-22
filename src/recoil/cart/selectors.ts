import { selector } from 'recoil';
import { cartState } from './atoms';

// 장바구니의 총 가격을 계산하는 셀렉터
export const totalCartPrice = selector({
  key: 'totalCartPrice',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  },
});

// 장바구니에서 아이템을 제거하는 셀렉터
export const removeFromCart = selector({
  key: 'removeFromCart',
  get: ({ get }) => {
    get(cartState);
  },
  set: ({ set }, itemIdToRemove) => {
    set(cartState, (prevCart) =>
      prevCart.filter((item) => item.id !== itemIdToRemove)
    );
  },
});

// 장바구니 아이템을 업데이트하는 셀렉터
export const updateCartItem = selector({
  key: 'updateCartItem',
  get: ({ get }) => {
    get(cartState);
  },
  set: ({ set }, { itemId, newCount }) => {
    set(cartState, (prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, count: newCount } : item
      )
    );
  },
});
