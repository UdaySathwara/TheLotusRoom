import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-3 absolute top-0 w-full z-50 bg-black lg:bg-transparent md:bg-transparent">
      <div className="container mx-auto flex items-center  md:justify-center justify-between gap-12 md:gap-6">
        {/* Left Links */}
        <div className="hidden md:flex justify-center items-center space-x-6 md:space-x-5">
          <Link
            to="/about"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8 "
          >
            About
          </Link>
          <Link
            to="/trainer"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8 "
          >
            Trainer
          </Link>
          <Link
            to="/classes"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8 "
          >
            Classes
          </Link>
        </div>

        {/* Logo in Center */}
        <div className="text-center bg-white p-2 rounded-full flex justify-center items-center">
          <Link to="/" className="text-white text-2xl font-bold">
            <img
              src="https://cdn-icons-png.flaticon.com/512/10077/10077968.png"
              alt="Logo"
              className="size-8"
            />
          </Link>
        </div>

        {/* Right Links + Login Button */}
        <div className="hidden md:flex space-x-6 items-center md:space-x-5">
          <Link
            to="/courses"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8 "
          >
            Courses
          </Link>
          <Link
            to="/shop"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8 "
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8 "
          >
            Contact
          </Link>
          {/* Login Button (Hidden on Small & Medium Screens) */}
          <Link
            to="/login"
            className="hidden md:flex md:right-4 bg-transparent border-2 text-white px-8 py-2 md:px-6 shadow-md hover:text-green-500 hover:border-green-500  hover:bg-gray-200/10 transition absolute right-12 font-medium">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
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
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-black flex flex-col items-center space-y-4 p-6 w-full absolute left-0">
          <Link
            to="/about"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8 "
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/trainer"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8 "
            onClick={() => setIsMenuOpen(false)}
          >
            Trainer
          </Link>
          <Link
            to="/classes"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8 "
            onClick={() => setIsMenuOpen(false)}
          >
            Classes
          </Link>
          <Link
            to="/courses"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8 "
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </Link>
          <Link
            to="/shop"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8 "
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-300 hover:underline hover:underline-offset-8 "
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          {/* Login Button in Mobile Menu */}
          <Link
            to="/login"
            className="bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
