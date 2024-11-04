'use client' 
import React from 'react'
import { MdLocalHospital } from "react-icons/md";

const IconCard = () => {
  return (
    <>
      {/* if you are maping this component so before using inside map function remove main div from here and wrap map function with main class */}

      <div className='main max-w-screen w-[90%] grid md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center items-stretch m-auto'>
        <div className='bg-gray-200 p-2 w-full m-auto rounded-md gap-3 grid hover:bg-green-800  hover:text-white justify-center items-center'>

          {/* Change icon here  */}
          <div className='text-[35px]  group-hover:text-white'>
            <MdLocalHospital className='' />
          </div>

          {/* Change heading here */}
          <h1 className='font-bold  text-xl group-hover:text-white '>
            Quality Education
          </h1>

          {/* Change Quote or Paragraph here*/}
          <p className=' group-hover:text-white'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quibusdam culpa rerum dolor voluptatibus. Neque eveniet praesentium quam officiis consequatur.
          </p>
        </div>
      </div>
    </>
  )
}

export default IconCard