// External Imports
import { NavLink } from 'react-router';
import {
  ShoppingCart,
  Heart,
  Truck,
  Key,
  UserRound,
  LogOut,
} from 'lucide-react';

// Define the navigation items
const sidebarLinks = [
  { to: '/profile/orders', label: 'Orders', icon: ShoppingCart },
  { to: '/profile/wishlist', label: 'Wishlist', icon: Heart },
  { to: '/profile/address', label: 'Address', icon: Truck },
  { to: '/profile/password', label: 'Password', icon: Key },
  { to: '/profile/details', label: 'Account Details', icon: UserRound },
  { to: '/logout', label: 'Logout', icon: LogOut, isLogout: true },
];

const ProfileSidebar = () => {
  return (
    <aside className="w-1/4 p-4">
      <nav className="space-y-4">
        {sidebarLinks.map(({ to, label, icon: Icon, isLogout }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex w-[220px] items-center gap-[10px] px-[24px] py-[8px] body-medium text-lg font-medium transition-all ${
                isLogout
                  ? 'text-red-500 hover:text-red-600'
                  : isActive
                    ? 'rounded bg-gray-100 p-2 font-semibold text-primary'
                    : 'text-gray-700 hover:text-primary'
              }`
            }
            aria-label={label}
          >
            <Icon size={20} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default ProfileSidebar;
