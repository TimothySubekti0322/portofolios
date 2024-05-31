import React from "react";
import { roboto_mono } from "@/fonts";
import ProjectCard from "./projectCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper modules
import { Pagination, Navigation } from "swiper/modules";
import ProjectCardWeb from "./projectCardWeb";
import Projects from "@/static/project";

const ProjectSection = () => {
  return (
    <div className="min-h-screen w-screen pt-28 md:pt-40 pb-36 xl:pb-44">
      <p
        className={`text-center ${roboto_mono.className} font-bold text-xl md:text-3xl text-[#03B18D]`}
      >
        MY WORKS
      </p>
      <p
        className={`text-center ${roboto_mono.className} font-bold text- md:text-3xl`}
      >
        Project
      </p>
      <div className="flex flex-row flex-wrap items-center justify-center xl:gap-x-[3.75%] px-[10%] mt-8 md:mt-12 gap-y-6 md:gap-y-8 xl:gap-y-10 2xl:gap-y-16 xl:hidden">
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            767: { slidesPerView: 2 },
          }}
          className="w-full h-full"
        >
          {Projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                github={project.github}
                android={project.android}
                web={project.web}
                mobileImage={project.mobileImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden xl:flex flex-row flex-wrap items-stretch justify-center xl:gap-x-[5%] px-[10%] mt-8 md:mt-12 xl:gap-y-10 2xl:gap-y-16">
        {Projects.map((project, index) => (
          <ProjectCardWeb
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            github={project.github}
            android={project.android}
            web={project.web}
            desktopImage={project.desktopImage}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
