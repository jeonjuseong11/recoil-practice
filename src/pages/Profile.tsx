import { NavLink, Outlet, useLocation } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import PencilIcon from '../icons/PencilIcon';
import ProfileCard from '../components/Profile/ProfileCard';
import OrderDetails from '../components/Profile/OrderDetails';
import MyReview from '../components/Profile/MyReview';
import { useState } from 'react';
import ProfileMenu from '../components/Profile/ProfileMenu';

const Profile = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8 xl:max-w-[72rem]">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-8">
          <ProfileCard />
          <div className="col-span-4 sm:col-span-8 sm:px-0 px-8">
            <ProfileMenu />
            <div className="bg-white shadow rounded-lg p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
