import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./Firebase";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import navigation hooks

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Check user state on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // Redirect only if user is coming from another page
      if (currentUser && location.state?.from) {
        navigate(from, { replace: true });
      }
    });

    return () => unsubscribe();
  }, [navigate, from, location.state]);

  // Google Sign-In Function
  const signinWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      console.log("User signed in:", result.user);
      navigate(-1, { replace: true }); // Always redirect to home screen
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  // Logout Function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row max-w-4xl w-full">
        {/* Left Section - Hidden on small screens */}
        <div className="hidden md:flex md:w-1/2 bg-orange-500/85 rounded-t-lg md:rounded-l-lg md:rounded-tr-none items-center justify-center p-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2906/2906496.png"
            alt="Cartoon character"
            className="w-3/4 h-auto object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-orange-500 font-medium text-2xl  md:text-2xl mb-6 ">
            The Lotus Room
          </h1>
          {user ? (
            <div className="flex flex-col items-center">
              <img
                src={
                  user.photoURL ||
                  `https://ui-avatars.com/api/?name=${user.displayName}&background=random&color=random&length=1`
                }
                alt="User Profile"
                className="w-16 h-16 rounded-full mx-auto mb-4 shadow-md"
              />
              <h2 className="text-xl font-semibold">{user.displayName}</h2>
              <p className="text-gray-600">{user.email}</p>
              <button
                className="mt-4 bg-red-500 hover:bg-white text-white hover:text-red-500 border border-red-500 px-5 py-2  transition duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={signinWithGoogle}
              className="bg-white border border-orange-300 hover:bg-orange-100 text-black/70 font-medium py-2 px-6 rounded-lg w-full flex items-center justify-center transition duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
                alt="Google Logo"
                className="h-5 w-5 mr-2"
              />
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
