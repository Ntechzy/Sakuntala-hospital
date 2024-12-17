import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import Footer from './components/Card/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Facilities from './pages/Facilities'
import Cashless from './pages/Cashless'
import AppoinmentForm from './components/Home/AppointmentForm'
import Services from './pages/Services'
import ScrollToTop from './pages/ScrollToTop'
import Overview from './pages/Overview'

import WhyChoosePage from './pages/WhyChoosePage'
import IVFInfoPage from './pages/IVFInfoPage'
import OurSpecialistPage from './pages/OurSpecialistPage'
import IVFProcessPage from './pages/IVFProcessPage'
import GovernmentPanel from './pages/GovernmentPanel'
import IVFSpecialist from './pages/IVFSpecialist'
import WhatsApp from './components/Whatsupicon/WhatsApp'
import Doctors from './pages/Doctors'
import Gallery from './pages/Gallery'

const App = () => {
  return (
    <div >
    <Router>
      <ScrollToTop/>
      
      <Navbar/>
     <WhatsApp/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/overview" exact element={<Overview/>} />
        <Route path="/why-choose" exact element={<WhyChoosePage/>} />
        <Route path="/ivf-info" exact element={<IVFInfoPage/>} />
        <Route path="/ivf-process" exact element={<IVFProcessPage/>} />
        <Route path="/our-specialists" exact element={<OurSpecialistPage/>} />
        <Route path="/ivf-specialists" exact element={<IVFSpecialist/>} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />   
        <Route path="/facilities" exact element={<Facilities />} />   
        <Route path="/private-panel" exact element={<Cashless />} />   
        <Route path="/government-panel" exact element={<GovernmentPanel />} />   
        <Route path="/cashless-treatment" exact element={<Cashless />} />   
        <Route path="/appointment" exact element={<AppoinmentForm />} />   
        <Route path="/doctors" exact element={<Doctors />} />   
        <Route path="/gallery" exact element={<Gallery />} />   
      </Routes>
      <Footer/> 
    </Router>
    </div>
  )
}

export default App