import React from "react";
import { data, subMenuData } from "../utils/menu_data";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

const MenuMobile = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="flex flex-col bg-black text-white md:hidden w-auto absolute z-auto top-[50px] left-0 w-full h-[calc(100vh-50px)]   font-bold">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="relative flex flex-col px-10 py-4 cursor-pointer "
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>
                {showCatMenu && (
                  <ul className=" bg-black/[.05] -mx-5 -mb-4 mt-4">
                    {subMenuData.map((subItem) => {
                      return (
                        <Link
                          key={subItem.id}
                          href="/"
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="flex justify-between px-8 py-4 border-t">
                            {subItem.name}
                            <span className="text-sm opacity-50">1000</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="px-10 py-4 ">
                <Link href={item.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
