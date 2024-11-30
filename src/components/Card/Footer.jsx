import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f5eaf1] text-gray-700 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* Left Section - Logo and Contact Info */}
          <div className="mb-8 md:mb-0">
            <img src="https://via.placeholder.com/100x50" alt="Loading..." className="w-32 mb-4" /> {/* Replace with actual logo */}
            <p className="text-slate-100 mb-2">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, repudiandae!
            </p>
            <p className="font-semibold">177 Devon Lane Miami, MK 3355</p>
            <p><strong>Email Us:</strong> info@gmail.com</p>
            <p><strong>Call Us:</strong> 1-885-665-2024</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF size={20} /></a>
              <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter size={20} /></a>
              <a href="#" className="text-pink-600 hover:text-pink-800"><FaInstagram size={20} /></a>
              <a href="#" className="text-blue-700 hover:text-blue-900"><FaLinkedinIn size={20} /></a>
            </div>
          </div>

          {/* Middle Section - Departments */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-semibold text-lg mb-4">Departments</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Emergency Departments</a></li>
              <li><a href="#" className="hover:text-gray-900">Orthopedics</a></li>
              <li><a href="#" className="hover:text-gray-900">Neurosciences</a></li>
              <li><a href="#" className="hover:text-gray-900">Gastroenterology</a></li>
              <li><a href="#" className="hover:text-gray-900">Bariatric Surgery</a></li>
            </ul>
          </div>

          {/* Right Section - Helpful Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Helpful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-900">Find a Doctor</a></li>
              <li><a href="#" className="hover:text-gray-900">Find a Hospital</a></li>
              <li><a href="#" className="hover:text-gray-900">Buy Medicine</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
