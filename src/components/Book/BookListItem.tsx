import React from 'react';
import { CiHeart } from 'react-icons/ci';
import { NavLink, useNavigate } from 'react-router-dom';
import { BookCardProps } from './types';
import calculateDiscountedPrice from '../../../utils/calculateDiscountPrice';

const BookListItem: React.FC<BookCardProps> = ({
  index,
  id,
  bookCoverUrl,
  title,
  author,
  category,
  price,
  discount,
}) => {
  const finalPrice = calculateDiscountedPrice(price, discount);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/category/${categoryName}`);
  };

  return (
    <NavLink
      key={index}
      to={`details/${id}`}
      className="cursor-pointer hover:opacity-75 duration-200"
    >
      <div className="flex  gap-5 sm:block">
        <div className=" w-56 sm:w-full h-68 bg-gray-300 mb-2">
          {bookCoverUrl ? (
            <img
              className="w-full h-full object-cover max-w-52 sm:max-w-full"
              src={bookCoverUrl}
              alt={`책 표지 ${title}`}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              이미지가 없습니다
            </div>
          )}
        </div>
        <div className=" w-full flex justify-between sm:flex-col mt-1 ">
          <div>
            <h2 className="font-semibold text-lg flex justify-between">
              {title}
              <button type="button" className="hidden sm:block">
                <CiHeart />
              </button>
            </h2>
            <p className="text-gray-800 text-sm">{author}</p>
            {category &&
              category.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className="text-blue-600 cursor-pointer mr-2"
                  type="button"
                >
                  {cat}
                </button>
              ))}{' '}
          </div>
          <div className="text-right items-end text-sm flex flex-col ">
            {discount && parseInt(discount, 10) > 0 && (
              <div>
                <span className="text-red-600 flex-end mr-2">-{discount}%</span>
                <span className="text-red-500 line-through">
                  {price.toLocaleString()}원
                </span>
              </div>
            )}
            <div className="font-semibold text-gray-900">
              {finalPrice.toLocaleString()}원
            </div>
            <div className="block sm:hidden justify-end">
              <button type="button">장바구니</button>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default BookListItem;
