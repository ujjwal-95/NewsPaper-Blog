import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 w-full bg-gray-800 text-white py-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Navigation Links */}
        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/" className="hover:underline">About Us</Link>
          <Link to="/" className="hover:underline">Contact Us</Link>
        </div>

        {/* Contact Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-500" />
          </a>
          <a href="/">
            <FaEnvelope className="text-2xl hover:text-red-400" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-4">
        © {new Date().getFullYear()} NewsHub. All Rights Reserved.
      </div>
    </footer>
  );
}
