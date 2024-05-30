import React, { useEffect, useState } from "react";
import Image from "next/image";
import HamburgerMenu from "@components/hamburger/HamburgerMenu";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY); // Log the current scroll position
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full py-[5%] px-[5%] flex items-center justify-between fixed xl:py-4 xl:bg-[#00050D] xl:bg-opacity-5 xl:backdrop-blur-md">
      <button>
        <Image
          src={logo}
          alt="Logo"
          width={50}
          height={50}
          className="w-[15%] xl:w-16"
        />
      </button>
      <div className="flex-row items-center hidden xl:flex xl:gap-x-12">
        <a className="text-lg hover:text-[#00BD95]" href="#about">
          about
        </a>
        <a className="text-lg hover:text-[#00BD95]" href="#skills">
          skills
        </a>
        <a className="text-lg hover:text-[#00BD95]" href="#experiences">
          experiences
        </a>
        <a className="text-lg hover:text-[#00BD95]" href="#projects">
          projects
        </a>
        <a className="text-lg hover:text-[#00BD95]" href="#contact">
          contact
        </a>
      </div>
      <HamburgerMenu />
    </div>
  );
};

export default Navbar;
