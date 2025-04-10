import React from "react";
import { useNavigate } from "react-router-dom";

const OnlineClasses = () => {
  const yogaClasses = [
    {
      id: 1,
      title: "Morning Yoga",
      description:
        "Start your day with a refreshing yoga session to boost energy and mindfulness.",
      day: "Monday - Friday",
      time: "7:00 AM - 8:00 AM",
      type: "live",
      note: "Only for Members",
      link: "https://us05web.zoom.us/j/88154663668?pwd=ufbahi0XX1b2VBiucSqY2BHhaSfOxu.1",
    },
    {
      id: 2,
      title: "Evening Meditation",
      description: "Relax and unwind with a calming guided meditation session.",
      day: "Every Wednesday",
      time: "6:00 PM - 7:00 PM",
      type: "live",
      note: "Only for Members",
      link: "https://us05web.zoom.us/j/88154663668?pwd=ufbahi0XX1b2VBiucSqY2BHhaSfOxu.1",
    },
    {
      id: 3,
      title: "Power Yoga",
      description:
        "Unleash your inner power with power yoga techniques and poses.",
      day: "Every Monday",
      time: "9:00 AM - 10:00 AM",
      type: "live",
      note: "Only for Members",
      link: "https://us05web.zoom.us/j/88154663668?pwd=ufbahi0XX1b2VBiucSqY2BHhaSfOxu.1",
    },
  ];

  const navigate = useNavigate();
  const handleJoinClass = (link) => {
    window.open(link, "_blank"); // Open Zoom link in a new tab
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#EDDBCC] text-black pb-12 p-4 ">
      <div className="flex items-center justify-between lg:pb-6 pb-6 md:pb-6 p-4">
        <span
          className="material-symbols-outlined text-xl cursor-pointer xl:hidden "
          onClick={() => navigate(-1)}
        >
          arrow_back_ios
        </span>
        <h2 className="text-2xl font-semibold text-center flex-1 text-black">
          Online Classes
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl mb-6 md:mb-12 text-center max-w-xl">
          Join our online yoga classes and enhance your well-being.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {yogaClasses.map((yogaClass) => (
            <div
              key={yogaClass.id}
              className="p-6 bg-white rounded-md hover:shadow-lg transition-all border border-gray-200"
            >
              <h2 className="text-2xl font-semibold mb-3 text-orange-600">
                {yogaClass.title}
              </h2>
              <p className="text-gray-600 mb-4">{yogaClass.description}</p>
              <div className="mb-4">
                <p className="text-gray-700">
                  <strong>Day :</strong> {yogaClass.day}
                </p>
                <p className="text-gray-700">
                  <strong>Time:</strong> {yogaClass.time}
                </p>
                <p className="text-gray-700">
                  <strong>Type :</strong>
                  <span className="ml-2 font-semibold text-green-600">
                    Live
                  </span>
                </p>
                {yogaClass.note && (
                  <p className="text-gray-700">
                    <strong>Note :</strong> {yogaClass.note}
                  </p>
                )}
              </div>
              <button
                onClick={() => handleJoinClass(yogaClass.link)}
                className="w-full bg-[#8e5d36]/70 text-white font-semibold px-4 py-2 my-2 rounded-lg hover:bg-transparent hover:text-[#8e5d36] border border-[#8e5d36]/70 transition-all shadow-md"
              >
                Join Live Class
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineClasses;
