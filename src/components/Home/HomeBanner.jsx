import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="max-w-screen md:h-screen mx-auto bg-white rounded-lg overflow-hidden relative">
      {/* Header Section */}

      {/* Doctor Section */}
      <div className=" flex flex-col md:flex-row items-center justify-between mt-24 relative space-y-4 md:space-y-0">
        {/* Doctor's Image */}
        <img className="" src="/assets/banner.jpg" alt="" />
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white text-center md:p-4 p-2 gap-2 md:absolute bottom-0 left-12 md:w-[61%] md:text-lg flex flex-col md:flex-row justify-center md:gap-11 px-4 md:px-0">
        <p> एक ही छत के नीचे Fertility इलाज की सारी सुविधाएं पाएं</p>
      </div>

      {/* WhatsApp Icon */}
      
    </div>
  );
};

export default HomeBanner;
