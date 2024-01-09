import { Outlet } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import Header from './Header';
import Footer from './Footer';

const PageContainer = tw.div`
  flex flex-col min-h-screen
`;

const MainContent = tw.main`
  flex-grow
`;

const Layout: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      {/* <Footer /> */}
    </PageContainer>
  );
};
export default Layout;
