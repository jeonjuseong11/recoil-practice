import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import tw from 'tailwind-styled-components';
import { isLoggedInSelector, userStateSelector } from '../recoil/auth';
import { logout } from '../api/authServices';
import { useEffect } from 'react';

const HeaderWrapper = tw.header`  
  flex 
  justify-between 
  h-16 
  px-10 
  shadow 
  items-center
`;
const TopMenuSection = tw.section`
  flex 
  items-center 
  space-x-8
`;
const TopMenuButtonGroup = tw.section`
  flex 
  space-x-4 
  items-center
`;
const TopMenuWrapper = tw.nav`  
  hidden 
  md:flex 
  justify-around 
  space-x-4
`;
const TopMenuItem = tw(NavLink)`
  hover:text-indigo-600 
  text-gray-700
  hover:border-gray-400
`;

const TopMenuLoginBtn = tw(NavLink)`
  text-gray-800 
  px-4 py-2
  text-sm
  rounded
  transition-transform duration-200

  hover:text-white 
  hover:bg-blue-700  hover:scale-105
`;
const TopMenuSignupBtn = tw(NavLink)`
  bg-indigo-600 
  px-4 py-2 
  rounded   
  text-sm  
  transition-transform duration-200
  text-white 
  hover:bg-indigo-500 
  hover:scale-105
`;

const Header: React.FC = () => {
  const [user, setUser] = useRecoilState(userStateSelector);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInSelector);

  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);
  const handleLogout = async () => {
    try {
      await logout();
      setUser({
        emp_NM: '',
        password: '',
        emp_ID: '',
      });

      setIsLoggedIn(false);
      sessionStorage.removeItem('user');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <HeaderWrapper>
      <TopMenuSection>
        <NavLink to={'/'}>
          <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">
            Standard Networks
          </h1>
        </NavLink>
        <TopMenuWrapper>
          <TopMenuItem to={'/'}>홈페이지</TopMenuItem>
          <TopMenuItem to={'/'}>About</TopMenuItem>
        </TopMenuWrapper>
      </TopMenuSection>
      <TopMenuButtonGroup>
        {isLoggedIn ? (
          <>
            <TopMenuSignupBtn to="/login" onClick={handleLogout}>
              로그아웃
            </TopMenuSignupBtn>
          </>
        ) : (
          <>
            <TopMenuLoginBtn to={'/login'}>LOGIN</TopMenuLoginBtn>
            <TopMenuSignupBtn to={'/signup'}>SIGNUP</TopMenuSignupBtn>
          </>
        )}
      </TopMenuButtonGroup>
    </HeaderWrapper>
  );
};
export default Header;
