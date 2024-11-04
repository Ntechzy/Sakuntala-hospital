'use client';
import React from 'react';
import { MdLocalHospital } from "react-icons/md";

const AboutHomeCard = ({ icon, heading, para }) => {
  return (
    <>
      {/* If you are mapping this component, wrap the map function with the main class instead of using this div */}
      <div className='p-2 w-full m-auto rounded-md gap-3 grid justify-center items-center'>
           
        {/* Change icon here */}
        <div className='text-[35px] text-blue-400'>
          {icon}
        </div>

        {/* Change heading here */}
        <h1 className='font-bold text-xl text-blue-500'>
          {heading}
        </h1>

        {/* Change Quote or Paragraph here */}
        <p>
          {para}
        </p>
      </div>
    </>
  );
};

export default AboutHomeCard;
