function calculateDiscountedPrice(
  price: number,
  discount: string | undefined
): number {
  // discount가 undefined인 경우를 대비해 기본값으로 0을 설정
  const discountRate = discount ? parseInt(discount, 10) : 0;
  // 100원 단위로 반올림
  return Math.round((price * (1 - discountRate / 100)) / 100) * 100;
}
export default calculateDiscountedPrice;
