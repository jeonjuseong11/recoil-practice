import { DefaultValue, selector } from 'recoil';
import cartState from './atoms';
import { CartItem } from './types';

// 장바구니의 총 가격을 계산하는 셀렉터
export const totalCartPrice = selector({
  key: 'totalCartPrice',
  get: ({ get }) => {
    const cart = get(cartState);
    if (cart.length === 0) {
      return 0;
    }
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  },
});

// 장바구니에서 아이템을 제거하는 셀렉터
export const removeFromCart = selector<number | DefaultValue>({
  key: 'removeFromCart',
  get: () => {
    return 0;
  },
  set: ({ set }, itemIdToRemove) => {
    if (!(itemIdToRemove instanceof DefaultValue)) {
      set(cartState, (prevCart: CartItem[]) =>
        prevCart.filter((item: CartItem) => item.id !== itemIdToRemove)
      );
    }
  },
});

// 장바구니 아이템을 업데이트하는 셀렉터
export const updateCartItem = selector<
  { itemId: number; newCount: number } | DefaultValue
>({
  key: 'updateCartItem',
  get: () => ({ itemId: -1, newCount: -1 }),
  set: ({ set }, updateData) => {
    if (!(updateData instanceof DefaultValue)) {
      set(cartState, (prevCart: CartItem[]) =>
        prevCart.map((item: CartItem) =>
          item.id === updateData.itemId
            ? { ...item, count: updateData.newCount }
            : item
        )
      );
    }
  },
});
