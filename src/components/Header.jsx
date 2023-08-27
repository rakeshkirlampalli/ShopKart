import React, { useState } from "react";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import { SlMenu } from "react-icons/sl";
import Rectangle from "../assets/images/Rectangle.png";
import Star1 from "../assets/images/Star 1.png";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
const Header = () => {
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className="text-gray-600 body-font w-auto h-auto bg-[#1A1A1A] relative z-[1000]"
      style={{ backgroundImage: `url(${Rectangle})` }}
    >
      <div className="max-w-[1150px] mx-auto flex flex-wrap flex-col md:flex-row md:items-center font-poppins">
        <a className="flex items-center justify-between mb-1 font-medium text-gray-900 title-font md:mb-0">
          <span className=" md:ml-1 ml-3  text-3xl md:text-4xl text-white font-extralight font-poppins">
            ShopKart
          </span>
          {/* <SlMenu className="w-6 h-6 mr-3 text-white cursor-pointer md:hidden" /> */}
          <div className=" text-white w-12 h-12 mr-1 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <SlMenu
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </a>
        <nav className="flex-wrap items-center justify-center hidden text-base md:flex md:ml-auto ">
          <p className="mr-5 font-bold text-white hover:text-gray-900 font-work-sans">
            WISHLIST (0)
          </p>
          <p className="mr-5 font-bold text-white hover:text-gray-900 font-work-sans">
            Bag (0)
          </p>
        </nav>
      </div>
      <hr className="w-11/12 mt-0 md:mt-1 md:max-w-[1150px] mx-auto border-t border-[#FFFFFF]" />
      <img
        src={Star1}
        className="w-6 bg-transparent hidden md:block absolute top-[32px] left-[360px]"
        alt="hj"
      />
      <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
      {mobileMenu && (
        <MenuMobile
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          setMobileMenu={setMobileMenu}
        />
      )}
    </header>
  );
};

export default Header;
