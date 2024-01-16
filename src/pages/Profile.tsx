import { Outlet } from 'react-router-dom';
import ProfileCard from '../components/Profile/ProfileCard';

import ProfileMenu from '../components/Profile/ProfileMenu';

const Profile = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8 lg:max-w-[72rem]">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-8">
          <ProfileCard />
          <div className="col-span-4 md:col-span-8 md:px-0 px-8">
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
