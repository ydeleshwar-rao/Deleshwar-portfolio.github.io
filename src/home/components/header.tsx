import React, { useState } from 'react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { href: "#about", label: "About", icon: "👤", color: "from-cyan-400 to-blue-500" },
    { href: "#work", label: "Work", icon: "💼", color: "from-pink-400 to-fuchsia-500" },
    { href: "#contact", label: "Contact", icon: "📱", color: "from-green-400 to-lime-400" },
  ];

  return (
    <header className="relative z-50">
      <div className="flex justify-between items-center bg-transparent py-4 px-8">
        <div className="flex items-center">
          <a 
            href="https://www.linkedin.com/in/y-deleshwar-rao/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center group"
          >
            <div className="relative">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D35AQG_SiBW2Zh3HQ/profile-framedphoto-shrink_400_400/B4DZds.vXmG8Ac-/0/1749880076051?e=1753538400&v=beta&t=8vHryxCXN7IDZNSrX9vdEwQpd6SKh5XjH8UqZ-b5W20" 
                alt="LinkedIn Profile" 
                className="h-10 w-10 rounded-full mr-3 border-2 border-white transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/30"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl relative text-white no-underline transition-all duration-300 hover:text-cyan-400 group font-semibold">
              Y Deleshwar Rao
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
        </div>

        {/* Enhanced Hamburger Icon */}
        <button
          className="md:hidden relative w-10 h-10 text-white focus:outline-none group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <svg className="w-8 h-8 transition-transform duration-300 ease-in-out" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              className="transition-all duration-300"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 list-none m-0 p-0">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="relative text-white no-underline transition-colors duration-300 hover:text-cyan-400 group font-medium"
                >
                  {item.label}
                  <span className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r ${item.color} transition-all duration-300 group-hover:w-full`}></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Enhanced Mobile Menu - Dropdown Style */}
      <nav className={`absolute top-full left-0 right-0 bg-[#14102c] backdrop-blur-xl border border-white/10 shadow-2xl mx-4 rounded-2xl overflow-hidden transform transition-all duration-500 ease-out md:hidden ${
        menuOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
      }`}>
        {/* Menu Items */}
        <ul className="flex flex-col list-none m-0 p-4">
          {menuItems.map((item, index) => (
            <li key={index} className={`transform transition-all duration-500 ease-out ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: `${index * 100 + 200}ms` }}>
              <a 
                href={item.href} 
                className="group flex items-center gap-3 p-3 rounded-xl text-white no-underline transition-all duration-300 hover:bg-white/10 hover:transform hover:scale-105 border border-transparent hover:border-white/20"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
                <div className="flex-1">
                  <span className="text-base font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-purple-400 transition-all duration-300">
                    {item.label}
                  </span>
                  <div className={`h-0.5 w-0 bg-gradient-to-r ${item.color} transition-all duration-300 group-hover:w-full mt-1`}></div>
                </div>
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;