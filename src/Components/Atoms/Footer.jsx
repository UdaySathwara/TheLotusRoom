export default function Footer() {
  return (
    <footer className="bg-[#1c1c1cf1] text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-8 text-center md:text-left md:grid-cols-5 md:gap-4">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">The Lotus Room</h2>
          <p className="mt-2 pr-10 text-left">
            Balance your body & mind with us. Join our yoga community today for
            a healthier and happier life. Our aim is to provide complete
            holistic health.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="hover:text-orange-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/trainer" className="hover:text-orange-400 transition">
                Trainer
              </a>
            </li>
            <li>
              <a href="/classes" className="hover:text-orange-400 transition">
                Classes
              </a>
            </li>
            <li>
              <a href="/courses" className="hover:text-orange-400 transition">
                Courses
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-orange-400 transition">
                Shop
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-orange-500">Company</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-orange-400 transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-and-conditions"
                className="hover:text-orange-400 transition"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-orange-500">Contact Us</h3>
          <p className="mt-2 pr-8">
            📍 723 The Lotus Room, Science City, Ahmedabad, Gujarat 380060{" "}
          </p>
          <p>📞 +91 9989725624</p>
          <p>
            ✉️{" "}
            <a
              href="mailto:lotusroom@gmail.com"
              className="text-white hover:text-orange-500 hover:underline underline-offset-4 ml-1"
            >
              lotusroom@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-orange-500">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-3 mt-3">
            <a
              className="text-gray-400 hover:text-orange-500 mx-2"
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
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} The Lotus Room. All Rights Reserved.
      </div>
    </footer>
  );
}
