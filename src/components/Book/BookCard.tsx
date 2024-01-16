import React from 'react';
import { NavLink } from 'react-router-dom';

interface BookCardProps {
  id: number;
  index: number;
  bookCoverUrl?: string;
  title: string;
  author?: string;
  description?: string;
  category?: string;
  price: number;
  discount?: string;
}

function calculateDiscountedPrice(
  price: number,
  discount: string | undefined
): number {
  // discount가 undefined인 경우를 대비해 기본값으로 0을 설정
  const discountRate = discount ? parseInt(discount, 10) : 0;
  // 100원 단위로 반올림
  return Math.round((price * (1 - discountRate / 100)) / 100) * 100;
}

const BookCard: React.FC<BookCardProps> = ({
  id,
  bookCoverUrl,
  title,
  author,
  category,
  description,
  price,
  discount,
}) => {
  const finalPrice = calculateDiscountedPrice(price, discount);
  return (
    <NavLink
      to={`books/${id}`}
      className="cursor-pointer hover:opacity-75 duration-200"
    >
      <div className="w-52 h-68 bg-gray-300 m-auto mb-2">
        {bookCoverUrl ? (
          <img
            className="w-full h-full object-cover"
            src={bookCoverUrl}
            alt={`책 표지 ${title}`}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            이미지가 없습니다
          </div>
        )}
      </div>
      <div className=" w-52 flex flex-col justify-between m-auto">
        <div>
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="text-gray-800 text-sm">{author}</p>
        </div>
        <div className="items-center text-sm">
          {discount && parseInt(discount) > 0 && (
            <div>
              <span className="text-red-600 flex-end mr-2">-{discount}%</span>
              <span className="text-red-500 line-through">
                {finalPrice.toLocaleString()}원
              </span>
            </div>
          )}
          <div className=" font-semibold text-gray-900">
            {finalPrice.toLocaleString()}원
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default BookCard;
