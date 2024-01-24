import React from 'react';
import tw from 'tailwind-styled-components';
import { OrderDetailsProps } from './types';

const OrderDetailsBtn = tw.div`
  bg-gray-100 
  p-4 
  rounded-md 
  hover:bg-gray-200 
  active:bg-gray-300 
  transition 
  duration-200
`;

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderList }) => {
  const statusCount = orderList.reduce(
    (count, order) => {
      count[order.status] += 1;
      return count;
    },
    {
      주문내역: 0,
      배송중: 0,
      배송완료: 0,
      취소: 0,
    }
  );
  return (
    <>
      <h2 className="text-xl font-bold mb-4">구매 내역</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
        <OrderDetailsBtn>
          <h2 className="text-sm">주문내역</h2>
          <p className="text-3xl font-semibold">{statusCount['주문내역']}</p>
          <p className="text-xs">주문/배송내역</p>
        </OrderDetailsBtn>
        <OrderDetailsBtn>
          <h2 className="text-sm">배송중</h2>
          <p className="text-3xl font-semibold">{statusCount['배송중']}</p>
          <p className="text-xs">배송중</p>
        </OrderDetailsBtn>
        <OrderDetailsBtn>
          <h2 className="text-sm">배송완료</h2>
          <p className="text-3xl font-semibold">{statusCount['배송완료']}</p>
          <p className="text-xs">배송완료</p>
        </OrderDetailsBtn>
        <OrderDetailsBtn>
          <h2 className="text-sm">취소</h2>
          <p className="text-3xl font-semibold">{statusCount['취소']}</p>
          <p className="text-xs">취소/반품중</p>
        </OrderDetailsBtn>
      </div>
      <div className="text-gray-700 mb-5">
        <p>배송지</p>
        <p>서울특별시 강남구 역삼동 619-25</p>
      </div>
      {orderList.length === 0 && (
        <div className="text-center p-10">
          <p className="p-5">주문 내역이 없습니다.</p>
          <button
            type="button"
            className="bg-indigo-600 text-white px-5 py-3 rounded hover:opacity-75 duration-200"
          >
            주문하러 가기
          </button>
        </div>
      )}
      {orderList.map((order) => (
        <div className="flex gap-5 mb-4">
          <img
            src={order.bookImgUrl}
            className="w-24 h-28 bg-gray-300"
            alt="구매한 책 이미지"
          />
          <div className="w-8/12">
            <p>{order.bookName}</p>
            <p>{order.purchaseDate}</p>
            <p>{order.shippingState}</p>
            <p>{order.arrivalDate}</p>
          </div>
          <div className="w-2/12 flex flex-col gap-5 justify-center">
            <button
              type="button"
              className="font-light text-sm bg-gray-200 rounded p-1 hover:opacity-75 duration-200"
            >
              배송취소
            </button>
            <button
              type="button"
              className="font-light text-sm bg-gray-200 rounded p-1 hover:opacity-75 duration-200"
            >
              상세조회
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderDetails;
