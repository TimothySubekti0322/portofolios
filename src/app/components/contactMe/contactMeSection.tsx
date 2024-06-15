import React, { useEffect } from "react";
import { roboto_mono } from "@/fonts";
import Form from "./form";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactMeSection = () => {
  useEffect(() => {
    AOS.init();
  },[]);
  return (
    <div className="min-h-screen w-screen pb-36 xl:pb-44" id="contact">
      <p
        className={`text-center ${roboto_mono.className} font-bold text-xl md:text-3xl text-[#03B18D]`}
        data-aos="zoom-in-up"
      >
        GET IN TOUCH
      </p>
      <p
        className={`text-center ${roboto_mono.className} font-bold text- md:text-3xl`}
        data-aos="zoom-in-up"
      >
        Contact Me
      </p>

      {/* Form */}
      <Form />
    </div>
  );
};

export default ContactMeSection;
