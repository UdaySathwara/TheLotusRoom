import React from "react";

const ForgotPassword = () => {
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
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-orange-500 font-semibold text-xl">
              The Lotus Room
            </h1>
          </div>
          <h2 className="text-2xl font-semibold mb-6">Forgot Account</h2>
          <p className="text-gray-600 mb-4">
            Enter your email address and we'll send you a link to reset your password.
          </p>
          <form>
            <div className="mb-4">
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
            <button className="w-full bg-orange-500 hover:bg-white hover:text-orange-500 border border-orange-500 text-white py-2 rounded-lg mb-4 transition-all duration-300">
              Send Reset Link
            </button>
            <div className="text-center text-gray-500 mt-4">
              Remember your password?
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

export default ForgotPassword;
