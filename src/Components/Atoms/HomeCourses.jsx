import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function HomeCourses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    message: "",
  });

  const courses = [
    {
      name: "Aerial Yoga Certification Course",
      time: "60 HRS",
      fees: "20000",
      schedule: "Monday - Friday",
      image:
        "https://images.pexels.com/photos/4324101/pexels-photo-4324101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      name: "Yoga Nindra Teacher Training Certification Course",
      time: "100 HRS",
      fees: "10000",
      schedule: "Monday - Friday",
      image:
        "https://images.pexels.com/photos/11387441/pexels-photo-11387441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const navigate = useNavigate();

  const openModal = (courseName) => {
    setSelectedCourse(courseName);
    setFormData({ ...formData, course: courseName });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, email, mobile, course, message } = formData;
    const whatsappNumber = "919316024754"; // Replace with your WhatsApp number
    const whatsappMessage = `Hello, I am interested in the ${course}.\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${
      message || "N/A"
    }`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
    closeModal();
  };

  return (
    <div>

      {/* Courses */}
      <div className="flex flex-col justify-center items-center pb-10 min-h-screen bg-gray-50 p-6">
        <span className="text-4xl mt-6 text-center font-medium">
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
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 duration-300"
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
                    <span className="material-symbols-outlined px-2">payments</span>
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
                <button
                  onClick={() => openModal(course.name)}
                  className="bg-[#eddbcc] text-black font-medium py-2 px-4 rounded-full hover:border border- border-[#dfb18c] hover:bg-white hover:border-[#dfb18c] hover:text-[#dfb18c] flex justify-center items-center"
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          className="bg-[#8e5d36] text-white py-2 px-4 rounded-full mt-8 mb-4 flex justify-center items-center hover:text-[#8e5d36] hover:bg-white border-2 border-[#8e5d36] font-medium"
          onClick={() => navigate("/courses")}
        >
          View All Courses
        </button>
      </div>

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg">
            {/* Modal Header */}
            <h2 className="text-xl font-medium font-serif text-black mb-6 text-left">
              Register Now
            </h2>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="text-black font-serif text-sm">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name Here"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-300 rounded-md focus:ring-1 mt-1 focus:ring-orange-500 focus:outline-none placeholder:text-sm"
                />
              </div>

              <div>
                <label className="text-black font-serif text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email Here"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-300 rounded-md focus:ring-1 mt-1 focus:ring-orange-500 focus:outline-none placeholder:text-sm"
                />
              </div>

              <div>
                <label className="text-black font-serif text-sm">
                  Mobile No
                </label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter Your Contact No"
                  value={formData.mobile}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  className="w-full p-2 border border-orange-300 rounded-md focus:ring-1 mt-1 focus:ring-orange-500 focus:outline-none placeholder:text-sm"
                />
              </div>

              <div>
                <label className="text-black text-sm  font-serif">
                  Course Name
                </label>
                <input
                  type="text"
                  name="course"
                  value={selectedCourse}
                  readOnly
                  className="w-full p-2 border border-orange-300 focus:ring-1 mt-1 focus:ring-orange-500 focus:outline-none bg-gray-100 rounded-md cursor-not-allowed text-sm"
                />
              </div>

              <div>
                <label className="text-black font-serif text-sm">Message</label>
                <textarea
                  name="message"
                  placeholder="Message (optional)"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-orange-300 rounded-md focus:ring-1 mt-1 focus:ring-orange-500 focus:outline-none placeholder:text-sm"
                  rows="3"
                ></textarea>
              </div>
            </div>

            {/* Buttons: Cancel (left) & Submit (right) */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={closeModal}
                className="px-8 py-2 hover:bg-red-600 text-red-600 rounded-md bg-white hover:text-white border border-red-500 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-white hover:text-orange-500 border border-orange-500 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeCourses;
