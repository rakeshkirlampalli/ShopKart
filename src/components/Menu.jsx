import React from "react";
import { data, subMenuData } from "../utils/menu_data";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <div className="container mx-auto  max-w-[1150px] hidden md:flex flex-wrap flex-col md:flex-row items-center font-poppins uppercase">
      <ul className="flex items-center gap-16 pl-10 mt-3 ml-8 font-bold text-white font-work-sans">
        {data.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {!!item?.subMenu ? (
                <li
                  className="relative flex items-center gap-2 cursor-pointer"
                  onMouseEnter={() => setShowCatMenu(true)}
                  onMouseLeave={() => setShowCatMenu(false)}
                >
                  {item.name}
                  <BsChevronDown size={14} />
                  {showCatMenu && (
                    <ul className=" absolute top-6 left-0 min-w-[250px] hover:font-normal gap-2 text-white border border-white font-normal  shadow-lg  p-2">
                      {subMenuData.map((subItem) => {
                        return (
                          <Link
                            key={subItem.id}
                            to={subItem.url}
                            onClick={() => setShowCatMenu(false)}
                          >
                            <li className="flex  items-center w-full justify-between h-12  px-3  hover:bg-black/[.03] rounded-md">
                              {subItem.name}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                <li className="cursor-pointer">
                  <Link to={item.url}>{item.name}</Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
