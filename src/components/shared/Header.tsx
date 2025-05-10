import logo from '../../assets/logo.svg';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { CircleUserRound, Search, ShoppingCart } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';

const Header = () => {
  return (
    <header className="z-50">
      {/* Notifications bar */}
      <section className="flex h-[40px] items-center justify-center bg-neutral-black-b900 text-neutral-white-w900">
        <p>
          Get 25% OFF on your first order.
          <span className="ml-[8.5px]">Order Now</span>
        </p>
      </section>

      {/* Main Header */}
      <nav className="border-b mx-auto flex h-[84px] max-w-7xl items-center justify-between pt-[20px] pb-[19px]">
        {/* left */}
        <div className="flex items-center gap-[103px]">
          {/* Logo */}

          <div>
            <img src={logo} alt="logo" />
          </div>
          {/* Navigation Menu */}
          <div>
            <ul className="flex items-center gap-[32px]">
              <li>Home</li>
              <li>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[140px]">
                        <NavigationMenuLink>Perfume</NavigationMenuLink>
                        <NavigationMenuLink>Trousers</NavigationMenuLink>
                        <NavigationMenuLink>Shoe</NavigationMenuLink>
                        <NavigationMenuLink>Handbag</NavigationMenuLink>
                        <NavigationMenuLink>Hat</NavigationMenuLink>
                        <NavigationMenuLink>Thermos</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* right */}
        <div className="flex items-center gap-[32px]">
          {/* Search & Cart & Account */}
          <div className="flex h-[45px] w-[264px] items-center gap-[8px] rounded-[6px] border bg-neutral-white-w900 px-[15px] py-[10px]">
            <Button
              className="!p-0.5 hover:bg-transparent focus:ring-0 focus-visible:ring-0"
              variant="ghost"
            >
              <Search />
            </Button>
            <Input
              className="border-none p-0 shadow-none outline-none focus:border-none focus:shadow-none focus:ring-0 focus:ring-offset-0 focus:outline-none focus-visible:border-none focus-visible:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
              placeholder="Search products"
            />
          </div>
          <div>
            <Button className="!p-1" variant={'ghost'} size={'icon'}>
              <ShoppingCart />
            </Button>
          </div>
          <div>
            <Button className="!p-1" variant={'ghost'} size={'icon'}>
              <CircleUserRound />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
