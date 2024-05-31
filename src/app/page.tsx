"use client";

import Navbar from "@components/navbar/navbar";
import Hero from "./components/hero/hero";
import TechSkill from "./components/techSkill/techSkillSection";
import WorkExperienceSection from "./components/workExperience/workExperienceSection";
import ProjectSection from "./components/project/projectSection";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className="bg-[#21272F] overflow-hidden">
      <Navbar />
      <Hero />
      <TechSkill />
      <WorkExperienceSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}
