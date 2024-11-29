import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Slider from "./Slider";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="flex flex-row ">
      <div className="">
        {/* Social Media Section */}
        <div className="text-white p-4 flex flex-col items-center mt-32 before:content-['_'] before:text-3xl before:h-52  before:bg-black before:w-[1px] before:opacity-10 before:gap-9  before:text-gray-300">
          <div className="flex flex-col space-y-4 mt-3">
            <Link
              to="https://facebook.com"
              className="flex items-center space-x-2 text-text-[#A83679] hover:text-white transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-text-[#A83679] rounded-full">
                <FaFacebook className="text-3xl text-white" />
              </div>
            </Link>
            <Link
              to="https://twitter.com"
              className="flex items-center space-x-2 text-[#A83679] hover:text-white transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-400 rounded-full">
                <FaTwitter className="text-3xl text-white" />
              </div>
            </Link>
            <Link
              to="https://instagram.com"
              className="flex items-center space-x-2 text-[#A83679] hover:text-white transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-pink-500 rounded-full">
                <FaInstagram className="text-3xl text-white" />
              </div>
            </Link>
            <Link
              to="https://linkedin.com"
              className="flex items-center space-x-2 text-[#A83679] hover:text-white transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-700 rounded-full">
                <FaLinkedin className="text-3xl text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Section */}
      <div className="w-[92%] ">
        <Slider />
      </div>
    </div>
  );
};

export default HomeBanner;
