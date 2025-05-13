import BreadcurmbContiner from '@/components/BreadcrumbContainer';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <main>
      <Header />
      <BreadcurmbContiner />
      <Outlet />
      <Footer />
    </main>
  );
};

export default AuthLayout;
