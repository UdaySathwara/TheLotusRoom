import React, { useState } from "react";
import BackToTop from "../Components/Atoms/BacktoTop";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, mobile, email, message } = formData;
    const phoneNumber = "919316024754"; // Replace with your WhatsApp number (with country code, no + sign)

    const whatsappMessage = `https://wa.me/${phoneNumber}?text=
      Name: ${encodeURIComponent(fullName)}
      %0AMobile: ${encodeURIComponent(mobile)}
      %0AEmail: ${encodeURIComponent(email)}
      %0AMessage: ${encodeURIComponent(message)}
      %0A"Please Response Back if possible"`;

    window.open(whatsappMessage, "_blank"); // Open WhatsApp

    setFormData({ fullName: "", mobile: "", email: "", message: "" }); // Clear form
  };

  const locations = [
    {
      name: "Science City",
      address: "723 The Lotus Room, Science City, Ahmedabad, Gujarat 380060.",
      phone: "+91-9989725624",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvsfp_Vsnla-q1gOmPGjKu7ItCrHNqUgQdbA&s",
    },
    {
      name: "Drive in Road",
      address:
        "201, Drive In Rd, opp. Doordarshan Tower, Ahmedabad, Gujarat 380052.",
      phone: "+91-9656897412",
      image:
        "https://i0.wp.com/westendyoga.org/wp-content/uploads/2022/11/DABA7C31-0CFC-404B-82CB-5F0331247AB5-edited.jpeg?resize=750%2C453&ssl=1",
    },
    {
      name: "Prahladnagar",
      address:
        "101, prahladnagar cross road, Corporate Rd, satellite, Ahmedabad, Gujarat 380015.",
      phone: "+91-898927729",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyf0r9421aSIqhcGdTuZElkH5gvlcvYPG87g&s",
    },
    {
      name: "Maninagar",
      address:
        "301, Guru Nanak  Complex, Maninagar, Ahmedabad, Gujarat 380008.",
      phone: "+91-9876543210",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAUG9GIDlOQDw8JiIdGmrUXwBt73wwVZjeQ0DoPXFLpmqVqnWwxOE1KaSYToDRm0ipjoM&usqp=CAU",
    },
  ];

  return (
    <div>
      <BackToTop />
      <section
        className="flex flex-col items-center justify-center text-center h-screen w-full bg-cover bg-center bg-no-repeat relative p-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1637157216470-d92cd2edb2e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-3xl px-4">
          <h2 className="text-4xl md:text-5xl font-medium text-white">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-white mt-4 font-serif">
            We would love to hear from you! Reach out to us through our contact.
          </p>
        </div>
      </section>

      {/* Yoga Studios */}
      <div className="bg-gray-50 py-16 p-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-green-500 material-symbols-outlined">
                    location_on
                  </span>
                </div>
                <h2 className="ml-4 text-xl font-semibold">{location.name}</h2>
              </div>
              <p className="text-gray-600 mb-4">{location.address}</p>
              <p className="text-green-500 mb-4 flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>
                {location.phone}
              </p>
              <img
                alt="People doing yoga in a spacious room with mats laid out on the floor"
                className="w-full rounded-lg h-48 object-cover"
                src={location.image}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-[#FDF2E7]  lg:px-10 p-4 md:px-10 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-6 text-[#955721]">Message Us</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  className="block text-sm font-bold text-orange-600 mb-2"
                  htmlFor="fullName"
                >
                  FULL NAME
                </label>
                <input
                  className="w-full border-b border-gray-300 py-2 focus:outline-none bg-[#fdf2e7]"
                  id="fullName"
                  placeholder="Name"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label
                  className="block text-sm font-bold text-orange-600 mb-2"
                  htmlFor="mobile"
                >
                  MOBILE
                </label>
                <input
                  className="w-full border-b border-gray-300 py-2 focus:outline-none bg-[#fdf2e7]"
                  id="mobile"
                  placeholder="Mobile"
                  type="text"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label
                className="block text-sm font-bold text-orange-600 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full border-b border-gray-300 py-2 focus:outline-none bg-[#fdf2e7]"
                id="email"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-bold text-orange-600 mb-2"
                htmlFor="message"
              >
                MESSAGE
              </label>
              <textarea
                className="w-full border-b border-gray-300 py-2 focus:outline-none bg-[#fdf2e7]"
                id="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
            <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded shadow-md hover:bg-white hover:border-green-500 hover:text-green-500 border focus:outline-none flex gap-4 justify-center items-center"
              >
                Send Via Whatsapp
                <img
                  src="https://img.icons8.com/?size=100&id=16712&format=png&color=40C057"
                  alt="Normal Icon"
                  className="w-8 h-8 duration-300 translate-all"
                />
                
              </button>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          <iframe
            className="w-full h-96 border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.83982197953503!2d72.51768146652125!3d23.07077690829009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9cb3002c1061%3A0xc37eb0df1ffa4b48!2sIsquare%20Corporate%20Park%2C%20Panchamrut%20Bunglows%20II%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat%20380059!5e0!3m2!1sen!2sin!4v1742366313748!5m2!1sen!2sin"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            title="Yoga Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
