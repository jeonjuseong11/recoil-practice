import React from 'react';
import { NavLink } from 'react-router-dom';
import { User } from '../../recoil/auth/types';

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => (
  <li>
    <NavLink
      to="/profile"
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      <img
        src={user.userImg || ''}
        alt="userProfile"
        className="w-20 h-20 bg-gray-300 rounded-full shrink-0 mx-auto"
      />
      <span className="flex-1 ms-3 whitespace-nowrap">{user.username}</span>
      <span className="flex-grow whitespace-nowrap">
        님<br />
        안녕하세요!
      </span>
    </NavLink>
  </li>
);

export default UserProfile;
