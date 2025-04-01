import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { auth } from './Components/Atoms/Firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import Home from "./Pages/Home";
import Navbar from "./Components/Atoms/Navbar";
import Footer from "./Components/Atoms/Footer";
import Services from "./Components/Atoms/Services";
import HomeCourses from "./Components/Atoms/HomeCourses";
import HomeTrainer from "./Components/Atoms/HomeTrainer";
import Testimonials from "./Components/Atoms/Testimonials";
import About from "./Pages/About";
import AboutFounder from "./Components/Atoms/AboutFounder";
import Trainer from "./Pages/Trainer";
import BackToTop from "./BackToTop";
import Schedule from "./Components/Atoms/Schedule";
import Classes from "./Pages/Classes";
import Courses from "./Pages/Courses";
import OnlineClasses from "./Components/Atoms/OnlineClasses";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import DetailYogaSpice from "./Components/Atoms/DetailYogaSpice";
import DetailPinkMat from "./Components/Atoms/DetailPinkMat";
import Cart from "./Components/Atoms/Cart";
import { CartProvider } from "./Components/Atoms/CartContext";  
import DetailYogaWheel from "./Components/Atoms/DetailYogaWheel";
import DetailBlueMat from "./Components/Atoms/DetailBlueMat";
import DetailYogaPillow from "./Components/Atoms/DetailYogaPillow";
import DetailYogaBlanket from "./Components/Atoms/DetailYogaBlanket";
import DetailYogaStrap from "./Components/Atoms/DetailYogaStrap";
import DetailBumpyFoamRoller from "./Components/Atoms/DetailBumpyFoamRoller";
import Checkout from "./Components/Atoms/Checkout";
import Login from "./Components/Atoms/Login";
import ForgotPassword from "./Components/Atoms/ForgotPassword";
import SignUp from "./Components/Atoms/SignUp";
import YogaLibrary from './Components/Atoms/YogaLibrary';
import ProgressTracker from './Components/Atoms/ProgressTracker';
import MyOrders from './Components/Atoms/MyOrders';
import TermsandCodition from './Components/Atoms/TermsandCodition';
import PrivacyPolicy from "./Components/Atoms/PrivacyPolicy";

const AppContent = ({ user, handleLogout }) => {
  const location = useLocation(); 
  const hideNavbarPaths = ["/detail-yoga-spice", "/detail-pink-mat", "/cart", "/detail-yoga-wheel", "/detail-blue-mat", "/detail-yoga-pillow", "/detail-yoga-blanket", "/detail-yoga-strap", "/detail-bumpy-foam-roller", "/checkout", "/login", "/forgot-password", "/sign-up", "/yoga-library", "/Login" , "/progress-tracker" , "/my-orders" , "/privacy-policy" ,"/terms-and-conditions"]; 

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar user={user} handleLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/home-courses" element={<HomeCourses />} />
        <Route path="/home-trainer" element={<HomeTrainer />} />
        <Route path="*" element={<BackToTop />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-founder" element={<AboutFounder />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/online-classes" element={<OnlineClasses />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail-yoga-spice" element={<DetailYogaSpice />} />
        <Route path="/detail-pink-mat" element={<DetailPinkMat />} />
        <Route path="/detail-yoga-wheel" element={<DetailYogaWheel />} />
        <Route path="/detail-blue-mat" element={<DetailBlueMat />} />
        <Route path="/detail-yoga-pillow" element={<DetailYogaPillow />} />
        <Route path="/detail-yoga-blanket" element={<DetailYogaBlanket />} />
        <Route path="/detail-yoga-strap" element={<DetailYogaStrap />} />
        <Route path="/detail-bumpy-foam-roller" element={<DetailBumpyFoamRoller />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUp />} />    
        <Route path="/yoga-library" element={<YogaLibrary />} />
        <Route path='/progress-tracker' element={<ProgressTracker />} />  
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/terms-and-conditions" element={<TermsandCodition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </>
  );
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent user={user} handleLogout={handleLogout} />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;