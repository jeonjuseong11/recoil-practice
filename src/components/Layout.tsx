import { Outlet } from 'react-router-dom';
import NavMenu from './NavMenu';

const Layout: React.FC = () => {
  return (
    <div>
      <header>
        <h1>레이아웃 입니다</h1>
        <NavMenu />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>?푸터</footer>
    </div>
  );
};
export default Layout;
