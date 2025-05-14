import FooterWithNewsletter from '@/components/shared/FooterWithNewsletter';
import Header from '@/components/shared/Header';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <FooterWithNewsletter />
    </main>
  );
};

export default MainLayout;
