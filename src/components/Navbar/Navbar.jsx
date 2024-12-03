import React, { useState } from "react";
import { navbarData } from "./NavbarData";
import { Link } from "react-router-dom";
// import logo from './path/to/logo.png'; // Update this path to your logo image

const Navbar = () => {
  const [Activelink, setActiveLink] = useState("Home");
  const [Isopened, setIsopened] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-50 bg-white  ">
      {/* Logo Section */}
    <div className="flex flex-row items-center gap-4">
    <div className="flex-shrink-0">
        <img src="/assets/logo.png" alt="Logo" className="h-16" />
      </div>
      <div className="text-[#A83679] text-2xl font-bold">
        Shakuntala Hospital
      </div>
    </div>
      <div
        className="bg-[#a83679] p-2 rounded-full md:hidden flex"
        onClick={() => setIsopened(!Isopened)}
      >
        {Isopened ? (
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
        className={`flex md:m-0 m-auto  justify-center md:gap-0 gap-6 md:px-0 transition-all ease-in-out px-7 md:flex-row flex-col md:relative absolute md:top-0 top-20 md:left-auto ${
          Isopened ? "left-0" : "-left-full"
        }  bg-white md:w-auto w-full md:h-auto h-[50vh]   md:space-x-4`}
      >
        {navbarData.map((item, index) => (
          <li key={index} className="relative group">
            <Link
              to={item.link}
              onClick={() => setActiveLink(item.label)}
              className={`px-3 py-2 rounded-md text-xl font-medium hover:text-[#A83679] ${
                Activelink === item.label ? "text-[#A83679]" : "text-black"
              }`}
            >
              {item.label}
            </Link>

            {item.submenu && (
              <ul className="absolute  left-0 mt-2 w-48 bg-white text-[#A83679] rounded-md shadow-lg opacity-0 group-hover:opacity-100 ">
                {item.submenu.map((submenuItem, submenuIndex) => (
                  <li key={submenuIndex}>
                    <Link
                      to={submenuItem.link}
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
   <Link to="/appointment" className="bg-[#A83679] text-white p-3 rounded-lg text-md md:block hidden">Book An Appointment</Link>
    </nav>
  );
};

export default Navbar;
