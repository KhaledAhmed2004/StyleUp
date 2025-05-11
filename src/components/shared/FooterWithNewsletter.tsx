import { Facebook, Instagram, Youtube } from 'lucide-react';
import logoImg from '../../assets/Vector.svg';
import Mastercard from '../../assets/Mastercard.svg';
import visa from '../../assets/Visa.svg';
import amex from '../../assets/Amex.svg';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <div>
      <section className="mt-[176px] h-[200px] bg-neutral-white-w100">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-[59px]">
          <div>
            {/* Title */}
            <h2 className="mb-[24px] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Join Our Newsletter{' '}
            </h2>
            {/* Description */}
            <p className="text-[14px] leading-relaxed text-gray-500 sm:text-lg dark:text-gray-400">
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>

          <div>
            <div className="flex w-full items-center space-x-2">
              <Input
                className="w-[320px] px-[15px] py-[10px]"
                type="email"
                placeholder="Your email address"
              />
              <Button className="px-[24px] py-[12px] text-[12px]" type="submit">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      <footer className="mx-auto max-w-7xl px-4">
        {/* Main Footer Content */}
        <div className="flex h-[350px] w-full flex-wrap items-center justify-between gap-8 py-10">
          {/* Logo and Socials */}
          <div>
            <div className="flex items-center gap-[16px]">
              <img
                src={logoImg}
                alt="Logo"
                className="rounded-[6px] border px-[6px] py-[2px]"
              />
              <h2 className="text-[20px] font-extrabold">StyleUp</h2>
            </div>
            <p className="mt-4 w-[272px] text-sm text-gray-600">
              DevCut is a YouTube channel for practical project-based learning.
            </p>
            <div className="mt-[32px] flex gap-[24px] text-gray-700">
              <Facebook className="cursor-pointer" />
              <Instagram className="cursor-pointer" />
              <Youtube className="cursor-pointer" />
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="mb-[40px] font-semibold">SUPPORT</h4>
            <div className="space-y-[16px] text-gray-600">
              <p>FAQ</p>
              <p>Terms of use</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="mb-[40px] font-semibold">COMPANY</h4>
            <div className="space-y-[16px] text-gray-600">
              <p>About us</p>
              <p>Contact</p>
              <p>Careers</p>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h4 className="mb-[40px] font-semibold">SHOP</h4>
            <div className="space-y-[16px] text-gray-600">
              <p>My Account</p>
              <p>Checkout</p>
              <p>Cart</p>
            </div>
          </div>

          {/* Payment Section */}
          <div className="h-[168px]">
            <h2 className="font-semibold">ACCEPTED PAYMENTS</h2>
            <div className="mt-[40px] flex items-center gap-4">
              <img
                src={Mastercard}
                alt="Mastercard"
                className="h-6 opacity-70 grayscale"
              />
              <img src={amex} alt="Amex" className="h-6 opacity-70 grayscale" />
              <img src={visa} alt="Visa" className="h-6 opacity-70 grayscale" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex w-full items-center justify-center border-t pt-6 pb-4 text-center text-sm text-gray-500">
          <p>© 2025 Khaled Ahmed Nayeem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
