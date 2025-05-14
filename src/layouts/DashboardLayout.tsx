import { NavLink, Outlet, useLocation } from 'react-router';
import {
  HomeIcon,
  BoxIcon,
  ClipboardListIcon,
  UsersIcon,
  StarIcon,
  SettingsIcon,
} from 'lucide-react';
import logo from '../assets/Vector.svg';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';

const menuItems = [
  { name: 'Dashboard', path: '/dashboard', icon: HomeIcon },
  { name: 'Products', path: '/dashboard/product', icon: BoxIcon },
  { name: 'Orders', path: '/dashboard/orders', icon: ClipboardListIcon },
  { name: 'Customers', path: '/dashboard/customer', icon: UsersIcon },
  { name: 'Reviews', path: '/dashboard/reviews', icon: StarIcon },
  { name: 'Settings', path: '/dashboard/settings', icon: SettingsIcon },
];

export default function DashboardLayout() {
  const location = useLocation();

  // Split the path into parts
  const pathParts = location.pathname.split('/').filter(Boolean);

  return (
    <div className="flex min-h-screen bg-neutral-white-w900">
      <nav className="flex w-64 flex-col">
        <div className="flex h-[72px] items-center justify-center">
          <div className="flex h-full w-28 items-center gap-3 p-4">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            <h2 className="text-xl font-extrabold">Admin</h2>
          </div>
        </div>

        <ul className="flex flex-1 flex-col space-y-2 p-4">
          {menuItems.map(({ name, path, icon: Icon }) => (
            <li key={name}>
              <NavLink
                to={path}
                end={path === '/dashboard'}
                className={({ isActive }) =>
                  `flex items-center rounded p-2 transition-colors ${
                    isActive
                      ? 'bg-neutral-white-w100 text-gray-900'
                      : 'text-gray-800 hover:bg-neutral-white-w100 hover:font-semibold'
                  }`
                }
              >
                <Icon size={20} className="mr-3 text-gray-700" />
                <span className="font-medium">{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <main className="flex-1 bg-neutral-white-w100 px-6">
        {/* Top Bar: Breadcrumb + Logout Button */}
        <div className="flex h-[72px] items-center justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              {pathParts.map((part, index) => {
                const href = `/${pathParts.slice(0, index + 1).join('/')}`;
                const isLast = index === pathParts.length - 1;
                const label = part.charAt(0).toUpperCase() + part.slice(1);

                return (
                  <div key={href} className="flex items-center">
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage>{label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>

          {/* Logout Button */}
          <Button>Log Out</Button>
        </div>

        {/* Page Content */}
        <Outlet />
      </main>
    </div>
  );
}