import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ user, handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path) =>
    location.pathname === path ? "underline underline-offset-8" : "";

  const handleLogoutClick = () => {
    handleLogout(); // Call the logout function
    setIsLogoutModalOpen(false); // Ensure modal closes after logout
  };

  return (
    <>
      <nav className="py-6 px-4 absolute top-0 w-full z-50 bg-[#000000] lg:bg-transparent md:bg-transparent">
        <div className="container mx-auto flex items-center justify-between md:justify-center gap-12 md:gap-6 relative">
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
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>

          {/* Left Navigation Links */}
          <div className="hidden md:flex justify-center items-center space-x-6 md:space-x-5">
            <Link
              to="/about"
              className={`text-white hover:text-gray-300 ${isActive("/about")}`}
            >
              About
            </Link>
            <Link
              to="/trainer"
              className={`text-white hover:text-gray-300 ${isActive(
                "/trainer"
              )}`}
            >
              Trainer
            </Link>
            <Link
              to="/classes"
              className={`text-white hover:text-gray-300 ${isActive(
                "/classes"
              )}`}
            >
              Classes
            </Link>
          </div>

          {/* Logo in Center */}
          <div className="hidden md:flex text-center bg-white p-2 rounded-full justify-center items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              <img
                src="https://cdn-icons-png.flaticon.com/512/10077/10077968.png"
                alt="Logo"
                className="size-8"
              />
            </Link>
          </div>

          {/* Right Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center md:space-x-5">
            <Link
              to="/courses"
              className={`text-white hover:text-gray-300 ${isActive(
                "/courses"
              )}`}
            >
              Courses
            </Link>
            <Link
              to="/shop"
              className={`text-white hover:text-gray-300 ${isActive("/shop")}`}
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className={`text-white hover:text-gray-300 ${isActive(
                "/contact"
              )}`}
            >
              Contact
            </Link>
          </div>

          {/* Profile/Login Section */}
          <div className="absolute right-0 flex items-center">
            {user ? (
              <div className="relative">
                {/* Profile Image Dropdown */}
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

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-4 w-48 bg-white shadow-lg rounded-lg py-2">

                    <Link
                      to="/login"
                      className="px-4 py-2 text-gray-800 font-medium flex gap-2 hover:bg-gray-100"
                    >
                      <span className="material-symbols-outlined">person</span>
                      {user.displayName}
                    </Link>

                    <Link
                      to="/yoga-library"
                      className="px-4 py-2 text-gray-800 font-medium flex gap-2 hover:bg-gray-100"
                    >
                      <span className="material-symbols-outlined">book</span>
                      Yoga Library
                    </Link>
                    <Link
                      to="/progress-tracker"
                      className="px-4 py-2 text-gray-800 font-medium flex gap-2 hover:bg-gray-100"
                    >
                      <span className="material-symbols-outlined">
                        bar_chart
                      </span>
                      Your Progress
                    </Link>
                    <Link
                      to="/my-orders"
                      className="px-4 py-2 text-gray-800 font-medium flex gap-2 hover:bg-gray-100"
                    >
                      <span className="material-symbols-outlined">
                        shopping_bag
                      </span>
                      My Orders
                    </Link>
                    <button
                      onClick={() => setIsLogoutModalOpen(true)}
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
                className="bg-transparent border-2 text-white px-6 py-2 shadow-md hover:text-green-500 hover:border-green-500 hover:bg-gray-200/10 transition font-medium">
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-black flex flex-col items-center space-y-4 p-6 w-full absolute left-0 top-16 z-50">
            <Link
              to="/"
              className={`text-white hover:text-gray-300 ${isActive("/about")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-white hover:text-gray-300 ${isActive("/about")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/trainer"
              className={`text-white hover:text-gray-300 ${isActive(
                "/trainer"
              )}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Trainer
            </Link>
            <Link
              to="/classes"
              className={`text-white hover:text-gray-300 ${isActive(
                "/classes"
              )}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Classes
            </Link>
            <Link
              to="/courses"
              className={`text-white hover:text-gray-300 ${isActive(
                "/courses"
              )}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/shop"
              className={`text-white hover:text-gray-300 ${isActive("/shop")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className={`text-white hover:text-gray-300 ${isActive(
                "/contact"
              )}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <p className="text-lg px-10 text-center">
              Are you sure you want to logout?
            </p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={handleLogoutClick} // Use the fixed function
                className="bg-red-500 hover:bg-white text-white border border-red-500 hover:text-red-500 px-4 py-2 rounded-lg transition"
              >
                Logout
              </button>
              <button
                onClick={() => setIsLogoutModalOpen(false)}
                className="bg-gray-300 border-gray-300 border text-black hover:bg-white px-4 py-2 rounded-lg transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
