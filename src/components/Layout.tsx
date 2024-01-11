import { Outlet } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import Header from './Header';
import Footer from './Footer';

const LayoutWrapper = tw.div`
  flex flex-col min-h-screen
`;

const MainContent = tw.main`
  flex-grow
`;

const Layout: React.FC = () => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      {/* <Footer /> */}
    </LayoutWrapper>
  );
};
export default Layout;
