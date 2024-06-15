"use client";

import Navbar from "@components/navbar/navbar";
import Hero from "./components/hero/hero";
import TechSkill from "./components/techSkill/techSkillSection";
import WorkExperienceSection from "./components/workExperience/workExperienceSection";
import ProjectSection from "./components/project/projectSection";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="dark:bg-[#21272F] bg-[#FFFFFF] overflow-hidden dark:text-white text-[#21272F]">
      <Navbar />
      <Hero />
      <TechSkill />
      <WorkExperienceSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}
