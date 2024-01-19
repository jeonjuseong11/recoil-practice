import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PencilIcon from '../../icons/PencilIcon';
import tw from 'tailwind-styled-components';

const ProfileMenuItem = tw(NavLink)`
  text-gray-700
  p-3
  hover:text-indigo-600 
  border-b-2 border-transparent
  hover:border-indigo-600 
  transition-all duration-500
`;

const ProfileMenu = () => {
  const location = useLocation();
  return (
    <div className="flex justify-between mb-5">
      <div className="flex gap-5">
        <ProfileMenuItem
          to="/profile"
          className={
            location.pathname === '/profile'
              ? 'text-indigo-600 border-indigo-600'
              : ''
          }
        >
          주문/배송 목록
        </ProfileMenuItem>
        <ProfileMenuItem
          to="/profile/setting"
          className={
            location.pathname === '/profile/setting'
              ? 'text-indigo-600 border-indigo-600'
              : ''
          }
        >
          설정
        </ProfileMenuItem>
      </div>
      <div className="flex">
        <a
          href="#"
          className="bg-gray-200 hover:opacity-75 text-gray-700 py-2 px-4 rounded flex items-center duration-200 gap-2 w-full"
        >
          <PencilIcon /> 내 정보 수정
        </a>
      </div>
    </div>
  );
};
export default ProfileMenu;
