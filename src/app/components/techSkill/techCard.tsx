import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface TechCardProps {
  image: StaticImageData;
  name: string;
}

const TechCard: React.FC<TechCardProps> = ({ image, name }) => {
  return (
    <button className="dark:bg-[#313A54] bg-[#cecfdb] p-[5%] rounded-lg w-[30%] xl:w-[17%] group overflow-hidden relative">
      <Image
        src={image}
        alt={name}
        className="transition-transform duration-300 ease-in-out transform  group-focus:outline-none group-hover:scale-[0.78] md:group-hover:scale-[0.7] group-hover:-translate-y-[20%] md:group-hover:-translate-y-[10%] group-active:scale-[0.78] md:group-active:scale-[0.7] group-active:-translate-y-[20%] md:group-active:-translate-y-[10%]"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-active:opacity-100">
        <p className="dark:text-white text-[#313A54] text-center text-xs md:text-xl xl:text-2xl 2xl:text-3xl pt-[70%] md:pt-[75%] font-semibold">
          {name}
        </p>
      </div>
    </button>
  );
};

export default TechCard;
