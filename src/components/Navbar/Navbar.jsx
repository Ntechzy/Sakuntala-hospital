import { useState } from "react";
import { navbarData } from "./NavbarData";
import { Link } from "react-router-dom";
import {IoMdArrowDropdownCircle} from "react-icons/io";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpened, setIsOpened] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false); // Track open submenu

  return (
    <nav className="flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex flex-row items-center gap-2">
        <div className="flex-shrink-0">
          <img src="/assets/logo.png" alt="Logo" className="h-12 w-auto" />
        </div>
        <div className="text-[#A83679] md:text-2xl font-bold">
          Shakuntala IVF Centre
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        className="bg-[#a83679] p-2 rounded-full md:hidden flex"
        onClick={() => setIsOpened(!isOpened)}
      >
        {isOpened ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        )}
      </div>

      {/* Navbar Links */}
      <div>
        <ul
          className={`flex md:m-0 md:gap-4 md:px-0 px-6 flex-col md:flex-row md:relative absolute md:top-0 top-16 md:left-auto ${
            isOpened ? "left-0" : "-left-full"
          } bg-white md:w-auto w-full md:h-auto h-screen md:space-x-0 transition-all duration-300 ease-in-out`}
        >
          {navbarData.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenSubmenu(index)} 
              onMouseLeave={() => setOpenSubmenu(null)} 
            >
              <Link
                to={item.link}
                onClick={() => {
                  setActiveLink(item.label);
                  !item.submenu?.length && setIsOpened(false);
                  setOpenSubmenu((prev)=> prev ? null : index)
                }}
                className={` px-3 py-2 rounded-md text-lg font-medium hover:text-[#A83679] flex justify-between items-center  ${
                  activeLink === item.label ? "text-[#A83679]" : "text-black"
                } ${item.style || ""}`}
              >
                {item.label}
                {item.submenu?.length && <IoMdArrowDropdownCircle className={"md:hidden"} />}
              </Link>

              {/* Submenu */}
              {item.submenu && (
                <ul
                  className={`pl-5  md:pl-0 md:absolute left-0 mt-0 w-full md:w-48 z-50 bg-slate-50 text-black rounded-md md:shadow-lg ${
                    openSubmenu === index || openSubmenu === true
                      ? "block"
                      : "hidden"
                  }`}
                >
                  {item.submenu.map((submenuItem, submenuIndex) => (
                    <li key={submenuIndex}>
                      <Link
                        to={submenuItem.link}
                        onClick={() => {
                          setIsOpened(false); // Close menu after clicking submenu item
                          setOpenSubmenu(!openSubmenu);
                        }}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#A83679]"
                      >
                        {submenuItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
