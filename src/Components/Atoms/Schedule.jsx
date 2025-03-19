import React, { useState } from "react";

function Schedule() {
  const [selectedClass, setSelectedClass] = useState("Hatha Yoga");

  const classes = {
    "Hatha Yoga": [
      { day: "Monday", time: "9:00 AM - 10:00 AM", instructor: "Deepak Kumar" },
      { day: "Wednesday", time: "9:00 AM - 10:00 AM", instructor: "Deepak Kumar" },
      { day: "Friday", time: "9:00 AM - 10:00 AM", instructor: "Deepak Kumar" },
    ],
    "Vinyasa Yoga": [
      { day: "Tuesday", time: "7:00 AM - 8:00 AM", instructor: "Anshika" },
      { day: "Thursday", time: "7:00 AM - 8:00 AM", instructor: "Anshika" },
    ],
    "Power Yoga": [
      { day: "Tuesday", time: "9:00 AM - 10:00 AM", instructor: "Kanak Sharma" },
      { day: "Thursday", time: "9:00 AM - 10:00 AM", instructor: "Kanak Sharma" },
    ],
    "Ashtanga Yoga": [
      { day: "Monday", time: "7:00 AM - 8:00 AM", instructor: "Anand Kumar" },
      { day: "Wednesday", time: "7:00 AM - 8:00 AM", instructor: "Anand Kumar" },
      { day: "Friday", time: "7:00 AM - 8:00 AM", instructor: "Anand Kumar" },
    ],
  };

  return (
    <div className="flex flex-col justify-center items-center p-2 min-h-[600px] bg-gray-50">
      <div className="space-y-2 p-6 text-center max-w-[600px] mx-auto mb-5 relative">
        <h1 className="uppercase font-semibold text-orange-600">GET TO KNOW</h1>
        <p className="font-semibold text-4xl pb-2">OUR CLASSES</p>
        <span className="text-center m-4">
            We offer a Time Table for people who want to learn Yoga Daily on Our </span> <span className="text-center px-1 font-semibold text-xl text-[#8e5d36]">Science City </span>Branch.
      </div>
      <div className="max-w-5xl w-full mx-auto p-4">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {Object.keys(classes).map((className) => (
            <button
              key={className}
              className={`px-4 py-2 border rounded-md text-sm font-semibold transition-all duration-300 ${
                selectedClass === className
                  ? "bg-[#8e5d36] text-white"
                  : "bg-orange-100 hover:bg-orange-200"
              }`}
              onClick={() => setSelectedClass(className)}
            >
              {className}
            </button>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Day</th>
                <th className="border border-gray-300 p-2">Time</th>
                <th className="border border-gray-300 p-2">Instructor</th>
              </tr>
            </thead>
            <tbody>
              {classes[selectedClass].map((session, index) => (
                <tr key={index} className="text-center h-20">
                  <td className="border border-gray-300 p-2">{session.day}</td>
                  <td className="border border-gray-300 p-2">{session.time}</td>
                  <td className="border border-gray-300 p-2">{session.instructor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
