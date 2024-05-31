import React from "react";
import Image from "next/image";
import PROJECT_IMAGES from "@/static/image/projectImage";
import type { CardButtonProps } from "./cardButton.type";

const GithubButton: React.FC<CardButtonProps> = ({ url, size }) => {
  const handleButtonClick = (
    url: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    window.open(url, "_blank");
  };
  return (
    <button
      className="px-3 py-3 rounded-full bg-[#EEEEEE] hover:bg-[#999999] focus:bg-[#999999]"
      onClick={(e) => handleButtonClick(url, e)}
    >
      <Image
        src={PROJECT_IMAGES.github}
        className={`w-${size} h-${size}`}
        alt="github"
      />
    </button>
  );
};

export default GithubButton;
