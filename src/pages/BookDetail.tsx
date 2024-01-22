import React from 'react';
import { NavLink } from 'react-router-dom';

const BookDetail: React.FC = () => {
  // const books = useRecoilValue(discountedBooksSelector); // 할인이 있는 책 목록
  // const editedBooks = books.slice(0, 5);
  return (
    <div className="flex flex-col m-auto">
      <div className="w-full p-10 my-8 m-auto xl:p-0 xl:max-w-[72rem]">
        <div className="flex justify-between mb-10">
          <h1 className="text-left text-xl">타임 세일</h1>
          <NavLink
            to="/sales"
            className="transition-transform duration-200 ease-in-out transform hover:translate-x-2  hover:text-indigo-600"
          >
            더보기 &#62;
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
