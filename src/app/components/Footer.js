import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Logo or Brand Name */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white">The Snow Guy</h2>
        </div>

        {/* Navigation Links */}
        <nav className="mb-6">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="/"
                className="text-gray-300 hover:text-gray-100 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-gray-300 hover:text-gray-100 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-300 hover:text-gray-100 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-300 hover:text-gray-100 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Information */}
        <div className="mb-6">
          <p>📞 (123) 456-7890</p>
          <p>📧 contact@thesnowguy.com</p>
          <p>🏢 Serving [Your Location]</p>
        </div>

        {/* Social Media Icons (Optional) */}
        <div className="mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-500 mx-2"
          >
            <i className="fab fa-facebook-f">FB</i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 mx-2"
          >
            <i className="fab fa-twitter">TW</i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-500 mx-2"
          >
            <i className="fab fa-instagram">IG</i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Snow Guy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;