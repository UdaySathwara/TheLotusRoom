import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Trainer(props) {
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
        "https://userphotos2.teacheron.com/1200896-29207.jpg",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9tKGPdVO0KK6VcuMKq-MifBvKCdjHc9AYQ&s",
    },
    {
      name: "Shyam Sharma",
      role: "Trainer/Teacher",
      degree: "Msg in yoga UGC net Qualified in yoga",
      experience: "11+ years",
      description: "Hath Yoga, Meditation",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgR5bSDEUGYY3C8LcbyJMwZWiMBLfAV2wNw&s",
    },
    {
      name: "Dr. Indu Saxsena",
      role: "Trainer/Teacher",
      degree: "PhD in yoga, MA in yoga, PG diploma from Dev Sanskrit Vishwavidyalaya",
      experience: "20+ years",
      description: "Hatha Yoga",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQVWfSdt-BFU7PFn7xHjpi0PJtKxlCUPK8cQ&s",
    },
    {
      name: "Jagruti Solanki",
      role: "Trainer/Teacher",
      degree: "B.COM., 500 HRS. YTTC., 85 HRS-RYPS",
      experience: "5+ years",
      description: "YOGA, ZUMBA, PRENATAL & POST NATAL YOGA",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBIWUkusiYgD5sTm7gmMuMwi8civC_B14ZPQJy9eKf11e9xO28DiOjAjswVaS1r-BwFJs&usqp=CAU",
    },
    {
      name: "Jigar Patel",
      role: "Trainer/Teacher",
      degree: "RYT 200, YIC 300",
      experience: "Fresher",
      description: "EXPERT IN GENERAL FITNESS YOGA",
      image:
        "https://userphotos2.teacheron.com/2458528-08140.png",
    },
    {
      name: "Vinayak Jha",
      role: "Trainer/Teacher",
      degree: "B.Sc. SCIENCE",
      experience: "6+ months",
      description: "ASHTANGA AND HATHA YOGA",
      image:
        "https://img.freepik.com/free-photo/front-view-man-meditating-outdoors_23-2148988371.jpg",
    },
    {
      name: "Laxmi Adhikari",
      role: "Trainer/Teacher",
      degree: "B.sc in yoga , M.sc in yoga, UGC net Qualified in yoga",
      experience: "11+ years",
      description: "Ashtanga Yoga",
      image:
        "https://userphotos2.teacheron.com/1910725-68946.jpg",
    },
    {
      name: "Archana Rajput",
      role: "Trainer/Teacher",
      degree: "M.A.in Yogic Science, MPhil in Yoga",
      experience: "6+ years",
      description: "Advance yoga classes & Hath yoga & yoga flow",
      image:
        "https://alayayoga.in/wp-content/uploads/2021/12/Alaya-Yoga-Teachers_Nithya.jpg",
    },
    {
      name: "Kanak Sharma",
      role: "Trainer/Teacher",
      degree: "M.A in yogic science, MPhil in yoga",
      experience: "15+ years",
      description: "Weight Loss Yoga, Power Yoga, Props Yoga",
      image:
        "https://www.shutterstock.com/image-photo/beautiful-indian-woman-practicing-yoga-260nw-2324067555.jpg",
    },
  ];

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <>

      <section
        className="flex flex-col items-center justify-center text-center h-screen w-full bg-cover bg-center bg-no-repeat relative p-6"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6339390/pexels-photo-6339390.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4">
          <h2 className="text-4xl md:text-5xl font-medium text-white">
            Our Best trainer
          </h2>
          <p className="text-lg md:text-xl text-white mt-4 font-serif">
            We have a team of experienced trainers who can help you achieve your
            health and fitness goals.
          </p>
        </div>
      </section>

      <div className="flex flex-col justify-center items-center p-10 min-h-[700px] bg-[#eddbcc]">
        <div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className=" p-6 text-center max-w-[600px] mx-auto mb-5">
          <p className="font-semibold text-4xl">Meet the Experts</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mt-10  max-w-7xl w-full mx-auto">
          {trainers.map((trainer, index) => (
            <div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }} 
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden p-4 text-center"
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-64 mx-auto rounded-xl object-cover"
              />
              <h4 

              className="text-lg font-semibold mt-4">{trainer.name}</h4>
              <p className="text-gray-600 mt-4">{trainer.role}</p>
              <p className="text-gray-600">{trainer.degree}</p>
              <p className="text-gray-600">{trainer.experience}</p>
              <p className="text-gray-600 mt-4">{trainer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Trainer;
