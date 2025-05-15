import logoImg from '../../assets/Vector.svg';
import Mastercard from '../../assets/Mastercard.svg';
import visa from '../../assets/Visa.svg';
import amex from '../../assets/Amex.svg';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const FooterWithNewsletter = () => {
  return (
    <div>
      {/* newsletter */}
      <section className="mt-[176px] h-auto bg-neutral-white-w100 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 py-[59px] md:flex-row md:gap-0">
          <div className="text-center md:text-left">
            {/* Title */}
            <h3 className="mb-6 heading-h3-normal-bold text-neutral-black-b900">
              Join Our Newsletter
            </h3>
            {/* Description */}
            <p className="mx-auto max-w-md body-regular text-neutral-black-b500 md:mx-0">
              We love to surprise our subscribers with occasional gifts.
            </p>
          </div>

          <div className="w-full max-w-md">
            <form className="flex flex-col items-center gap-4 sm:flex-row">
              <Input
                className="w-full rounded-[6px] !bg-neutral-white-w100 px-[15px] py-[10px]"
                type="email"
                placeholder="Your email address"
              />
              <Button
                className="w-full px-[24px] py-[12px] body-medium text-[12px] sm:w-auto"
                type="submit"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex h-auto w-full flex-col items-start justify-between gap-8 py-10 sm:flex-row sm:flex-wrap">
          {/* Logo and Socials */}
          <div className="flex w-full max-w-[272px] flex-shrink-0 flex-col sm:w-auto">
            <div className="flex items-center gap-4">
              <img
                src={logoImg}
                alt="Logo"
                className="rounded-[6px] border-[2px] border-neutral-black-b100 px-[12px] py-[6px]"
              />
              <h2 className="text-[20px] font-extrabold">StyleUp</h2>
            </div>
            <p className="mt-4 body-regular text-neutral-black-b500">
              DevCut is a YouTube channel for practical project-based learning.
            </p>
            <div className="mt-8 flex gap-6 text-neutral-black-b500">
              <FaFacebook className="cursor-pointer text-2xl" />
              <FaInstagram className="cursor-pointer text-2xl" />
              <FaYoutube className="cursor-pointer text-2xl" />
            </div>
          </div>

          {/* Support Section */}
          <div className="w-full sm:w-auto">
            <h4 className="mb-10 body-medium text-neutral-black-b300">
              SUPPORT
            </h4>
            <div className="space-y-4 body-medium text-neutral-black-b500">
              <p>FAQ</p>
              <p>Terms of use</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          {/* Company Section */}
          <div className="w-full sm:w-auto">
            <h4 className="mb-10 body-medium text-neutral-black-b300">
              COMPANY
            </h4>
            <div className="space-y-4 body-medium text-neutral-black-b500">
              <p>About us</p>
              <p>Contact</p>
              <p>Careers</p>
            </div>
          </div>

          {/* Shop Section */}
          <div className="w-full sm:w-auto">
            <h4 className="mb-10 body-medium text-neutral-black-b300">SHOP</h4>
            <div className="space-y-4 body-medium text-neutral-black-b500">
              <p>My Account</p>
              <p>Checkout</p>
              <p>Cart</p>
            </div>
          </div>

          {/* Payment Section */}
          <div className="h-auto w-full sm:w-auto">
            <h2 className="body-medium text-neutral-black-b300">
              ACCEPTED PAYMENTS
            </h2>
            <div className="mt-10 flex items-center gap-4">
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
        <div className="flex w-full items-center justify-center border-t pt-6 pb-4 text-center body-regular text-neutral-black-b500">
          <p>© 2025 Khaled Ahmed Nayeem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FooterWithNewsletter;
