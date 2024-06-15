import React, { useState } from "react";
import "./HamburgerMenu.css"; // Import the CSS file

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu-container">
      <button
        className={`hamburger-button ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="hamburger-line dark:bg-white bg-black"></span>
        <span className="hamburger-line dark:bg-white bg-black"></span>
        <span className="hamburger-line dark:bg-white bg-black"></span>
      </button>
      <nav
        className={`absolute top-[50px] md:top-[60px] right-0 mt-2 w-48 md:w-64 dark:bg-white bg-black shadow-lg rounded-md transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2 md:text-2xl md:space-y-3">
          <li>
            <a
              href="#about"
              className="block px-4 py-2 dark:text-black text-white hover:bg-gray-200 rounded"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block px-4 py-2 dark:text-black text-white hover:bg-gray-200 rounded"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#experiences"
              className="block px-4 py-2 dark:text-black text-white hover:bg-gray-200 rounded"
            >
              Experiences
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block px-4 py-2 dark:text-black text-white hover:bg-gray-200 rounded"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-4 py-2 dark:text-black text-white hover:bg-gray-200 rounded"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
