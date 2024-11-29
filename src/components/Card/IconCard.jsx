'use client' 
import React from 'react'
import { MdLocalHospital } from "react-icons/md";

const IconCard = ({ icon, heading, para,hovertext }) => {
  return (
    <>
      {/* if you are maping this component so before using inside map function remove main div from here and wrap map function with main class */}


        <div className='bg-gray-200 p-2 w-full m-auto rounded-md gap-3 grid hover:bg-pink-700  hover:text-white justify-center items-center'>
           
          {/* Change icon here  */}
          <div className='text-[35px]  group-hover:text-white'>
           {icon}
          </div>

          {/* Change heading here */}
          <h1 className='font-bold  text-xl group-hover:text-white '>
           {heading}
          </h1>

          {/* Change Quote or Paragraph here*/}
          <p className=' group-hover:text-white'>
          {para}
          </p>
        </div>
    </>
  )
}

export default IconCard