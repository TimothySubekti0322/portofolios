// components/Timeline.tsx
import React, { useEffect } from "react";
import Image from "next/image";
import { roboto_mono } from "@/fonts";
import TimelineCard from "./timelineCard";
import Experiences from "@/static/experiences";
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init();
  },[]);
  return (
    <div className="relative w-full mt-8 md:mt-12 xl:mt-24 2xl:mt-32 px-[8%] pt-2 -pb-8">
      <div
        className="absolute w-1 h-full dark:bg-gray-300 bg-[#313A54] rounded-full ml-3 md:ml-4 xl:left-[50%] xl:right-[50%] xl:ml-0"
        data-aos="zoom-in"
        data-aos-duration="300"
      ></div>

      {/* Cards */}
      {Experiences.map((experience, index) => (
        <TimelineCard
          key={index}
          index={index}
          title={experience.title}
          company={experience.company}
          date={experience.date}
          description={experience.description}
        />
      ))}
    </div>
  );
};

export default Timeline;
