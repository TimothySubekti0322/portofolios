import React from "react";
import { roboto_mono } from "@/fonts";
import Image from "next/image";
import TECH_IMAGES from "@/static/image/techImage";
import TechCard from "./techCard";

// Import Image

const TechSkill = () => {
  return (
    <div id="skills" className="min-h-screen w-screen pt-28">
      <p
        className={`text-center ${roboto_mono.className} font-bold text-xl md:text-3xl text-[#03B18D]`}
      >
        WHAT I CAN DO
      </p>
      <p
        className={`text-center ${roboto_mono.className} font-bold text- md:text-3xl`}
      >
        Skills Set in Technology
      </p>
      <div className="flex flex-row flex-wrap items-center justify-center gap-x-[5%] xl:gap-x-[3.75%] px-[10%] mt-8 md:mt-12 gap-y-6 md:gap-y-8 xl:gap-y-10 2xl:gap-y-16">
        {/* Card 1 */}
        <TechCard image={TECH_IMAGES.typescript} name="Typescript" />
        <TechCard image={TECH_IMAGES.javascript} name="Javascript" />
        <TechCard image={TECH_IMAGES.python} name="Python" />
        <TechCard image={TECH_IMAGES.java} name="Java" />
        <TechCard image={TECH_IMAGES.c} name="C" />
        <TechCard image={TECH_IMAGES.php} name="PHP" />
        <TechCard image={TECH_IMAGES.clojure} name="Clojure" />
        <TechCard image={TECH_IMAGES.postgresql} name="PostgreSQL" />
        <TechCard image={TECH_IMAGES.mongodb} name="MongoDB" />
        <TechCard image={TECH_IMAGES.mysql} name="MySQL" />
        <TechCard image={TECH_IMAGES.next} name="Next.js" />
        <TechCard image={TECH_IMAGES.react} name="React" />
        <TechCard image={TECH_IMAGES.laravel} name="Laravel" />
        <TechCard image={TECH_IMAGES.codeigniter} name="Codeigniter" />
        <TechCard image={TECH_IMAGES.node} name="Node.js" />
        <TechCard image={TECH_IMAGES.tailwindcss} name="Tailwindcss" />
        <TechCard image={TECH_IMAGES.prisma} name="Prisma" />
        <TechCard image={TECH_IMAGES.postman} name="Postman" />
        <TechCard image={TECH_IMAGES.jest} name="Jest" />
        <TechCard image={TECH_IMAGES.firebase} name="Firebase" />
      </div>
    </div>
  );
};

export default TechSkill;
