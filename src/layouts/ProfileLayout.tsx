import BreadcurmbContiner from '@/components/BreadcrumbContainer';
import Footer from '@/components/shared/FooterWithNewsletter';
import Header from '@/components/shared/Header';
import { Separator } from '@radix-ui/react-separator';
import {
  ShoppingCart,
  Heart,
  Truck,
  Key,
  UserRound,
  LogOut,
} from 'lucide-react';
import { Link, Outlet } from 'react-router';

const ProfileLayout = () => {
  return (
    <main>
      <Header />
      <BreadcurmbContiner />
      <div className="mx-auto flex max-w-7xl">
        {/* Sidebar */}
        {/* Sidebar */}
        <div className="w-1/4 p-4">
          <nav className="space-y-4">
            <Link
              to="/profile/orders"
              className="flex cursor-pointer items-center gap-2 text-lg font-medium"
            >
              <ShoppingCart /> Orders
            </Link>
            <Link
              to="/profile/wishlist"
              className="flex cursor-pointer items-center gap-2 text-lg font-medium"
            >
              <Heart /> Wishlist
            </Link>
            <Link
              to="/profile/address"
              className="flex cursor-pointer items-center gap-2 text-lg font-medium"
            >
              <Truck /> Address
            </Link>
            <Link
              to="/profile/password"
              className="flex cursor-pointer items-center gap-2 text-lg font-medium"
            >
              <Key /> Password
            </Link>
            <Link
              to="/profile/details"
              className="flex cursor-pointer items-center gap-2 text-lg font-medium"
            >
              <UserRound /> Account Details
            </Link>
            <Link
              to="/logout"
              className="flex cursor-pointer items-center gap-2 text-lg font-medium text-red-500"
            >
              <LogOut /> Logout
            </Link>
          </nav>
        </div>

        {/* Separator */}
        <Separator
          orientation="vertical"
          className="mx-4 h-auto w-px bg-gray-300"
        />

        {/* Main Content */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProfileLayout;
