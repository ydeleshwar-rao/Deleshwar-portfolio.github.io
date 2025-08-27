import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14102c] text-gray-300 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side */}
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>

        {/* Right Side - Social Links */}
        <div className="flex space-x-5 text-xl">
          <a
            href="https://www.linkedin.com/in/y-deleshwar-rao/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ydeleshwar-rao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://huggingface.co/ydeleshwarrao"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <SiHuggingface />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/7000918835" // <-- apna number dalna hai
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
