import React from 'react';

interface BookCardProps {
  index: number;
  bookCoverUrl?: string;
  title?: string;
  author?: string;
  description?: string;
  category?: string;
  price: string;
  discount?: string;
}

function parsePrice(price: string | undefined): number {
  // price가 undefined인 경우를 대비해 기본값으로 0을 설정
  return price ? parseInt(price, 10) : 0;
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
  bookCoverUrl,
  title,
  author,
  category,
  description,
  price,
  discount,
}) => {
  const originalPrice = parsePrice(price);
  const finalPrice = calculateDiscountedPrice(originalPrice, discount);

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-56 bg-gray-300">
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
      <div
        className="p-4
"
      >
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="text-gray-800 text-sm">{author}</p>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex justify-between items-center">
          {discount && parseInt(discount) > 0 && (
            <span className="text-red-500 line-through">
              {parseInt(price, 10).toLocaleString()}원
            </span>
          )}
          <span className="text-lg font-semibold text-gray-900">
            {finalPrice.toLocaleString()}원
          </span>
        </div>
        {discount && parseInt(discount) > 0 && (
          <div className="flex flex- text-sm text-red-600">-{discount}%</div>
        )}
      </div>
    </div>
  );
};

export default BookCard;
