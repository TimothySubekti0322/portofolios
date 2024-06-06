import React from "react";
import Image from "next/image";
import PROJECT_IMAGES from "@/static/image/projectImage";
import type { CardButtonProps } from "./cardButton.type";

const AndroidButton: React.FC<CardButtonProps> = ({ url }) => {
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
        src={PROJECT_IMAGES.android}
        className={`w-10 h-10 2xl:w-12 2xl:h-12`}
        alt="android"
      />
    </button>
  );
};

export default AndroidButton;
