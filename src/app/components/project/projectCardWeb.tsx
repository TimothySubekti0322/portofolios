import React, { useState, useEffect } from "react";
import Image from "next/image";
import { roboto_mono } from "@/fonts";
import type { ProjectDesktopProps } from "@/static/project";
import { colorPicker } from "@/utils/techStackColorSelector";
import AndroidButton from "./cardButton/androidButton";
import GithubButton from "./cardButton/githubButton";
import WebButton from "./cardButton/webButton";
import AOS from "aos";
import "aos/dist/aos.css";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";

const ProjectCardWeb: React.FC<ProjectDesktopProps> = ({
  title,
  description,
  techStack,
  github,
  android,
  web,
  desktopImage,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="w-full max-w-[45%] rounded-xl dark:bg-[#313A54] bg-[#cecfdb] text-white p-4 h-full flex flex-col"
      data-aos={index % 2 == 0 ? "flip-left" : "flip-right"}
    >
      <div
        className="relative flex-grow"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={desktopImage}
          alt={title}
          className={`rounded-xl h-[40vh] w-full transition-all duration-200 ${
            isHovered ? "blur-md" : ""
          }`}
        />
        {isHovered && (
          <div className="absolute inset-0 flex justify-center items-center gap-x-10">
            {github && <GithubButton url={github} />}
            {android && <AndroidButton url={android} />}
            {web && <WebButton url={web} />}
          </div>
        )}
      </div>
      <div className={`${roboto_mono.className} mt-4 flex-grow`}>
        <p className="font-bold text-xl text-[#03B18D]">{title}</p>
        <p className="mt-2 text-[0.9rem] text-[#313A54] dark:text-white">
          {description}
        </p>
      </div>
      <div className="flex flex-row mt-4 flex-wrap gap-x-4 gap-y-4 grow">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className={`px-2 py-1 bg-gradient-to-r ${colorPicker(
              index
            )} rounded-full text-xs`}
          >
            <AnimatedShinyText className={``}># {tech}</AnimatedShinyText>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCardWeb;
