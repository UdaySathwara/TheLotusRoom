import React from "react";
import { motion } from "framer-motion";
import AboutFounder from "../Components/Atoms/AboutFounder";
import Testimonials from "../Components/Atoms/Testimonials";

function About(props) {
  const statsData = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/11448/11448752.png",
      value: "80",
      label: "Yoga Batches",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/3091/3091443.png",
      value: "1000",
      label: "Yoga Conducted",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/6912/6912463.png",
      value: "12",
      label: "Years of Experience",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/554/554826.png",
      value: "100,000",
      label: "Happy Customers",
    },
  ];
  return (
    <>
      <section
        className="flex flex-col items-center justify-center text-center h-screen w-full bg-cover bg-center bg-no-repeat relative p-6"
        style={{
          backgroundImage:
            "url('https://goodstretch.uk/wp-content/uploads/2021/04/why-is-stretching-so-important.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4">
          <h2 className="text-4xl md:text-5xl font-medium text-white">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-white mt-4 font-serif">
            We bring people together through yoga, mindfulness, and wellness.
          </p>
        </div>
      </section>

      <AboutFounder />

      <div className="flex flex-col items-center justify-center bg-gray-50 text-center py-12 sm:py-20 px-4 sm:px-16">
        <span className="text-4xl font-semibold text-orange-500 p-6 ">
          Welcome To Our Yoga Studio
        </span>
        <span className="text-xl p-6 text-justify">
          Gyan means know and Ish means self i.e. know yourself.{" "}
          <b>Prakash Acharaya,</b> the founder of Yoga Studio. Our company was
          registered incorporation as company in December 2018. There ard
          branches situated in Ahmedabad, Gujarat. The company has collaborated
          with many other companies and has given affiliations to many other
          companies. Company has organized many workshops and camps in
          hospitals, schools, corporate company, bank, college and in army, air
          force and police cants. Up till now 120 workshops and camps have been
          organized by our company. And company has trained around 50 Yoga
          teachers and has given then a huge platform. Currently around 30
          teachers having degrees of yoga are working in our company. And
          company gives campus placement to top international yoga universities
          students having graduations and post-graduation degree. This is the
          only company all over India which is having highly qualified yoga
          teachers. We provide best yoga services in all over Ahmedabad.
        </span>

        <span className="text-xl p-6 text-justify">
          Company works on Hatha Yoga which is done in modern and in traditional
          way. Our aim is to provide complete holistic health. Our aim is to
          introduce the benefits of yoga to the people directly or indirectly.
          We want to introduce different types of yoga to people. Our trainers
          are friendly with the clients and explain about the uses and benefits
          of any Asana, Pranayama, Meditation, Mudra, Bandha and diet in
          lifestyle. Our main aim is to give platform to all the people who want
          to achieve something in this field.
        </span>

        <span className="text-xl p-6 text-justify">
          <b>Our company works in 4 dimensions:</b>
          <li className="text-xl text-justify p-3">
            Our Yoga Alliance : It gives yoga related services at any place like
            at yoga studio, gym, companies, college, societies, school, home
            service etc.
          </li>
          <li className="text-xl text-justify p-3">
            Our International Yoga Training Academy : Affiliated by Yoga
            Alliance International and Yoga Alliance, USA. We provide yoga
            certification courses which have many types like 100, 200, 300, 500
            hours certifications.
          </li>
          <li className="text-xl text-justify p-3">
            Our International Mr. Yogi And Miss Yogini Title Contest : We used
            to organize contests and competitions to motivate the people by
            giving them certificates and cash prizes.
          </li>
          <li className="text-xl text-justify p-3">
            Our Career Counseling : We used to give yoga related jobs in India
            as well as in foreign countries.
          </li>
        </span>
      </div>

      <div className="bg-[#8e5d37] py-12 flex items-center justify-center lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:place-items-center lg:grid-cols-4 gap-8 xl:gap-12 place-items-start">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.3 }}
              className="flex items-center gap-4"
            >
              <img
                src={stat.icon}
                alt=""
                className="bg-white p-2 size-20 rounded-full"
              />
              <div className="text-white text-xl font-bold flex flex-col">
                <span>{stat.value}</span>
                <span>{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Testimonials />
    </>
  );
}

export default About;
