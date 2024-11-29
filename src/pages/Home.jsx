import React from 'react'
import HomeBanner from '../components/Home/HomeBanner'
import IconCard from '../components/Home/HomeSection2'
import PatternImage from '../components/Home/AboutHome'
import OurDepartment from '../components/Home/OurDepartment'
import WhyChoose from '../components/Home/WhyChoose'

import OurSpecialist from '../components/Home/OurSpecialist'
import AppointmentForm from '../components/Home/AppointmentForm'
import TestimonialCarousel from '../components/Home/TestimonitalCarousel'
import HomeServices from '../components/Home/HomeServices'
import FAQ from '../components/Home/FAQ'

export const Home = () => {
  return (
    <div>
        <HomeBanner/>
        <IconCard/>
        <PatternImage/>
        <HomeServices/>
        <FAQ/>
        <OurDepartment/>
        <WhyChoose/>
        <OurSpecialist/>
        <AppointmentForm/>
        <TestimonialCarousel/>
    </div>
  )
}
