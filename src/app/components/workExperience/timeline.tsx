// components/Timeline.tsx
import React from "react";
import Image from "next/image";
import { roboto_mono } from "@/fonts";
import TimelineCard from "./timelineCard";
import Experiences from "@/static/experiences";

const Timeline = () => {
  return (
    <div className="relative w-full mt-8 md:mt-12 xl:mt-24 2xl:mt-32 px-[8%] pt-2 -pb-8">
      <div className="absolute w-1 h-full bg-gray-300 rounded-full ml-3 md:ml-4 xl:left-[50%] xl:right-[50%] xl:ml-0"></div>

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
