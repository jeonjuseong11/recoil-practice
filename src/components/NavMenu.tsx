import { NavLink } from 'react-router-dom';
import tw from 'tailwind-styled-components';

const TopMenuWrapper = tw.nav`  
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
const TopMenuItem = tw(NavLink)`
  hover:text-indigo-600 
  text-gray-700
`;
const TopMenuLoginBtn = tw(NavLink)`
  text-gray-800 
  text-sm
`;
const TopMenuSignupBtn = tw(NavLink)`
  bg-indigo-600 
  px-4 
  py-2 
  rounded 
  text-white 
  hover:bg-indigo-500 
  text-sm
`;

const NavMenu: React.FC = () => {
  return (
    <header>
      <TopMenuWrapper>
        <TopMenuSection>
          <NavLink to={'/'}>
            <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">
              Standard Networks
            </h1>
          </NavLink>

          <div className="hidden md:flex justify-around space-x-4">
            <TopMenuItem to={'/'}>홈페이지</TopMenuItem>
            <TopMenuItem to={'/'}>About</TopMenuItem>
          </div>
        </TopMenuSection>
        <TopMenuButtonGroup>
          <TopMenuLoginBtn to={'/login'}>LOGIN</TopMenuLoginBtn>
          <TopMenuSignupBtn to={'/signup'}>SIGNUP</TopMenuSignupBtn>
        </TopMenuButtonGroup>
      </TopMenuWrapper>
    </header>
  );
};
export default NavMenu;
