import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
const Nav = () => {
  return (
    <header className="text-[#626262] w-auto body-font bg-[#1A1A1A]">
      <div className="md:w-[1150px]  md:max-h-[40px] max-h-[25px] p-1 py-5 mx-auto flex items-center justify-between bg-[#1A1A1A]">
        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <TbTruckDelivery className="md:w-6 md:h-6 h-5 w-5 ml-1 text-[#626262]" />
          <p className=" md:mr-2 mr-0 text-md  ml-1 text-[#626262]">Free Delivery</p>
        </a>
        <span className="border-l-2 border-[#626262] h-full min-h-[20px]"></span>
       <p className="text-center sm:text-left md:text-md text-[#626262]  sm:mb-4 sm:pl-2 sm:py-2 md:mt-4">
        Return Policy
       </p>
        <div className="flex justify-center md:mt-1 mt-1 sm:ml-auto sm:mt-0 sm:justify-start">
          <div className="flex items-center justify-center gap-3 md:gap-10 ">
            <button className="text-md  ">Login</button>
            <a href="https://www.studiographene.com/">
              <p className="hidden mr-3 md:block text-md">Follow US</p>
            </a>
          </div>
          <a
            className="text-[#626262]"
            href="https://www.facebook.com/uniworksdesignsdelhi/"
          >
            <FaFacebookF className="md:w-4 md:h-4 w-3 h-3 mt-1" />
          </a>
          <a
            className="ml-3 text-[#626262]"
            href="https://www.linkedin.com/company/studio-graphene/"
          >
            <FaLinkedinIn className="md:w-4 md:h-5 mt-1 w-3 h-4" />
          </a>
          <a
            className="ml-3 text-[#626262]"
            href="https://twitter.com/studiographene"
          >
            <FaTwitter className="w-3 h-4 md:w-4 mt-1 md:h-5 mr-1" />
          </a>
          <a
            className="ml-3 text-[#626262] mr-2 "
            href="https://www.instagram.com/studiographene/?hl=en"
          >
            <FaInstagram className="w-3 h-4 md:w-4 md:h-5 mt-1  transition-transform duration-300 transform hover:scale-110" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
