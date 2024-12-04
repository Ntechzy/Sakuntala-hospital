import React from 'react'
import Banner from '../components/BannerComponent/Banner'
import AppointmentForm from '../components/Home/AppointmentForm'
import ContactDetails from '../components/Contact/ContactDetails'
import Content from '../components/ResuableAbout/Content'

const Contact = () => {
  return (
    <div>
        <Banner CapitalPagename="CONTACT US" pagename="Contact Us"/>
        <Content content={"Welcome to Shakuntala IVF Hospital. At Shakuntala IVF, we are dedicated to providing comprehensive healthcare services with a special focus on all types of infertility treatments. We are a ‘one-stop’ clinic offering personalized care under one roof. With a strong presence across multiple locations, we ensure convenience and accessibility to our patients. We understand the importance of your time, so we provide the convenience of initial consultations, testing, and treatment on the same day.At Shakuntala IVF, we prioritize the emotional well-being of our patients as much as the clinical standards we uphold to help you fulfill your dream of parenthood. With a team of skilled fertility specialists and state-of-the-art technology, we are committed to delivering the highest quality care."}/>
        <ContactDetails/>
        <AppointmentForm/>
    </div>
  )
}

export default Contact