import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import { roboto_mono } from "@/fonts";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className={`footer dark:bg-[#13171f] bg-[#313A54] text-white  ${roboto_mono.className}`}
    >
      <div className="xl:flex flex-row justify-center gap-x-[20%] px-10 pt-10 xl:pb-10">
        <div>
          <div className="flex flex-row items-center">
            <Image src={logo} alt="logo" className="w-16 h-16 -ml-4" />
            <p className="font-bold text-xl">Timothy Subekti</p>
          </div>
          <p className="mt-2 xl:mt-1">Get in Touch with me</p>
          <p className="mt-1">velmothy14@gmail.com</p>
        </div>
        <div>
          <p className="mt-4 text-[#47ceb3] font-bold text-lg xl:mt-0">
            Social Media
          </p>

          <a
            href="https://github.com/TimothySubekti0322"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center mt-4 focus:text-[#47ceb3]"
          >
            <FaGithub className="text-2xl mr-2 w-6 h-6" />
            <p className="hover:text-[#47ceb3]">TimothySubekti0322</p>
          </a>
          <a
            href="https://www.instagram.com/timothy.subekti/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center mt-4 focus:text-[#47ceb3]"
          >
            <FaInstagram className="text-2xl mr-2 w-6 h-6" />
            <p className="hover:text-[#47ceb3]">@timothy.subekti</p>
          </a>
          <a
            href="https://www.linkedin.com/in/timothy-subekti/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center mt-4 focus:text-[#47ceb3]"
          >
            <FaLinkedin className="text-2xl mr-2 w-6 h-6" />
            <p className="hover:text-[#47ceb3]">timothy-subekti</p>
          </a>
        </div>
      </div>
      <div className="border-t-2 border-[#888888] mt-6 flex items-center justify-center py-4 w-full xl:w-fit">
        © Copyright 2024 / Timothy
      </div>
    </footer>
  );
};

export default Footer;
