import { NavLink } from 'react-router-dom';

const NavMenu: React.FC = () => {
  return (
    <nav className="top-menu">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
      <NavLink to={'/signup'}>Sign up</NavLink>
    </nav>
  );
};
export default NavMenu;
