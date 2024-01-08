import { Outlet } from 'react-router-dom';
import NavMenu from './NavMenu';
import Footer from './Footer';
import tw from 'tailwind-styled-components';

const PageContainer = tw.div`
  flex flex-col min-h-screen
`;

const MainContent = tw.main`
  flex-grow
`;

const Layout: React.FC = () => {
  return (
    <PageContainer>
      <NavMenu />
      <MainContent>
        <Outlet />
      </MainContent>
      {/* <Footer /> */}
    </PageContainer>
  );
};
export default Layout;
