export default function Footer() {
    return (
      <footer className="bg-[#1c1c1cf1] text-gray-300 py-10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-orange-500">The Lotus Room</h2>
            <p className="mt-2 pr-10 text-left">
              Balance your body & mind with us. Join our yoga community today for a healthier and happier life.
              Our aim is to provide complete holistic health.</p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-orange-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">About</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Trainer</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Classes</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Courses</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Events</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-orange-500">Contact Us</h3>
            <p className="mt-2 pr-8">📍 723 The Lotus Room, Science City, Ahmedabad, Gujarat 380060 </p>
            <p>📞 +91 9989725624</p>
            <p>✉️ lotusroom@gmail.com</p>
          </div>
  
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-orange-500">Follow Us</h3>
            <div className="flex justify-center md:justify-start gap-3 mt-3">
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/15047/15047435.png" alt="Facebook" className="w-8 h-8 object-cover" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" alt="Instagram" className="w-8 h-8 object-cover" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png" alt="Twitter" className="w-8 h-8 object-cover" /></a>
              <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png" alt="YouTube" className="w-8 h-8 object-cover" /></a>
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
  