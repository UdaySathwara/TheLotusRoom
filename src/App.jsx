import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Atoms/Navbar";
import Footer from "./Components/Atoms/Footer";
import Testimonials from "./Components/Atoms/Testimonials";
import About from "./Pages/About";
import AboutFounder from "./Components/Atoms/AboutFounder";
import Trainer from "./Pages/Trainer";
import BackToTop from "./Components/Atoms/BacktoTop";
import Schedule from "./Components/Atoms/Schedule";
import Classes from "./Pages/Classes";
import OnlineClasses from "./Components/Atoms/OnlineClasses";
import Cources from "./Pages/Cources";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import DetailYogaSpice from "./Components/Atoms/DetailYogaSpice";

const AppContent = () => {
  const location = useLocation(); // Get current path
  const hideNavbarPaths = ["/detail-yoga-spice"]; // Define paths where navbar should be hidden

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<BackToTop />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-founder" element={<AboutFounder />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/online-classes" element={<OnlineClasses />} />
        <Route path="/courses" element={<Cources />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail-yoga-spice" element={<DetailYogaSpice />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
