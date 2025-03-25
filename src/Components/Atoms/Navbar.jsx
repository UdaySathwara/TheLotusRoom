import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-6 px-4 absolute top-0 w-full z-50 bg-[#000000] lg:bg-transparent md:bg-transparent">
      <div className="container mx-auto flex items-center justify-between md:justify-center gap-12 md:gap-6 relative">
        {/* Mobile Menu Button on Left Side */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>

        {/* Left Links */}
        <div className="hidden md:flex justify-center items-center space-x-6 md:space-x-5">
          <Link
            to="/about"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8"
          >
            About
          </Link>
          <Link
            to="/trainer"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8"
          >
            Trainer
          </Link>
          <Link
            to="/classes"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8"
          >
            Classes
          </Link>
        </div>

        {/* Logo in Center (Hidden on Mobile) */}
        <div className="hidden md:flex text-center bg-white p-2 rounded-full justify-center items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            <img
              src="https://cdn-icons-png.flaticon.com/512/10077/10077968.png"
              alt="Logo"
              className="size-8"
            />
          </Link>
        </div>

        {/* Right Links */}
        <div className="hidden md:flex space-x-6 items-center md:space-x-5">
          <Link
            to="/courses"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8"
          >
            Courses
          </Link>
          <Link
            to="/shop"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8"
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8"
          >
            Contact
          </Link>
        </div>

        {/* Profile/Login on Right Side (Fixed) */}
        <div className="absolute right-0 pr-2 flex items-center">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2"
              >
                <img
                  src={
                    user.photoURL ||
                    `https://ui-avatars.com/api/?name=${user.displayName}&background=random`
                  }
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-[#edccda] object-cover"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-4 w-48 bg-white shadow-lg rounded-lg py-2">
                  <p className="px-4 py-2 text-gray-800 font-medium flex gap-2 hover:bg-gray-100">
                    <span className="material-symbols-outlined">person</span>
                    {user.displayName}
                  </p>

                  <Link
                    to="/yoga-library"
                    className="px-4 py-2 text-gray-800 font-medium flex gap-2 hover:bg-gray-100"
                  >
                    <span className="material-symbols-outlined">book</span>
                    Yoga Library
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 flex gap-2"
                  >
                    <span className="material-symbols-outlined">logout</span>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-transparent border-2 text-white px-8 py-2 shadow-md hover:text-green-500 hover:border-green-500 hover:bg-gray-200/10 transition font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-black flex flex-col items-center space-y-4 p-6 w-full absolute left-0 top-16 z-50">
          <Link
            to="/"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/trainer"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8"
            onClick={() => setIsMenuOpen(false)}
          >
            Trainer
          </Link>
          <Link
            to="/classes"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8"
            onClick={() => setIsMenuOpen(false)}
          >
            Classes
          </Link>
          <Link
            to="/courses"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8"
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </Link>
          <Link
            to="/shop"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
