import React from 'react';
import tw from 'tailwind-styled-components';
import { RiLoginBoxLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiX } from 'react-icons/fi';

import { useRecoilValue } from 'recoil';
import { isLoggedInSelector, userStateSelector } from '../../recoil/auth';

import Logo from '../../common/Logo';
import menuItems from './SideMenuItemsData';
import SideMenuitem from './SideMenuItem';
import UserProfile from './SideMenuProfile';

interface SideMenuProps {
  isopen: boolean | undefined;
  handleSideMenuClick: React.MouseEventHandler<HTMLButtonElement>;
}
interface SideMenuContainerProps {
  isopen: string | undefined;
}
const SideMenuContainer = tw.div<SideMenuContainerProps>`
  fixed z-50 left-0 top-0 h-full md:w-96 w-full bg-white p-4 transform transition-transform duration-300
  ${(p) => (p.isopen ? 'translate-x-0' : '-translate-x-full')}
`;

const SideBar = tw.aside`
  fixed top-0 left-0 z-40 w-full h-screen transition-transform -translate-x-full translate-x-0  px-3 py-4 bg-gray-50 dark:bg-gray-800 
`;

const MenuList = tw.ul`
  space-y-2 font-medium mt-5
`;

const MenuButton = tw.button`
  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1 
  absolute top-5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white
`;
const SideMenu: React.FC<SideMenuProps> = ({ isopen, handleSideMenuClick }) => {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);
  const user = useRecoilValue(userStateSelector);

  return (
    <SideMenuContainer isopen={isopen ? 'true' : undefined}>
      <SideBar id="separator-sidebar" aria-label="Sidebar">
        <MenuButton onClick={handleSideMenuClick}>
          <FiX size={25} />
          <span className="sr-only">Close menu</span>
        </MenuButton>
        <Logo />
        <MenuList>
          {isLoggedIn ? (
            <UserProfile user={user} />
          ) : (
            <SideMenuitem name="로그인" to="/login" Icon={RiLoginBoxLine} />
          )}
          {menuItems.map((item) => (
            <SideMenuitem
              key={item.name}
              name={item.name}
              to={item.to || '/'}
              Icon={item.icon}
              subMenuItems={item.subMenuItems}
            />
          ))}
        </MenuList>
        <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
          <SideMenuitem name="통합검색" to="/books" Icon={FaSearch} />

          {!!isLoggedIn && (
            <>
              <SideMenuitem
                name="로그아웃"
                to="/logout"
                Icon={RiLogoutBoxRLine}
              />
              <SideMenuitem
                name="설정"
                to="/profile/setting"
                Icon={IoSettingsOutline}
              />
            </>
          )}
        </ul>
      </SideBar>
    </SideMenuContainer>
  );
};

export default SideMenu;
