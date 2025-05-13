import { Outlet } from 'react-router';
import { Separator } from '@radix-ui/react-separator';

// Internal Imports
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import BreadcrumbContainer from '@/components/BreadcrumbContainer';
import ProfileSidebar from '@/components/ProfileSidebar'; // Import the new ProfileSidebar

const ProfileLayout = () => {
  return (
    <main>
      <Header />
      <BreadcrumbContainer />

      <div className="mx-auto flex max-w-7xl py-[100px]">
        {/* Sidebar Navigation */}
        <ProfileSidebar />

        {/* Separator */}
        <Separator
          orientation="vertical"
          className="mx-4 h-auto w-px bg-gray-300"
        />

        {/* Main Content */}
        <section className="flex-1 pl-[48px]">
          <Outlet />
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default ProfileLayout;
