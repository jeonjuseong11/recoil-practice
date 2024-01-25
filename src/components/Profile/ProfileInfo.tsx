import { useState } from 'react';
import MyReview from './MyReview';
import OrderDetails from './OrderDetails';

const ProfileInfo = () => {
  const [review] = useState([]);
  const [orderList] = useState([]);

  return (
    <>
      <OrderDetails orderList={orderList} />
      <MyReview review={review} />
    </>
  );
};
export default ProfileInfo;
