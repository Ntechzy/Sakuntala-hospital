import React from 'react'
import Banner from '../components/BannerComponent/Banner'
import AppointmentForm from '../components/Home/AppointmentForm'
import ContactDetails from '../components/Contact/ContactDetails'

const Contact = () => {
  return (
    <div>
        <Banner CapitalPagename="CONTACT US" pagename="Contact Us"/>
        <ContactDetails/>
        <AppointmentForm/>
    </div>
  )
}

export default Contact