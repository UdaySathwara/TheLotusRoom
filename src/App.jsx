import React from 'react';
import  { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Atoms/Navbar';
import Footer from './Components/Atoms/Footer';
import Testimonials from './Components/Atoms/Testimonials';
import About from './Pages/About';
import AboutFounder from './Components/Atoms/AboutFounder';
import Trainer from './Pages/Trainer';
import BackToTop from './Components/Atoms/BacktoTop';
import Schedule from './Components/Atoms/Schedule';
import Classes from './Pages/Classes';
import OnlineClasses from './Components/Atoms/OnlineClasses';
import Cources from './Pages/Cources';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<BackToTop />} />
        <Route path='/about' element={<About />} />
        <Route path='about-founder' element={<AboutFounder />} />
        <Route path="testimonial" element={<Testimonials />} />
        <Route path="trainer" element={<Trainer />} />
        <Route path='schedule' element={<Schedule />} />
        <Route path='classes' element={<Classes />} />
        <Route path='online-classes' element={<OnlineClasses />} />
        <Route path='courses' element={<Cources />} />
        <Route path='shop' element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;