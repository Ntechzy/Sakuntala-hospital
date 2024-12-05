import React from "react";
import Content from "../components/ResuableAbout/Content";
import Banner from "../components/BannerComponent/Banner";
import { Link } from "react-router-dom";

const IVFSpecialist = () => {
  return (
    <>
      <div>
        <div className=" absolute md:top-1/2 top-[270px] p-2 left-11 w-[86.3%] md:w-[500px]  md:left-28 flex flex-col  bg-pink-700 md:py-16 md:px-11  text-white">
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
        <div className="mt-6">
        <Content
          content={
            "To diagnose your infertility issues accurately and to get the best results, it’s important to consult only an IVF specialist in Jaunpur. Meeting an IVF expert personally, discussing your pregnancy troubles in detail, and undergoing important tests will help in a thorough medical evaluation. At Shakuntala IVF Centre, our doctors follow a step-by-step procedure to help you in your parenthood journey. With their several years of experience and utmost commitment, they will cater to your unique needs and offer a customised treatment plan. If you are looking for advanced fertility solutions under the guidance of some of the best doctors in the city, then visit our fertility hospital in Jaunpur today. "
          }
        />
        </div>
      </div>
    </>
  );
};

export default IVFSpecialist;
