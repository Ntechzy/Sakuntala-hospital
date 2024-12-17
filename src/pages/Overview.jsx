import React from 'react'
import Banner from '../components/BannerComponent/Banner'
import Content from '../components/ResuableAbout/Content'
import Slider from '../components/Home/Slider'

const Overview = () => {
  return (
    <div>
        {/* <Banner CapitalPagename="OVERVIEW" pagename="Overview" /> */}
        <Slider/>
        <Content content={` For any treatment to succeed, well trained doctors, advanced technology and World Class Laboratory play a vital role. Our doctors at Indira IVF are compassionate, patient listeners and believe in personalised care for an enriched patient experience.  The clinic has a team of qualified and experienced specialists, including leading IVF doctors, clinical embryologists, support staff and dedicated nurses.The entire team puts in the best of their efforts, both in terms of moral support and proper guidance, to help patients find the best and affordable solution.Learn more about our team of IVF specialists here.`}/>
    </div>
  )
}

export default Overview