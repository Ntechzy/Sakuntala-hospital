import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const HomeSection2 = () => {
  const [count, setCount] = useState(false)

  const data = [
    {
      icon: "",
      title: "Total Patient Treated",
      number: "97"
    },
    {
      icon: "",
      title: "Years of Experience",
      number: "10"
    },
    {
      icon: "",
      title: "IVF Success Rate",
      number: "100"
    },
  ]
  return (
    <div>
      <div className='mt-[40px] md:w-[58.33%] m-auto flex-col text-center'>

        <div className='flex flex-col justify-center items-center gap-5'>
          <h1 className=' bg-clip-text text-transparent bg-gradient-to-r from-[#A9377A] to-[#062f42] mb-[18px] font-[700] text-[24px] md:text-[42px] leading-[1.25em]'>
            Numbers That Define Us
          </h1>
        </div>
      </div>
      <div className=' grid sm:grid-cols-3 items-center m-auto  gap-3 pt-4 pb-2 px-9 w-full sm:justify-center '>
        {
          data.map((pro, i) => (
            <div key={i} className='flex flex-col gap-2 w-full justify-center items-center bg-[#a83679] py-7 rounded-lg'>


              <ScrollTrigger onEnter={() => setCount(true)}>
                <div className='text-[44px] text-white font-extrabold'>
                  {count && <CountUp end={pro.number} duration={4} delay={0.5} />}  +
                </div>
              </ScrollTrigger>

              <h1 className='font-bold text-lg text-white   '>
                {pro.title}
              </h1>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HomeSection2