import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStateSelector } from '../recoil/auth';
import ProfileCard from '../components/Profile/ProfileCard';
import ProfileMenu from '../components/Profile/ProfileMenu';
import useAuth from '../hooks/useAuth';

const Profile = () => {
  const { handleLoadProfile, loading } = useAuth();
  const user = useRecoilValue(userStateSelector);

  useEffect(() => {
    if (user && user.email && !user.userRole) {
      handleLoadProfile(user.email);
    }
  }, [handleLoadProfile, user]);
  return (
    <div className="bg-gray-100">
      {loading ? (
        <>로딩중</>
      ) : (
        <div className="container mx-auto sm:px-0 md:px-8 lg:px-0 py-8 md:max-w-[72rem]">
          <div className="grid grid-cols-4 md:grid-cols-12 gap-8">
            <ProfileCard user={user} />
            <div className="col-span-4 md:col-span-8 md:px-0 px-8">
              <ProfileMenu />
              <div className="bg-white shadow rounded-lg p-6">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
