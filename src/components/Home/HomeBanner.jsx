import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="max-w-screen md:h-screen mx-auto bg-white rounded-lg overflow-hidden">
      {/* Header Section */}

      {/* Doctor Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-24 relative space-y-4 md:space-y-0">
        {/* Doctor's Image */}
        <img className="" src="/assets/banner.jpg" alt="" />

      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white text-center p-4 gap-2 md:text-lg flex flex-col md:flex-row justify-center md:gap-11 px-4 md:px-0">
        {/* <p> Indira IVF & Shakuntala IVF Centre </p> */}
        <p> एक ही छत के नीचे Fertility इलाज की सारी सुविधाएं पाएं</p>
        {/* <p>📞 1800 309 1975 </p> */}
        {/* <p>
          Indira IVF & Shakuntala IVF Centre विशेश्वर, पंचहटिया, जौनपुर
          (उत्तरप्रदेश)
        </p> */}
      </div>
    </div>
  );
};

export default HomeBanner;
