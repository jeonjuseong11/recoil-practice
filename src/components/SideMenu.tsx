import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart, FiX } from 'react-icons/fi';
import { RiLoginBoxLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { BsFire } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';
import { IoPricetagOutline, IoSettingsOutline } from 'react-icons/io5';

import { useRecoilValue } from 'recoil';
import { isLoggedInSelector, userStateSelector } from '../recoil/auth';

import Logo from '../common/Logo';

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
  fixed top-0 left-0 z-40 w-full h-screen transition-transform -translate-x-full translate-x-0 
`;

const MenuButton = tw.button`
  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 
  absolute top-5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white
`;

const MenuList = tw.ul`
  space-y-2 font-medium mt-5

`;
const SideMenu: React.FC<SideMenuProps> = ({ isopen, handleSideMenuClick }) => {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);
  const user = useRecoilValue(userStateSelector);
  const [showSubMenu, setShowSubMenu] = useState(false); // showSubMenu 상태 추가

  return (
    <SideMenuContainer isopen={isopen ? 'true' : undefined}>
      <SideBar id="separator-sidebar" aria-label="Sidebar">
        <MenuButton onClick={handleSideMenuClick}>
          <FiX />
          <span className="sr-only">Close menu</span>
        </MenuButton>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Logo />
          <MenuList>
            {/* 사용자 로그인 여부에 따라 메뉴 항목을 렌더링 */}
            {isLoggedIn ? (
              <li>
                <a
                  href="/profile"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <img
                    src="userImg"
                    alt="userProfile"
                    className="w-20 h-20 bg-gray-300 rounded-full shrink-0 mx-auto"
                  />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    {user.username}
                  </span>
                  <span className="flex-grow whitespace-nowrap">
                    님<br />
                    안녕하세요!
                  </span>
                </a>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <RiLoginBoxLine className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="flex-1 ms-3 whitespace-nowrap">로그인</span>
                </NavLink>
              </li>
            )}
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                onClick={() => setShowSubMenu(!showSubMenu)}
              >
                <IoPricetagOutline />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  카테고리
                </span>
              </button>
              <ul
                id="dropdown-example"
                className={`${showSubMenu ? 'block' : 'hidden'} py-2 space-y-2`}
              >
                <li>
                  <a
                    href="/products"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover-bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/billing"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover-bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="/invoice"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover-bg-gray-100 dark:text-white dark:hover-bg-gray-700"
                  >
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="/cart"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FiShoppingCart className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">장바구니</span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </a>
            </li>

            <li>
              <a
                href="/books/best"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BsFire className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  베스트 셀러
                </span>
              </a>
            </li>
          </MenuList>
          <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
            <li>
              <a
                href="/books"
                className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <FaSearch
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                />
                <span className="ms-3">통합검색</span>
              </a>
            </li>

            {!!isLoggedIn && (
              <>
                <li>
                  <a
                    href="/123"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <RiLogoutBoxRLine className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      로그아웃
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="profile/setting"
                    className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                  >
                    <IoSettingsOutline />
                    <span className="ms-3">설정</span>
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </SideBar>
      {/* 일단 있을 메뉴들 나열 후 로그인 여부에 따라 렌더링 변경 예정 */}
      <p>홈</p>
      <p>카테고리</p>
      <p>추천</p>
      <p>랭킹</p>
      <p>신규</p>
      <p>마이페이지</p>
      <p>로그아웃</p>
      <p>로그인</p>
      <p>장바구니</p>
    </SideMenuContainer>
  );
};

export default SideMenu;
