import React, { useState } from "react";
import { navbarData } from "./NavbarData";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [isOpened, setIsOpened] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false); // Track open submenu

  return (
    <nav className="flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex flex-row items-center gap-4">
        <div className="flex-shrink-0">
          <img src="/assets/logo.png" alt="Logo" className="h-12 w-auto" />
        </div>
        <div className="text-[#A83679] text-2xl font-bold">
          Shakuntala Hospital
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
          } bg-white md:w-auto w-full md:h-auto h-screen md:space-x-4 transition-all duration-300 ease-in-out`}
        >
          {navbarData.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setOpenSubmenu(index)} // Open submenu on hover
              onMouseLeave={() => setOpenSubmenu(null)} // Close submenu when not hovered
            >
              <Link
                to={item.link}
                onClick={() => {
                  setActiveLink(item.label);
                  setIsOpened(false); // Close menu on mobile after clicking
                }}
                className={`block px-3 py-2 rounded-md text-lg font-medium hover:text-[#A83679] ${
                  activeLink === item.label ? "text-[#A83679]" : "text-black"
                }`}
              >
                {item.label}
              </Link>

              {/* Submenu */}
              {item.submenu && (
                <ul
                  className={`absolute left-0 mt-0 w-48 z-50 bg-slate-50 text-black rounded-md shadow-lg ${
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

      {/* Appointment Button */}
      <Link
        to="/appointment"
        className="bg-[#A83679] text-white p-3 rounded-lg text-md md:block hidden"
      >
        Book An Appointment
      </Link>
    </nav>
  );
};

export default Navbar;
