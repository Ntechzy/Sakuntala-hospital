import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-700 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Section - Logo and Contact Info */}
          <div className="mb-8 md:mb-0 flex flex-col md:flex-row md:gap-9">
            <img
              src="/assets/logo.png"
              alt="Logo"
              className="w-24 h-24 mb-4"
            />
        <div>
  <div className="text-pink-800 mb-2 md:w-96">
  Skilled doctors, cutting-edge technology, personalized care, and a dedicated team ensuring the best, most affordable IVF treatments.
            </div>
      
           
            <p className="text-pink-700 md:w-96">
              <strong>Address:</strong> 702, PANCHAHATIA AZAMGARH ROAD, Vishesharpur, Jaunpur, Uttar Pradesh 222001
            </p>
            <p className="text-pink-700">
              <strong>Email Us:</strong> info@gmail.com
            </p>
            <p className="text-pink-700">
              <strong>Call Us:</strong> 1-885-665-2024
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-pink-600 hover:text-pink-800">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-pink-400 hover:text-pink-600">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-700">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-pink-700 hover:text-pink-900">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

          {/* Middle Section - Departments */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold text-xl text-pink-700 mb-4">Helpful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="hover:text-pink-900">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-pink-900">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-pink-900">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-pink-900">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/cashless-treatment" className="hover:text-pink-900">
                  Cashless Treatment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-pink-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Opening Hours */}
          <div>
            <h3 className="font-semibold text-lg text-pink-700 mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="text-pink-700">Saturday–Thursday: 8:00 AM – 8:00 PM</li>
              <li className="text-pink-700">Saturday–Thursday: 10:00 AM – 10:00 PM</li>
              <li className="text-pink-700">Sunday: 8:00 AM – 3:00 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
