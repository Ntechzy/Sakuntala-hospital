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
const App = () => {
  return (
    <div >
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />   
        <Route path="/facilities" exact element={<Facilities />} />   
        <Route path="/cashless-treatment" exact element={<Cashless />} />   
        <Route path="/appointment" exact element={<AppoinmentForm />} />   
      </Routes>
      <Footer/> 
    </Router>
    </div>
  )
}

export default App