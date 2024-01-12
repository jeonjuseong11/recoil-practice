import { NavLink } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import tw from 'tailwind-styled-components';
import { isLoggedInSelector, userStateSelector } from '../recoil/auth';
import useAxios from '../hooks/useAxios';
import { instance } from '../api/apiClient';
import { logout } from '../api/apiRequests';
import Spinner from '../common/Spinner';

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
  transition duration-500
  hover:text-indigo-600  
  border-black
  hover:border-blue-700  
`;
const TopMenuSignupBtn = tw(NavLink)`
  bg-indigo-600 
  px-4 py-2 
  rounded   
  text-sm  
  transition duration-500
  text-white 
  hover:bg-indigo-500 
`;

const Header: React.FC = () => {
  const setUser = useSetRecoilState(userStateSelector);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInSelector);
  const { error, loading: logouting, sendRequest: logoutRequest } = useAxios();

  const handleLogout = async () => {
    await logoutRequest(
      logout(),
      () => {
        sessionStorage.clear();
        setUser({
          username: '',
          email: '',
        });
        delete instance.defaults.headers.common['Authorization'];
        setIsLoggedIn(false);
      },
      () => {
        console.error('Logout failed:', error);
      }
    );
  };

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
              로그아웃 {logouting ? <Spinner /> : <></>}
            </TopMenuSignupBtn>
          </>
        ) : (
          <>
            <TopMenuLoginBtn to={'/login'}>LOGIN</TopMenuLoginBtn>
            <TopMenuSignupBtn to={'/signup/1'}>SIGNUP</TopMenuSignupBtn>
          </>
        )}
      </TopMenuButtonGroup>
    </HeaderWrapper>
  );
};
export default Header;
