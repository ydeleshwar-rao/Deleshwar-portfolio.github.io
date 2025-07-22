import React, { useState } from 'react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="flex justify-between items-center bg-transparent py-4 px-8">
        <div className="flex items-center">
          {/* <img src="/logo.png" alt="Logo" className="h-10 mr-3" /> */}
               <a 
          href="https://www.linkedin.com/in/y-deleshwar-rao/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img 
            src="https://media.licdn.com/dms/image/v2/D4D35AQG_SiBW2Zh3HQ/profile-framedphoto-shrink_400_400/B4DZds.vXmG8Ac-/0/1749880076051?e=1753538400&v=beta&t=8vHryxCXN7IDZNSrX9vdEwQpd6SKh5XjH8UqZ-b5W20" 
            alt="LinkedIn Profile" 
            className="h-10 w-10 rounded-full mr-3 border border-white"
          />
        </a>
            <span className='w-5'></span>
                 <a 
          href="https://www.linkedin.com/in/y-deleshwar-rao/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <span className=" text-2xl relative text-white no-underline transition-colors duration-300 hover:text-cyan-400 group">Y Deleshwar Rao     
          </span></a>
        </div>
        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none m-0 p-0">
            <li>
              <a
              href="#about"
              className="relative text-white no-underline transition-colors duration-300 hover:text-cyan-400 group"
              >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
              href="#work"
              className="relative text-white no-underline transition-colors duration-300 hover:text-pink-400 group"
              >
              Work
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-fuchsia-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
              href="#contact"
              className="relative text-white no-underline transition-colors duration-300 hover:text-green-400 group"
              >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-green-400 to-lime-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-900">
          <ul className="flex flex-col gap-4 list-none m-0 p-4">
            <li>
              <a href="#about" className="text-white no-underline hover:underline" onClick={() => setMenuOpen(false)}>About</a>
            </li>
            <li>
              <a href="#work" className="text-white no-underline hover:underline" onClick={() => setMenuOpen(false)}>Work</a>
            </li>
            <li>
              <a href="#contact" className="text-white no-underline hover:underline" onClick={() => setMenuOpen(false)}>Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
