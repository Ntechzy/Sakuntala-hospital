import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import Footer from './components/Card/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Facilities from './pages/Facilities'
const App = () => {
  return (
    <div >
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" exact element={<div>Services</div>} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />   
        <Route path="/facilities" exact element={<Facilities />} />   
      </Routes>
      <Footer/> 
    </Router>
    </div>
  )
}

export default App