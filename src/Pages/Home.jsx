import React from "react";
import Testimonials from "../Components/Atoms/Testimonials";
import AboutFounder from "../Components/Atoms/AboutFounder";
import HomeCourses from "../Components/Atoms/HomeCourses";
import Schedule from "../Components/Atoms/Schedule";
import Services from "../Components/Atoms/Services";
import HomeTrainer from "../Components/Atoms/HomeTrainer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      
      <div className="relative h-screen flex justify-center items-center bg-black p-6 overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover bg-right-bottom"
          autoPlay
          loop
          muted
          playsInline
        >
          {/* <source src="https://videos.pexels.com/video-files/7589755/7589755-uhd_2560_1440_25fps.mp4" type="video/mp4" /> */}
          <source
            src="https://videos.pexels.com/video-files/4535130/4535130-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Text Content Section */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-gray-100 p-6 max-w-2xl font-medium">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">
            Unleash the Power of Yoga
          </h1>
          <p className="text-lg md:text-xl p-3 font-serif">
            Discover the joy of yoga with our expert instructors. Join our
            community and enhance your well-being with personalized classes and
            guided sessions.
          </p>
          <Link
            className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white/15 font-serif"
            to="/classes"
          >
            See Our Classes
          </Link>
        </div>
      </div>

      {/* Yoga Cards Section */}
      <Services />

      {/* About Section */}
      <AboutFounder />

      {/* Cources */}
      <HomeCourses />

      {/* Trainer */}
      <HomeTrainer />

      {/* Clases  */}
      <Schedule />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}

export default Home;