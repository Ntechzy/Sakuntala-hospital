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
import IVFProcess from '../components/Home/IVFProcess'
import IVFInfo from '../components/Home/IVFInfo'
import Section2 from '../components/Home/Section2'

export const Home = () => {
  return (
    <div>
        <HomeBanner />
        <Section2 />
{/* <IconCard /> */}
<HomeServices />
<WhyChoose />
<IVFInfo/>
<OurSpecialist />
<IVFProcess />
<FAQ />
<AppointmentForm />
<TestimonialCarousel />
    </div>
  )
}
