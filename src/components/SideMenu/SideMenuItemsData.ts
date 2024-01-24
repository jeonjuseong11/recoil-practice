import { BsFire } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { IoBookOutline, IoPricetagOutline } from 'react-icons/io5';
import { MdOutlineFiberNew, MdOutlineRateReview } from 'react-icons/md';
import { TbDiscount2 } from 'react-icons/tb';

const menuItems = [
  {
    name: '신규 출시',
    to: '/new-releases',
    icon: MdOutlineFiberNew,
  },
  {
    name: '포럼/커뮤니티',
    to: '/community',
    icon: MdOutlineRateReview,
  },
  {
    name: '추천 서적',
    to: '/recommendations',
    icon: IoBookOutline,
  },
  {
    name: '할인/프로모션',
    to: '/deals',
    icon: TbDiscount2,
  },
  {
    name: '카테고리',
    icon: IoPricetagOutline,
    subMenuItems: [
      { name: 'Products', to: '/products' },
      { name: 'Billing', to: '/billing' },
      { name: 'Invoice', to: '/invoice' },
    ],
  },
  {
    name: '장바구니',
    to: '/cart',
    icon: FiShoppingCart,
    badgeCount: 3, // 장바구니에 담긴 항목 수를 나타내는 예시
  },
  {
    name: '베스트 셀러',
    to: '/books/best',
    icon: BsFire,
  },
];
export default menuItems;
