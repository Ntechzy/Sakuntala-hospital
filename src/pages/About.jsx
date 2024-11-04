import React from 'react'
import AboutHome from '../components/Home/AboutHome'
import AboutBanner from '../components/About/AboutBanner'
import MissionVision from '../components/About/MissionVission'
import WhyChoose from '../components/Home/WhyChoose'
import OurSpecialist from '../components/Home/OurSpecialist'
import TestimonialCarousel from '../components/Home/TestimonitalCarousel'
import Banner from '../components/BannerComponent/Banner'

const About = () => {
  return (
    <div>
        <Banner CapitalPagename="ABOUT US" pagename="About Us"/>
        <AboutHome/>
        <MissionVision/>
        <WhyChoose/>
        <OurSpecialist/>
        <TestimonialCarousel/>
    </div>
  )
}

export default About