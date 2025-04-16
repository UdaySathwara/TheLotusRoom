import React from "react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-[#1c1c1cf1] text-gray-300 pt-10 pb-4">
      <div className="container mx-auto lg:px-10 px-4 gap-2 grid grid-cols-1 lg:grid-cols-3 md:gap-6 lg:gap-10 text-center lg:text-left">
        {/* Logo & Description */}
        <div className="flex flex-col items-center lg:items-start lg:pr-16">
          <h2 className="text-xl font-bold text-orange-500">The Lotus Room</h2>
          <p className="mt-2  text-center px-8 md:px-16 lg:px-0 lg:text-left">
            Balance your body & mind with us. Join our yoga community today for
            a healthier and happier life. Our aim is to provide complete
            holistic health.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-2 lg:pr-16">
          <h3 className="text-lg font-semibold text-orange-500">Contact</h3>
          <p className="mt-2 text-center px-8 md:px-16 lg:text-left lg:px-0">
            <MapPin className="inline" /> 723 The Lotus Room, Science City,
            Ahmedabad, Gujarat 380060
          </p>
          <p className="text-center lg:text-left">
            <Phone className="inline" /> +91 9989725624
          </p>
          <p className="text-center lg:text-left">
            <Mail className="inline" />{" "}
            <a
              href="mailto:lotusroom@gmail.com"
              className="text-white hover:text-orange-500 underline underline-offset-4 ml-1"
            >
              lotusroom@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500 ">Follow Us</h3>
          <div className="flex justify-center lg:justify-start gap-3 mt-3">
            <a
              className="text-gray-400 hover:text-orange-500 mr-2"
              href="https://www.facebook.com/"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="text-gray-400 hover:text-orange-500 mx-2"
              href="https://twitter.com/"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="text-gray-400 hover:text-orange-500 mx-2"
              href="https://www.instagram.com/"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="text-gray-400 hover:text-orange-500 mx-2"
              href="https://www.youtube.com/"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-sm flex flex-col md:flex-row justify-between items-center px-6 text-center lg:text-left gap-3">
        <div className="hidden md:block text-center md:text-left text-gray-400">
          © {new Date().getFullYear()} The Lotus Room. All Rights Reserved.
        </div>
        <div className="flex flex-col md:flex-row md:gap-3 gap-2 text-center text-gray-400">
          <a
            href="/privacy-policy"
            className="hover:text-orange-400 transition underline underline-offset-2"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-and-conditions"
            className="hover:text-orange-400 transition underline underline-offset-2"
          >
            Terms & Conditions
          </a>
        </div>
        <div className="block md:hidden pb-2">
          © {new Date().getFullYear()} The Lotus Room. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
