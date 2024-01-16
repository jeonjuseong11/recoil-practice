import { NavLink } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import tw from 'tailwind-styled-components';
import { isLoggedInSelector, userStateSelector } from '../recoil/auth';
import useAxios from '../hooks/useAxios';
import { instance } from '../api/apiClient';
import { logout } from '../api';
import Spinner from '../common/Spinner';
import MenuIcon from '../icons/MenuIcon';
import Logo from '../common/Logo';
import CartIcon from '../icons/CardIcon';

const HeaderWrapper = tw.header`  
  flex items-center justify-center p-4 bg-white 
`;
const TopMenuSection = tw.section`
  flex 
  items-center 
  space-x-8
  w-96
  justify-center
`;
const TopMenuButtonGroup = tw.section`
  flex space-x-4
  w-96
  justify-end
  items-center
`;

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
    <>
      <HeaderWrapper>
        <div className="w-96">
          <MenuIcon />
        </div>
        <TopMenuSection>
          <Logo />
        </TopMenuSection>

        <TopMenuButtonGroup>
          <CartIcon />
          {isLoggedIn ? (
            <>
              <TopMenuLoginBtn to={'/profile'}>마이페이지</TopMenuLoginBtn>
              <TopMenuSignupBtn to="/login" onClick={handleLogout}>
                로그아웃 {logouting ? <Spinner /> : <></>}
              </TopMenuSignupBtn>
            </>
          ) : (
            <>
              <TopMenuLoginBtn to={'/login'}>로그인</TopMenuLoginBtn>
              <TopMenuSignupBtn to={'/signup/1'}>회원가입</TopMenuSignupBtn>
            </>
          )}
        </TopMenuButtonGroup>
      </HeaderWrapper>
      <div className="flex justify-center gap-5 p-3">
        <h1>홈</h1>
        <h1>카테고리</h1>
        <h1>추천</h1>
        <h1>랭킹</h1>
      </div>
    </>
  );
};
export default Header;
