import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg flex max-w-4xl w-full">
        {/* Left Section */}
        <div className="hidden md:flex md:w-1/2 bg-orange-500/85 rounded-l-lg items-center justify-center p-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2906/2906496.png"
            alt="Cartoon character with a helmet and a document"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Right Section */}
        <div className="w-full md:w-1/2 p-4 px-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-orange-500 font-semibold text-xl">
              The Lotus Room
            </h1>
          </div>
          <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
          <p className="text-gray-600 text-sm mb-3">
            Create an account to get started with The Lotus Room.
          </p>
          <form>
            <div className="mb-3">
              <label className="block text-gray-700 mb-2">Full Name:</label>
              <div className="flex items-center border rounded-lg px-3 py-2">
                <span className="material-symbols-outlined text-gray-400/50 mr-2">
                  person
                </span>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full outline-none"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 mb-2">Email:</label>
              <div className="flex items-center border rounded-lg px-3 py-2">
                <span className="material-symbols-outlined text-gray-400/50 mr-2">
                  email
                </span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 mb-2">Mobile Number:</label>
              <div className="flex items-center border rounded-lg px-3 py-2">
                <span className="material-symbols-outlined text-gray-400/50 mr-2">
                  phone
                </span>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full outline-none"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 mb-2">Password:</label>
              <div className="flex items-center border rounded-lg px-3 py-2">
                <span className="material-symbols-outlined text-gray-400/50 mr-2">
                  lock
                </span>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full outline-none"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 mb-2">Confirm Password:</label>
              <div className="flex items-center border rounded-lg px-3 py-2">
                <span className="material-symbols-outlined text-gray-400/50 mr-2">
                  lock
                </span>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full outline-none"
                />
              </div>
            </div>
            <button className="w-full bg-orange-500 hover:bg-white hover:text-orange-500 border border-orange-500 text-white py-2 rounded-lg mb-4 transition-all duration-300">
              Sign Up
            </button>
            <div className="text-center text-gray-500 mt-4">
              Already have an account?
              <a className="text-orange-500 underline underline-offset-2" href="/login">
                {" "}Login here
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
