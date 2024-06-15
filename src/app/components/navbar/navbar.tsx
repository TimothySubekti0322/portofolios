import React, { useEffect, useState } from "react";
import Image from "next/image";
import HamburgerMenu from "@components/hamburger/HamburgerMenu";
import logo from "../../assets/logo.png";
import ThemeToggle from "../themeToggle/themeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full py-[3%] xl:py-2 px-[5%] flex items-center justify-between fixed z-10 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#00000D] bg-opacity-20 backdrop-blur-sm xl:backdrop-blur-md"
          : "bg-transparent xl:backdrop-blur-none"
      }`}
    >
      <a href="#about">
        <Image src={logo} alt="Logo" className="w-[20%] xl:w-16" />
      </a>
      <div className="flex-row items-center hidden xl:flex xl:gap-x-12 ">
        <a
          className="dark:text-white text-[#21272F] text-lg 2xl:text-xl hover:text-[#00BD95] dark:hover:text-[#00BD95] font-semibold"
          href="#about"
        >
          About
        </a>
        <a
          className="dark:text-white text-[#21272F] text-lg 2xl:text-xl hover:text-[#00BD95] dark:hover:text-[#00BD95] font-semibold"
          href="#skills"
        >
          skills
        </a>
        <a
          className="dark:text-white text-[#21272F] text-lg 2xl:text-xl hover:text-[#00BD95] dark:hover:text-[#00BD95] font-semibold"
          href="#experiences"
        >
          experiences
        </a>
        <a
          className="dark:text-white text-[#21272F] text-lg 2xl:text-xl hover:text-[#00BD95] dark:hover:text-[#00BD95]  font-semibold"
          href="#projects"
        >
          projects
        </a>
        <a
          className="dark:text-white text-[#21272F] text-lg 2xl:text-xl hover:text-[#00BD95] dark:hover:text-[#00BD95]  font-semibold"
          href="#contact"
        >
          contact
        </a>
      </div>
      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
