import React from "react";
import { Link } from "react-router-dom";
import IVFSpecialist from "../../pages/IVFSpecialist";

const HomeBanner = () => {
  return (
    // <div className="max-w-screen md:h-screen mx-auto bg-white rounded-lg overflow-hidden relative">
    

    //   <div className="flex flex-col md:flex-row items-center justify-between object-cover mt-20 relative space-y-4 md:space-y-0">
        
    //     <img
    //       className="md:hidden w-full h-full object-cover"
    //       src="/assets/gallery/mobileBanner.jpg"
    //       alt="Mobile Banner"
    //     />

    //     <img
    //       className="hidden md:block w-full h-full object-cover"
    //       src="/assets/gallery/Banner.jpg"
    //       alt="Desktop Banner"
    //     />
    //   </div>

    //   {/* Footer */}
    //   {/* <div className="bg-gray-800 text-white text-center md:p-4 p-2 gap-2 md:absolute bottom-0 left-12 md:w-[61%] md:text-lg flex flex-col md:flex-row justify-center md:gap-11 px-4 md:px-0">
    //     <p> एक ही छत के नीचे Fertility इलाज की सारी सुविधाएं पाएं</p>
    //   </div> */}

    //   {/* WhatsApp Icon */}
    // </div>
    <div>
      <IVFSpecialist/>
    </div>
  );
};

export default HomeBanner;
