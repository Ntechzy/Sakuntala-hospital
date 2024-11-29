import React from 'react'
import AboutHomeCard from '../Card/AboutHomeCard'
import IconCard from '../Card/IconCard'
import { MdLocalHospital } from 'react-icons/md'

const AboutHome = () => {
  return (
    <div className='flex flex-col md:flex-row p-5 md:p-14 w-[100%]  gap-7'>
      <div className='w-full md:w-[45%] '>
        {/* <div className='main flex flex-col justify-center items-center m-auto w-[90%] md:my-8 my-5'> */}

        <div className="sub-main grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 w-full mt-10">

          <div
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 cursor-pointer">
            <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" loading="lazy" alt="Image of our Herbal garden" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </div>

          <div
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 cursor-pointer">
            <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" loading="lazy" alt="Image of Our Classes" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

            {/* setting up color of backgroound to cover the light in image */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-blue-900 opacity-50">
            </div>
          </div>

          <div
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80 cursor-pointer">
            <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" loading="lazy" alt="Image of Our Classes" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

            {/* setting up color of backgroound to cover the light in image */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-blue-900 opacity-50">
            </div>
          </div>

          <div
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 cursor-pointer">
            <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" loading="lazy" alt="Image of our Herbal garden" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </div>


          {/* </div> */}


        </div>
      </div>

      <div className='md:w-[65%]  p-2 py-7'>
        <h3 className='text-2xl font-bold mb-4 text-blue-600'>WHO WE ARE</h3>
        <h1 className='text-3xl  mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quas. Lorem ipsum, dolor sit amet consectetur adipisicing eli</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam non debitis doloribus consequuntur quam. Nostrum, quae architecto? Sunt odio voluptatem eum animi sapiente.
        </p>
        {/* <AboutHomeCard/> */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
          <AboutHomeCard para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam non debitis doloribus consequuntur quam. Nostrum, quae architecto? Sunt odio voluptatem eum animi sapiente. "} heading={"Health Care"} icon={<MdLocalHospital />} />
          <AboutHomeCard para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam non debitis doloribus consequuntur quam. Nostrum, quae architecto? Sunt odio voluptatem eum animi sapiente. "} heading={"Health Care"} icon={<MdLocalHospital />} />
          <AboutHomeCard para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam non debitis doloribus consequuntur quam. Nostrum, quae architecto? Sunt odio voluptatem eum animi sapiente. "} heading={"Health Care"} icon={<MdLocalHospital />} />
          <AboutHomeCard para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nam non debitis doloribus consequuntur quam. Nostrum, quae architecto? Sunt odio voluptatem eum animi sapiente. "} heading={"Health Care"} icon={<MdLocalHospital />} />
        </div>
      </div>
    </div>
  )
}

export default AboutHome