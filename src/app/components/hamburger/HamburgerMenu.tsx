import React, { useState } from "react";
import "./HamburgerMenu.css"; // Import the CSS file

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuClick = (section: string) => {
    setIsOpen(false);
    window.location.href = `#${section}`;
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
            <button
              className="px-4 py-2 dark:text-black text-white hover:bg-[#333333] dark:hover:bg-gray-300 active:bg-[#333333] dark:active:bg-gray-200 rounded w-full flex justify-start"
              onClick={() => menuClick("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="px-4 py-2 dark:text-black text-white hover:bg-[#333333] dark:hover:bg-gray-300 active:bg-[#333333] dark:active:bg-gray-200 rounded w-full flex justify-start"
              onClick={() => menuClick("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className="px-4 py-2 dark:text-black text-white hover:bg-[#333333] dark:hover:bg-gray-300 active:bg-[#333333] dark:active:bg-gray-200 rounded w-full flex justify-start"
              onClick={() => menuClick("experiences")}
            >
              Experiences
            </button>
          </li>
          <li>
            <button
              className="px-4 py-2 dark:text-black text-white hover:bg-[#333333] dark:hover:bg-gray-300 active:bg-[#333333] dark:active:bg-gray-200 rounded w-full flex justify-start"
              onClick={() => menuClick("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="px-4 py-2 dark:text-black text-white hover:bg-[#333333] dark:hover:bg-gray-300 active:bg-[#333333] dark:active:bg-gray-200 rounded w-full flex justify-start"
              onClick={() => menuClick("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
