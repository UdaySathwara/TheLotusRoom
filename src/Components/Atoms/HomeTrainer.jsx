import React from "react";
import { Link, useNavigate } from "react-router-dom";

function HomeTrainer() {
  const navigate = useNavigate();
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
    <div>
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
        <button
          className="bg-[#8e5d36] text-white py-2 px-4 rounded-full mt-16 mb-8 flex justify-center items-center hover:text-[#8e5d36] hover:bg-white border-2 border-[#8e5d36] font-medium"
          onClick={() => navigate("/trainer")}
        >
          View All Trainers
        </button>
      </div>
    </div>
  );
}

export default HomeTrainer;
