import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="max-w-screen md:h-screen mx-auto bg-white rounded-lg overflow-hidden relative">
      {/* Header Section */}

      {/* Doctor Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-24 relative space-y-4 md:space-y-0">
        {/* Doctor's Image */}
        <img className="" src="/assets/banner.jpg" alt="" />
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white text-center p-4 gap-2 md:text-lg flex flex-col md:flex-row justify-center md:gap-11 px-4 md:px-0">
        <p> एक ही छत के नीचे Fertility इलाज की सारी सुविधाएं पाएं</p>
      </div>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/yourwhatsappnumber"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute md:bottom-4 md:right-4 right-0 bottom-0 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
          alt="WhatsApp"
          className="md:w-12 md:h-12 w-6 "
        />
      </a>
    </div>
  );
};

export default HomeBanner;
