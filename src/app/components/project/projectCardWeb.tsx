import React, { useState } from "react";
import Image from "next/image";
import { roboto_mono } from "@/fonts";
import type { ProjectDesktopProps } from "@/static/project";
import { colorPicker } from "@/utils/techStackColorSelector";
import AndroidButton from "./cardButton/androidButton";
import GithubButton from "./cardButton/githubButton";
import WebButton from "./cardButton/webButton";

const ProjectCardWeb: React.FC<ProjectDesktopProps> = ({
  title,
  description,
  techStack,
  github,
  android,
  web,
  desktopImage,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full max-w-[45%] rounded-xl bg-[#313A54] p-4 h-full flex flex-col">
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
        <p className="mt-2 text-[0.9rem]">{description}</p>
      </div>
      <div className="flex flex-row mt-4 flex-wrap gap-x-4 gap-y-4 grow">
        {techStack.map((tech, index) => (
          <p
            key={index}
            className={`px-2 py-1 bg-gradient-to-r ${colorPicker(
              index
            )} rounded-full text-xs`}
          >
            # {tech}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectCardWeb;
