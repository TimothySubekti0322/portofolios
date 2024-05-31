import React from "react";
import { roboto_mono } from "@/fonts";
import Timeline from "./timeline";

const WorkExperienceSection = () => {
  return (
    <div className="min-h-screen w-screen pt-28 md:pt-36">
      <p
        className={`text-center ${roboto_mono.className} font-bold text-xl md:text-3xl text-[#03B18D]`}
      >
        WHAT I HAVE DONE
      </p>
      <p
        className={`text-center ${roboto_mono.className} font-bold text- md:text-3xl`}
      >
        Working Experience
      </p>
      <Timeline />
    </div>
  );
};

export default WorkExperienceSection;
