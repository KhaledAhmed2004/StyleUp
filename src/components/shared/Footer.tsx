import logoImg from '../../assets/Vector.svg';
import Mastercard from '../../assets/Mastercard.svg';
import visa from '../../assets/Visa.svg';
import amex from '../../assets/Amex.svg';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-neutral-white-w100">
      <footer className="mx-auto max-w-7xl px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap md:items-start md:justify-between">
          {/* Logo and Socials */}
          <div className="w-full sm:w-[300px]">
            <div className="flex items-center gap-[16px]">
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
            <div className="mt-[32px] flex gap-[24px] text-neutral-black-b500">
              <FaFacebook className="cursor-pointer text-2xl" />
              <FaInstagram className="cursor-pointer text-2xl" />
              <FaYoutube className="cursor-pointer text-2xl" />
            </div>
          </div>

          {/* Support Section */}
          <div className="w-full sm:w-auto">
            <h4 className="mb-[20px] body-medium text-neutral-black-b300">
              SUPPORT
            </h4>
            <div className="space-y-[12px] body-medium text-neutral-black-b500">
              <p>FAQ</p>
              <p>Terms of use</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          {/* Company Section */}
          <div className="w-full sm:w-auto">
            <h4 className="mb-[20px] body-medium text-neutral-black-b300">
              COMPANY
            </h4>
            <div className="space-y-[12px] body-medium text-neutral-black-b500">
              <p>About us</p>
              <p>Contact</p>
              <p>Careers</p>
            </div>
          </div>

          {/* Shop Section */}
          <div className="w-full sm:w-auto">
            <h4 className="mb-[20px] body-medium text-neutral-black-b300">
              SHOP
            </h4>
            <div className="space-y-[12px] body-medium text-neutral-black-b500">
              <p>My Account</p>
              <p>Checkout</p>
              <p>Cart</p>
            </div>
          </div>

          {/* Payment Section */}
          <div className="w-full sm:w-auto">
            <h2 className="body-medium text-neutral-black-b300">
              ACCEPTED PAYMENTS
            </h2>
            <div className="mt-[20px] flex items-center gap-4">
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
        <div className="border-t pt-6 pb-4 text-center body-regular text-neutral-black-b500">
          <p>© 2025 Khaled Ahmed Nayeem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
