import React from 'react';
import { MyReviewProps } from './types';

const MyReview: React.FC<MyReviewProps> = ({ review }) => {
  return (
    <>
      <h2 className="text-xl font-bold my-6">내 리뷰</h2>
      {review.length > 0 ? (
        review.map((r) => (
          <div className="flex gap-5" key={r.id}>
            <img
              src="userImg"
              className="w-24 h-28 bg-gray-300"
              alt="리뷰 쓴 책 이미지"
            />
            <div className="w-10/12">
              <p>{r.title}</p>
              <p>{r.rate}</p>
              <p>{r.date}</p>
              <p>{r.content}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center p-10">
          <p className="p-10">작성한 리뷰가 없습니다.</p>
        </div>
      )}
    </>
  );
};
export default MyReview;
