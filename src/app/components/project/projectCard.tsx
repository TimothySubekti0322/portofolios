// components/ProjectCard.tsx
import React, { useState } from "react";
import Guestify from "@/assets/project/guestify.png";
import Image from "next/image";
import { roboto_mono } from "@/fonts";
import "./projectCard.css"; // Import the CSS file
import GithubButton from "./cardButton/githubButton";
import AndroidButton from "./cardButton/androidButton";
import WebButton from "./cardButton/webButton";
import type { ProjectMobileProps } from "@/static/project";
import { colorPicker } from "@/utils/techStackColorSelector";

const ProjectCard: React.FC<ProjectMobileProps> = ({
  title,
  description,
  techStack,
  github,
  android,
  web,
  mobileImage,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`w-full  rounded-xl perspective-1000 h-[70vh] md:h-[65vh] ${
        isFlipped ? "flipped" : ""
      }`}
      onClick={handleFlip}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
        <div className="absolute w-full h-full backface-hidden bg-[#313A54] rounded-xl px-4 py-4 md:px-5">
          <Image src={mobileImage} alt={title} className="rounded-xl" />
          <div className={`${roboto_mono.className} mt-4`}>
            <p className="font-bold text-xl text-[#03B18D] md:text-2xl">
              {title}
            </p>
            <p className="mt-2 text-[0.9rem] md:text-lg">{description}</p>
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden transform rotateY-180 bg-[#313A54] px-4 py-4 rounded-xl">
          <div className={`${roboto_mono.className} mt-4 text-center`}>
            <p className="font-bold text-xl text-[#03B18D] md:text-2xl">
              Tech Stack
            </p>
            <div className="mt-6 text-sm md:text-base flex flex-row gap-x-3 gap-y-3 flex-wrap justify-center">
              {techStack.map((tech, index) => (
                <p
                  key={index}
                  className={`px-2 py-1 bg-gradient-to-r ${colorPicker(
                    index
                  )} rounded-full`}
                >
                  # {tech}
                </p>
              ))}
            </div>
            <div className="flex flex-row justify-center items-center gap-x-[10%] mt-8">
              {github && <GithubButton  url={github} />}
              {android && <AndroidButton  url={android} />}
              {web && <WebButton url={web} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
