import React from 'react';
import { useState } from 'react';
import MyReview from './MyReview';
import OrderDetails from './OrderDetails';

const ProfileInfo = () => {
  const [review, setReview] = useState([]);
  const [orderList, setOrderList] = useState([]);

  return (
    <>
      <OrderDetails orderList={orderList} />
      <MyReview review={review} />
    </>
  );
};
export default ProfileInfo;
