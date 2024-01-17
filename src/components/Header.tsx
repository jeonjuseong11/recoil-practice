import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useRecoilValue } from 'recoil';
import { isLoggedInSelector } from '../recoil/auth';
import useAuth from '../hooks/useAuth';
import MenuIcon from '../icons/MenuIcon';
import Logo from '../common/Logo';
import CartIcon from '../icons/CardIcon';
import SideMenu from './SideMenu';
import AuthButtons from './AuthButtons';

const HeaderWrapper = tw.header`
  flex items-center justify-center p-4 bg-white 
`;
const TopMenuSection = tw.section`
  flex items-center space-x-8 w-96 justify-center
`;
const TopMenuButtonGroup = tw.section`
  flex space-x-4 w-96 justify-end items-center
`;

const Header: React.FC = () => {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);
  const { handleLogout, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCartIcon, setShowCartIcon] = useState(true);

  const handleSideMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const updateLayout = () => {
    const threshold = 768;
    setShowCartIcon(window.innerWidth > threshold);
  };

  useEffect(() => {
    window.addEventListener('resize', updateLayout);
    updateLayout();

    return () => {
      window.removeEventListener('resize', updateLayout);
    };
  }, []);

  return (
    <>
      <HeaderWrapper>
        <div className="w-96">
          <button onClick={handleSideMenuClick}>
            <MenuIcon />
          </button>
        </div>
        <TopMenuSection>
          <Logo />
        </TopMenuSection>
        <TopMenuButtonGroup>
          {showCartIcon && <CartIcon />}
          <AuthButtons
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
            loggingOut={loading}
          />
        </TopMenuButtonGroup>
      </HeaderWrapper>
      <SideMenu isopen={isMenuOpen} handleSideMenuClick={handleSideMenuClick} />
      <div className="flex justify-center gap-5 p-3">
        <h1>홈</h1>
        <h1>통합검색</h1>
        <h1>추천</h1>
        <h1>랭킹</h1>
      </div>
    </>
  );
};

export default Header;
