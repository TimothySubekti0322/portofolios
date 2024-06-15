import React, { useEffect } from "react";
import { roboto_mono } from "@/fonts";
import Timeline from "./timeline";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkExperienceSection = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div id="experiences" className="min-h-screen w-screen pt-28 md:pt-36">
      <p
        className={`text-center ${roboto_mono.className} font-bold text-xl md:text-3xl text-[#03B18D]`}
        data-aos="zoom-in-down"
      >
        WHAT I HAVE DONE
      </p>
      <p
        className={`text-center ${roboto_mono.className} font-bold text- md:text-3xl`}
        data-aos="zoom-in-down"
      >
        Working Experience
      </p>
      <Timeline />
    </div>
  );
};

export default WorkExperienceSection;
