import React from 'react';
import MenuIcon from '../icons/MenuIcon';

interface SideMenuProps {
  isOpen: boolean;
  handleSideMenuClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, handleSideMenuClick }) => {
  const classes = `fixed left-0 top-0 h-full w-64 bg-white p-4 transform transition-transform duration-300 ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  }`;

  return (
    <div className={classes}>
      <button onClick={handleSideMenuClick}>
        <MenuIcon />
      </button>
      {/* 일단 있을 메뉴들 나열 후 로그인 여부에 따라 렌더링 변경 예정 */}
      <p>홈</p>
      <p>카테고리</p>
      <p>추천</p>
      <p>랭킹</p>
      <p>추천</p>
      <p>마이페이지</p>
      <p>로그아웃</p>
      <p>로그인</p>
      <p>장바구니</p>
    </div>
  );
};

export default SideMenu;
