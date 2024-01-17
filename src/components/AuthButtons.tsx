import React from 'react';
import { NavLink } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import Spinner from '../common/Spinner';

const TopMenuLoginBtn = tw(NavLink)`
  text-gray-800 
  px-4 py-2
  text-base
  rounded-full
  border
  border-transparent
  hover:text-indigo-600  
  hover:border-indigo-600     
  transition-all duration-300
`;
const TopMenuSignupBtn = tw(NavLink)`
  bg-indigo-600 
  px-4 py-2 
  rounded-full  
  text-base  
  text-white 
  hover:bg-indigo-500     
  transition-all duration-300

`;

interface AuthButtonsProps {
  isLoggedIn: boolean;
  onLogout: () => Promise<void>;
  loggingOut: boolean;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({
  isLoggedIn,
  onLogout,
  loggingOut,
}) => {
  return (
    <>
      {isLoggedIn ? (
        <>
          <TopMenuLoginBtn to={'/profile'}>마이페이지</TopMenuLoginBtn>
          <TopMenuSignupBtn to="/login" onClick={onLogout}>
            로그아웃 {loggingOut ? <Spinner /> : null}
          </TopMenuSignupBtn>
        </>
      ) : (
        <>
          <TopMenuLoginBtn to={'/login'}>로그인</TopMenuLoginBtn>
          <TopMenuSignupBtn to={'/signup/1'}>회원가입</TopMenuSignupBtn>
        </>
      )}
    </>
  );
};

export default AuthButtons;
