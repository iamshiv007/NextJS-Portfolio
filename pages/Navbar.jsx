import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav
      className={`flex items-center justify-between py-4 px-8 h-[12vh]  ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      

      <div className="flex items-center">
        <button
          className={`p-2 ml-4 border-2 rounded-md focus:outline-none ${
            isDarkMode ? "text-white bg-blue-500" : "text-blue-500 bg-white"
          } hover:text-white hover:bg-blue-500 transition-colors duration-300`}
          onClick={toggleTheme}
        >
          {isDarkMode ? "Light" : "Dark"} Mode
        </button>

        <button
          className={`p-2 ml-4 border-2 rounded-md focus:outline-none ${
            isDarkMode ? "text-white bg-blue-500" : "text-blue-500 bg-white"
          } md:hidden hover:text-white hover:bg-blue-500 transition-colors duration-300`}
          onClick={toggleMenu}
        >
          Menu
        </button>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-white w-40 py-2 shadow-lg rounded-md">
            <a
              href="/"
              className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="/blogs"
              className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              Blogs
            </a>
            <a
              href="/about"
              className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/contact"
              className="block px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
