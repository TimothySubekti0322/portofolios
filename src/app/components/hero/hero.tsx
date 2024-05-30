import React from "react";
import Image from "next/image";
import Timothy from "../../assets/timothy.png";
import { roboto_mono } from "../../fonts";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row-reverse items-center justify-center mt-24 xl:px-[7.5%] xl:gap-x-[12.5%] xl:h-screen xl:mt-0 xl:pt-20 2xl:pt-0">
      <Image
        src={Timothy}
        alt="Timothy"
        className="w-[80%] md:w-[60%] xl:w-[35%]"
      />
      <div className="flex flex-col items-center md:items-start">
        <p
          className={`mt-4 ${roboto_mono.className} font-semibold text-xl md:text-4xl xl:text-2xl 2xl:text-4xl`}
        >
          Hello, <span className="text-[#00BD95]">I&apos;m</span>
        </p>
        <p
          className={`text-[#00BD95] text-3xl font-bold ${roboto_mono.className} md:text-5xl md:mt-2 xl:text-3xl 2xl:text-5xl 2xl:mt-4`}
        >
          Timothy Subekti
        </p>
        <div
          className={`flex flex-row items-center ${roboto_mono.className} mt-2 font-medium md:text-2xl md:mt-4 xl:text-xl 2xl:text-3xl`}
        >
          <p className="mr-2">I Am</p>
          <TypewriterComponent
            options={{
              strings: ["Software Engineer", "Mobile Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="px-[10%] mt-8 md:mt-12 xl:mt-4 xl:px-0 2xl:mt-12">
          <p
            className={`text-justify text-sm ${roboto_mono.className} md:text-xl xl:text-sm 2xl:text-xl`}
          >
            I am an undergraduate student in Information Systems and Technology
            at the Bandung Institute of Technology (ITB), with a passion for
            software engineering and mobile development. Proficient in React
            Native, TypeScript, JavaScript, React.js, Next.js, Tailwind CSS, and
            Express.js, and experienced with Laravel and CodeIgniter, I excel in
            both backend and frontend development. Motivated to contribute to
            the tech industry and make a positive impact, also committed to
            continuous learning and professional growth.
          </p>
        </div>

        <button className="mt-8 md:mt-16 xl:mt-8 2xl:mt-14 rounded-lg w-[35%] py-3 md:py-5 xl:py-3 mb-10 xl:mb-0 transition-transform transform bg-[#00bd95] active:bg-[#009B73] active:translate-y-1 focus:outline-none shadow-md shadow-[#00bd95] font-medium md:text-xl xl:text-base 2xl:text-xl">
          My Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
