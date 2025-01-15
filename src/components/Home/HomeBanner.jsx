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
      {/* new banner here */}


<div className=" absolute md:top-1/2 top-[270px] p-2 left-11 w-[86.3%] md:w-[500px]  md:left-28 flex flex-col rounded-xl  bg-[#a03272] md:py-16 md:px-11  text-white">
            <div className="md:text-4xl font-semibold">
            Dr. Shakuntala Yadav
            </div>
            <div className="md:text-xl">
            Gynaecologist & IVF Specialist
            </div>
            <div>
            <Link to="/appointment" className="bg-blue-900 text-white p-3 mt-4 w-48 rounded-lg text-md md:block hidden">Book An Appointment</Link>
            </div>
        </div>
        <div className="flex justify-center">
          <img
            src="/assets/shakuntala.avif"
            alt="Loading..."
            className="w-screen md:mt-9 mt-28  "
          />
        </div>


    </div>
  );
};

export default HomeBanner;
