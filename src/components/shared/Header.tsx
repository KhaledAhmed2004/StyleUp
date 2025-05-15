import logo from '../../assets/logo.svg';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { CircleUserRound, Menu, Search, ShoppingCart, X } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Link, NavLink } from 'react-router';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="z-50 w-full">
      {/* Notifications bar */}
      <section className="flex h-[40px] items-center justify-center bg-neutral-black-b900 px-4 text-center text-sm text-neutral-white-w900">
        <p>
          Get 25% OFF on your first order.{' '}
          <span className="ml-2 cursor-pointer font-semibold underline">
            Order Now
          </span>
        </p>
      </section>

      {/* Main Header */}
      <nav className="mx-auto flex h-[84px] max-w-7xl items-center justify-between border-b px-4 pt-[20px] pb-[19px] md:px-6 lg:px-8">
        {/* Left Side - Logo and Navigation */}
        <div className="flex items-center gap-6 md:gap-16">
          {/* Logo */}
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Navigation Menu */}
          <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'font-semibold text-primary underline underline-offset-2'
                    : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                    <NavigationMenuContent className="!w-[160px]">
                      <ul className="flex flex-col gap-1 p-2">
                        <NavigationMenuLink asChild>
                          <Link to="/category/perfume">Perfume</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/category/trousers">Trousers</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/category/shoe">Shoe</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/category/handbag">Handbag</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/category/hat">Hat</Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link to="/category/thermos">Thermos</Link>
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'font-semibold text-primary' : ''
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'font-semibold text-primary' : ''
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Side - Search, Cart, Account */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search Box */}
          <div className="hidden h-[45px] w-[264px] items-center gap-2 rounded-md border bg-neutral-white-w900 px-4 md:flex">
            <Button
              className="!p-1 hover:bg-transparent focus:ring-0"
              variant="ghost"
            >
              <Search size={18} />
            </Button>
            <Input
              className="border-none !bg-white p-0 shadow-none outline-none focus:border-none focus:shadow-none focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:border-none focus-visible:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
              placeholder="Search products..."
            />
          </div>

          {/* Shopping Cart */}
          <Button
            className="!p-1"
            variant="ghost"
            size="icon"
            aria-label="Cart"
          >
            <ShoppingCart />
          </Button>

          {/* User Profile */}
          <Link to={'/profile/orders'}>
            <Button
              className="!p-1"
              variant="ghost"
              size="icon"
              aria-label="Profile"
            >
              <CircleUserRound />
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="animate-slide-down px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <NavLink to="/" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="flex flex-col gap-2">
              <span className="text-sm font-semibold">Categories</span>
              <ul className="ml-4 flex flex-col gap-2 text-sm">
                <li>
                  <NavLink to="/category/perfume" onClick={closeMobileMenu}>
                    Perfume
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/category/trousers" onClick={closeMobileMenu}>
                    Trousers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/category/shoe" onClick={closeMobileMenu}>
                    Shoe
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/category/handbag" onClick={closeMobileMenu}>
                    Handbag
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/category/hat" onClick={closeMobileMenu}>
                    Hat
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/category/thermos" onClick={closeMobileMenu}>
                    Thermos
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMobileMenu}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMobileMenu}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
