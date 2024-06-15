import React from "react";
import { roboto_mono } from "@/fonts";
import RightTriangle from "./triangle/rightTriangle";
import LeftTriangle from "./triangle/leftTriangle";

interface TimelineCardProps {
  index: number;
  title: string;
  company: string;
  date: string;
  description: string[];
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  index,
  title,
  company,
  date,
  description,
}) => {
  return (
    <div
      className={`relative flex items-center mb-10 mt-2 xl:w-full ${
        index % 2 == 0 ? "xl:pr-[50%]" : "xl:pl-[50%]"
      } `}
    >
      {/* Circle */}
      <div className={`${index % 2 == 0 && "xl:hidden"}`}>
        <div className="w-7 h-7 md:w-9 md:h-9 rounded-full dark:bg-[#03B18D] bg-[#03B18D] my-auto xl:-ml-4"></div>
      </div>

      {/* Triangle */}
      <div className={`${index % 2 == 0 && "xl:hidden"} ml-[5%] md:ml-[3%]`}>
        <LeftTriangle size={14} />
      </div>

      {/* Content */}
      <div
        className={`dark:bg-[#313A54] bg-[#cecfdb]  rounded-xl p-3 md:p-6  ${roboto_mono.className}`}
      >
        <p
          className={`dark:text-[#efefef] text-[#03B18D] font-semibold ${roboto_mono.className} text-xl md:text-3xl xl:text-2xl`}
        >
          {title}
        </p>
        <p className="dark:text-[#9b9b9b] text-[#515e86] md:text-xl xl:text-lg">
          {company}
        </p>
        <p className="dark:text-[#efefef] text-[#313A54] text-xs font-bold md:text-xl xl:text-base">
          {date}
        </p>
        <ul className="list-disc ml-4 mt-4 dark:text-[#efefef] text-[#313A54] text-sm md:text-lg xl:text-base">
          {description.map((desc, index) => (
            <li key={index} className="mt-2">
              {desc}
            </li>
          ))}
        </ul>
      </div>

      {/* Triangle */}
      <div
        className={`${
          index % 2 == 1 ? "xl:hidden" : "xl:block"
        } hidden md:mr-[3%] `}
      >
        <RightTriangle size={14} />
      </div>

      {/* Circle */}
      <div className={`${index % 2 == 1 ? "xl:hidden" : "xl:block"} hidden`}>
        <div className="w-7 h-7 md:w-9 md:h-9 rounded-full dark:bg-[#03B18D] bg-[#03B18D] my-auto xl:-mr-5"></div>
      </div>
    </div>
  );
};

export default TimelineCard;
