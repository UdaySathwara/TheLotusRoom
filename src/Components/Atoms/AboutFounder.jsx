import React from 'react';
import { motion } from "framer-motion";

function AboutFounder(props) {
    return (
        <div className="max-w-full mx-auto p-6 min-h-[800px] flex justify-center items-center bg-[#eddbcc]  relative">
        <span className="text-2xl left-0 absolute text-orange-900 hidden md:block">
          ___________________
        </span>
        <span className="text-2xl right-0 absolute text-orange-900 hidden md:block">
          ___________________
        </span>
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col md:flex-row gap-6 relative max-w-4xl">
          {/* User Details */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 relative">
            <img
              src="https://image1.masterfile.com/getImage/NjMwLTAzNDc5Nzk2ZW4uMDAwMDAwMDA=AK-ssl/630-03479796en_Masterfile.jpg"
              alt="Founder"
              className="rounded-xl object-cover h-[450px]"
            />
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="text-xs font-medium text-center bg-green-500 h-16 flex justify-center items-center absolute -top-4 right-1/2 transform -translate-x-1/2 md:-left-4 md:translate-x-0 p-3 text-white rounded-full w-36 shadow-md">
              <span className="material-symbols-outlined">calendar_today</span>
              12+ YEARS OF EXPERIENCE
            </motion.div>
          </div>

          {/* About Founder */}
          <div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              About the Founder
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Prakash Acharya</strong> is a Health Coach and Psycho-Yoga
              Therapist, as well as the Founder & CEO of The Lotus Room Studio. He holds a
              B.Sc in Yoga & Psychology, an MSc in Yogic Science, and is
              currently pursuing a PhD in Yoga & Mental Health. A National and
              State Yoga Champion, he has over 12 years of yoga practice
              experience.
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed">
              In 2018, he started his own company, The Lotus Room.
              He also mentors other Yoga Studios, with many currently operating
              under his guidance.
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed">
              His mission is to help people discover their inner energies and
              potential. He believes that by understanding themselves,
              individuals can better serve their families, communities, and even
              contribute to the betterment of the world. His vision is to ensure
              that the divine energy given to humans is not wasted but utilized
              for a greater purpose.
            </p>
          </div>
        </div>
      </div>
    );
}

export default AboutFounder;