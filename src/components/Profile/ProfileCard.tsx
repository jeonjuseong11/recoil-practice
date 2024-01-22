import React from 'react';
import { User } from '../../recoil/auth/types';

interface ProfileCardProps {
  user: User;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <div className="col-span-4 md:col-span-4 md:px-0 px-8">
      <div className="bg-white shadow rounded-lg p-5">
        <div className="flex flex-col items-left gap-5 ">
          <img
            alt="userProfileImage"
            src={user.userImg?.toString()}
            className="w-48 h-48 bg-gray-300 rounded-full mb-4 shrink-0 mx-auto"
          />
          <div className="flex gap-2">
            <p className="text-xl font-bold">{user.username} </p>
            <p className="text-xl">
              {user.userRole !== null ? '관리자님 ' : '님 '}반갑습니다.
            </p>
          </div>
          <div>
            <p>관심분야</p>
            <p>FE</p>
          </div>
          <div>
            <p>이메일</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p>전화번호</p>
            <p>
              {user.userPhn !== null ? user.userPhn : '등록된 번호가 없습니다.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
