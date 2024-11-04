import React from 'react'
import IconCard from '../Card/IconCard'
import { MdLocalHospital } from 'react-icons/md'

const HomeSection2 = () => {
  return (
    <div className='mt-7 grid grid-cols-2 m-auto md:grid-cols-6 gap-3 p-7 w-[90%] justify-center align-center'>

        <IconCard icon={<MdLocalHospital />} heading="Health Care" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit." hovertext="bg-red-500"/>
        <IconCard icon={<MdLocalHospital />} heading="Health Care" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
        <IconCard icon={<MdLocalHospital />} heading="Health Care" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
        <IconCard icon={<MdLocalHospital />} heading="Health Care" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
        <IconCard icon={<MdLocalHospital />} heading="Health Care" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
        <IconCard icon={<MdLocalHospital />} heading="Health Care" para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "/>
    </div>
  )
}

export default HomeSection2