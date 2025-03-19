import React from "react";
import Testimonials from "../Components/Atoms/Testimonials";
import AboutFounder from "../Components/Atoms/AboutFounder";
import BackToTop from "../Components/Atoms/BacktoTop";
import Schedule from "../Components/Atoms/Schedule";

function Home() {
  const courses = [
    {
      name: "Psycho Yoga Therapy Course",
      time: "90 HRS",
      fees: "14999",
      schedule: "Monday - Friday",
      image:
        "https://images.pexels.com/photos/4498220/pexels-photo-4498220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Aerial Yoga Certification Course",
      time: "60 HRS",
      fees: "20000",
      schedule: "Monday - Friday",
      image:
        "https://images.pexels.com/photos/4324101/pexels-photo-4324101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Diet Therapy and Yoga Therapy Teacher Training",
      time: "3 Months",
      fees: "20000",
      schedule: "Monday - Friday",
      image:
        "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Prenatal/Postnatal Certification Course",
      time: "85 HRS",
      fees: "19999",
      schedule: "Monday - Friday",
      image:
        "https://images.pexels.com/photos/7155545/pexels-photo-7155545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Kids Yoga Certification Course",
      time: "70 HRS",
      fees: "14999",
      schedule: "Monday - Friday",
      image:
        "https://images.pexels.com/photos/5063299/pexels-photo-5063299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Yoga Nindra Teacher Training Certification Course",
      time: "100 HRS",
      fees: "10000",
      schedule: "Monday - Friday",
      image:
        "https://images.pexels.com/photos/11387441/pexels-photo-11387441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const trainers = [
    {
      name: "Deepak Kumar",
      role: "Trainer/Teacher",
      degree: "Masters in Yogic Science",
      experience: "4+ years",
      description:
        "Balancing, Twisting, Power yoga & Meditation with different types",
      image:
        "https://images.pexels.com/photos/6698502/pexels-photo-6698502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Anshika",
      role: "Trainer/Teacher",
      degree: "GRADUATION WITH YOGA SCIENCE",
      experience: "1+ years",
      description: "HATHA YOGA , PRANAYAM, SATKARMA",
      image:
        "https://images.pexels.com/photos/8391701/pexels-photo-8391701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Anand Kumar",
      role: "Trainer/Teacher",
      degree: "Diploma in Yoga Therapy",
      experience: "9+ years",
      description: "Weight Loss session, Therapeutic Yoga.",
      image:
        "https://images.pexels.com/photos/6698489/pexels-photo-6698489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Kanak Sharma",
      role: "Trainer/Teacher",
      degree: "M.A in yogic science, MPhil in yoga",
      experience: "15+ years",
      description: "Weight Loss Yoga, Power Yoga, Props Yoga",
      image:
        "https://images.pexels.com/photos/6707077/pexels-photo-6707077.jpeg",
    },
  ];

  return (
    <>
      <BackToTop />

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
          <button className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white/15 font-serif">
            See Our Classes
          </button>
        </div>
      </div>

      {/* Yoga Cards Section */}
      <div className="mx-auto p-10 md:p-20 min-h-[600px] flex flex-wrap justify-center items-center bg-gray-50 gap-6 md:gap-10">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 w-full sm:w-[300px] md:w-[280px] lg:w-[280px] text-center h-[350px] ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3221/3221191.png"
            alt=""
            className="bg-blue-300 p-4 rounded-full size-20"
          />
          <span className="text-2xl">Outdoor Activities</span>
          <span className="text-gray-600 px-4">
            We organize yoga & health workshops in corporate settings,
            customized to audience levels to improve social, mental and physical
            health.
          </span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 w-full sm:w-[300px] md:w-[280px] lg:w-[280px] text-center h-[350px] ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/11448/11448752.png"
            alt=""
            className="bg-green-300 p-4 rounded-full size-20"
          />
          <span className="text-2xl">Professional Courses</span>
          <span className="text-gray-600 px-4">
            We offer various yoga courses for professionals and students,
            customized to help in career growth and personal development.
          </span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 w-full sm:w-[300px] md:w-[280px] lg:w-[280px] text-center h-[350px] ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1589/1589131.png"
            alt=""
            className="bg-orange-300 p-4 rounded-full size-20"
          />
          <span className="text-2xl">Career Counseling</span>
          <span className="text-gray-600 px-4">
            We offers career counseling opportunities to help candidates boost
            their career growth.
          </span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 w-full sm:w-[300px] md:w-[280px] lg:w-[280px] text-center h-[350px] ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/812/812032.png"
            alt=""
            className="bg-pink-300 p-4 rounded-full size-20"
          />
          <span className="text-2xl">Organize Events</span>
          <span className="text-gray-600 px-4">
            We organize state, national, and international level events where
            participants can showcase their talent and win prizes &
            certificates.
          </span>
        </div>
      </div>

      {/* About Section */}
      <AboutFounder />

      {/* Cources */}
      <div className="flex flex-col justify-center items-center p-10 min-h-screen bg-gray-50">
        <span className="text-4xl m-4 text-center font-medium">
          Our Exciting Courses
        </span>
        <span className="text-center">
          We offer a wide range of Yoga Courses to suit your needs and
          preferences
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl mx-auto py-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl hover:scale-105 duration-300"
            >
              <img
                src={course.image}
                alt={course.name}
                className="w-full h-72 object-cover rounded-2xl"
              />
              <div className="p-2 flex flex-col gap-1 text-center bg-[#eddbcc] text-black mx-8 rounded-xl text-xs text-extra-bold relative bottom-5">
                <p className="flex justify-center items-center">
                  <strong>
                    <span className="material-symbols-outlined px-2">
                      calendar_today
                    </span>
                  </strong>
                  {course.schedule}
                </p>
                <p className="flex justify-center items-center">
                  <strong>
                    <span class="material-symbols-outlined px-2">payments</span>
                  </strong>
                  COURCE FEES: {course.fees}
                </p>
                <p className="flex justify-center items-center">
                  <strong>
                    <span className="material-symbols-outlined px-2">
                      schedule
                    </span>
                  </strong>
                  {course.time}
                </p>
              </div>
              <h4 className="text-xl font-semibold text-center bg-white text-black p-2">
                {course.name}
              </h4>
              <div className="flex justify-center items-center p-5">
                <button className="bg-[#eddbcc] text-black font-medium py-2 px-4 rounded-full hover:border border-2 hover:bg-white  hover:border-[#dfb18c] hover:text-[#dfb18c] flex justify-center items-center">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-[#8e5d36] text-white py-2 px-4 rounded-full mt-10 flex justify-center items-center hover:text-[#8e5d36] hover:bg-white border-2 border-[#8e5d36] font-medium">
          View All Courses
        </button>
      </div>

      {/* Trainer */}
      <div className="flex flex-col justify-center items-center p-6 min-h-[700px] bg-[#eddbcc]">
        <div className="space-y-6 p-6 text-center max-w-[600px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-600">
            EXPERIENCED TRAINER
          </h1>
          <p className="font-semibold text-4xl">Meet the Experts</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-10  max-w-7xl w-full mx-auto">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden p-4 text-center"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-64 mx-auto rounded-xl object-cover"
              />
              <h4 className="text-lg font-semibold mt-4">{trainer.name}</h4>
              <p className="text-gray-600 mt-4">{trainer.role}</p>
              <p className="text-gray-600">{trainer.degree}</p>
              <p className="text-gray-600">{trainer.experience}</p>
              <p className="text-gray-600 mt-4">{trainer.description}</p>
            </div>
          ))}
        </div>
        <button className="bg-[#8e5d36] text-white py-2 px-4 rounded-full mt-16 mb-8 flex justify-center items-center hover:text-[#8e5d36] hover:bg-white border-2 border-[#8e5d36] font-medium">
          View All Trainers
        </button>
      </div>

      {/* Clases  */}
      <Schedule />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}

export default Home;
