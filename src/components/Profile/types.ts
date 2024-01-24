import { User } from '../../recoil/auth/types';

export interface ProfileCardProps {
  user: User;
}
export interface IOrderList {
  bookImgUrl: string;
  bookName: string;
  purchaseDate: string;
  shippingState: string;
  arrivalDate: string;
  status: '주문내역' | '배송중' | '배송완료' | '취소';
}

export interface OrderDetailsProps {
  orderList: IOrderList[];
}

export interface IReview {
  id: number;
  title: string;
  rate: string;
  date: string;
  content: string;
}

export interface MyReviewProps {
  review: IReview[];
}
