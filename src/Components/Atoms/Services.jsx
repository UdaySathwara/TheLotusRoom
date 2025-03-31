import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Outdoor Activities",
      description:
        "We organize yoga & health workshops in corporate settings, customized to audience levels to improve social, mental and physical health.",
      icon: "https://cdn-icons-png.flaticon.com/512/3221/3221191.png",
      bgColor: "bg-blue-300",
    },
    {
      id: 2,
      title: "Professional Courses",
      description:
        "We offer various yoga courses for professionals and students, customized to help in career growth and personal development.",
      icon: "https://cdn-icons-png.flaticon.com/512/11448/11448752.png",
      bgColor: "bg-green-300",
    },
    {
      id: 3,
      title: "Career Counseling",
      description:
        "We offer career counseling opportunities to help candidates boost their career growth.",
      icon: "https://cdn-icons-png.flaticon.com/512/1589/1589131.png",
      bgColor: "bg-orange-300",
    },
    {
      id: 4,
      title: "Organize Events",
      description:
        "We organize state, national, and international level events where participants can showcase their talent and win prizes & certificates.",
      icon: "https://cdn-icons-png.flaticon.com/512/812/812032.png",
      bgColor: "bg-pink-300",
    },
  ];

  return (
    <div className="mx-auto p-10 md:p-20 min-h-[600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 justify-center items-center bg-gray-50">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4 text-center h-[350px]"
        >
          <img
            src={service.icon}
            alt={service.title}
            className={`${service.bgColor} p-4 rounded-full size-20`}
          />
          <span className="text-2xl">{service.title}</span>
          <span className="text-gray-600 px-4">{service.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Services;
