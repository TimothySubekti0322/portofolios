import PROJECT_IMAGES from "./image/projectImage";
import type { StaticImageData } from "next/image";

export interface Projects {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  android: string;
  web: string;
}

export interface ProjectDesktopProps extends Projects {
  desktopImage: StaticImageData;
}

export interface ProjectMobileProps extends Projects {
  mobileImage: StaticImageData;
}

const Projects = [
  {
    title: "Guestify",
    description:
      "Guestify is a digital guest management mobile application that streamlines event planning by replacing traditional, paper-based RSVP and guest book systems with modern, digital solutions",
    techStack: [
      "React Native",
      "Express.js",
      "Node.js",
      "Nativewind",
      "Javascript",
    ],
    github: "https://github.com/TimothySubekti0322/Guestify-FindIT",
    android:
      "https://drive.google.com/file/d/1V0s-RAKP1N0hOgQoyFbFVqcM_QolMQUL/view",
    web: "",
    mobileImage: PROJECT_IMAGES.guestify,
    desktopImage: PROJECT_IMAGES.guestifyWeb,
  },
  {
    title: "TukangKu",
    description:
      "The Tukangku app lets users book skilled workers for home repairs and services. Users can choose the service they need, give job details, and confirm the booking with an online payment",
    techStack: [
      "React Native",
      "Express.js",
      "Node.js",
      "Nativewind",
      "Javascript",
    ],
    github: "https://github.com/TimothySubekti0322/Tukangku-App",
    android:
      "https://drive.google.com/drive/folders/1biGLzSKBInrbZ-57yNpA9Ug3FAo9i6rr",
    web: "",
    mobileImage: PROJECT_IMAGES.tukangku,
    desktopImage: PROJECT_IMAGES.tukangkuWeb,
  },
  {
    title: "EduCertify",
    description:
      "EduCertify streamlines transcript processing for colleges. Features include inputting scores, creating and verifying digital signatures, and secure PDF downloads",
    techStack: [
      "Next.js",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Typescript",
    ],
    github: "https://github.com/TimothySubekti0322/II4031-EduCertify",
    android: "",
    web: "https://ii-4031-edu-certify.vercel.app/",
    mobileImage: PROJECT_IMAGES.educertify,
    desktopImage: PROJECT_IMAGES.educertifyWeb,
  },
  {
    title: "OccupEye",
    description:
      "OccupEye is an IoT-based visitor counting system with API Service, Website, and a mobile app for real-time data insights to optimize business strategies efficiently.",
    techStack: [
      "React Native",
      "Express.js",
      "Node.js",
      "Nativewind",
      "Typescript",
    ],
    github: "https://github.com/TimothySubekti0322/II3240-OccupEye",
    android:
      "https://drive.google.com/file/d/1xmtdzaXNDoRL1U7lPqWNqvMTvLxurHC2/view?usp=sharing",
    web: "",
    mobileImage: PROJECT_IMAGES.occupEye,
    desktopImage: PROJECT_IMAGES.occupEyeWeb,
  },
  {
    title: "cryptography mobile chat app",
    description:
      "Cryptography Mobile Chat App demonstrates RSA implementation for encrypting chat messages. Showcasing advanced encryption techniques to protect user data.",
    techStack: [
      "React Native",
      "Express.js",
      "javascript",
      "Nativewind",
      "Firebase",
    ],
    github:
      "https://github.com/TimothySubekti0322/cryptography-chat-mobile-app",
    android:
      "https://drive.google.com/drive/folders/1EMnHlK1VCyCmcxhUmd2m2llB5vfZoQsP?usp=sharing",
    web: "",
    mobileImage: PROJECT_IMAGES.cryptographyMobileChatApp,
    desktopImage: PROJECT_IMAGES.cryptographyMobileChatAppWeb,
  },
  {
    title: "cryptography and coding web app",
    description:
      "Cryptography and Coding Web App is a dynamic platform for learning and practicing cryptography and coding techniques, offering an interactive experience for users.",
    techStack: ["Next.js", "tailwindcss", "typescript", "daisyui", "Node.js"],
    github: "https://github.com/TimothySubekti0322/II4031-Cryptography-Coding",
    android: "",
    web: "https://ii-4031-kriptografi-koding.vercel.app/",
    mobileImage: PROJECT_IMAGES.cryptographyAndCodingWebApp,
    desktopImage: PROJECT_IMAGES.cryptographyAndCodingWebAppWeb,
  },
  {
    title: "Rajawali Air",
    description:
      "Rajawali Air is a flight ticketing website benchmarked to Traveloka, offering seamless booking services and a user-friendly experience for travelers.",
    techStack: [
      "React + Vite",
      "tailwindcss",
      "typescript",
      "daisyui",
      "Node.js",
    ],
    github: "https://github.com/TimothySubekti0322/RAJAWALI-AIR",
    android: "",
    web: "https://rajawali-air.vercel.app/",
    mobileImage: PROJECT_IMAGES.rajawaliAir,
    desktopImage: PROJECT_IMAGES.rajawaliAirWeb,
  },
  {
    title: "RPL Prima",
    description:
      "RPL Prima is a driving course website and management platform, providing comprehensive services and resources for both learners and driving schools to enhance their experience.",
    techStack: [
      "Next.js",
      "tailwindcss",
      "typescript",
      "Prisma",
      "Supabase",
      "jest",
      "postgresql",
    ],
    github: "https://github.com/TimothySubekti0322/RAJAWALI-AIR",
    android: "",
    web: "https://init-rpl-k01-g14.vercel.app/",
    mobileImage: PROJECT_IMAGES.rplPrima,
    desktopImage: PROJECT_IMAGES.rplPrimaWeb,
  },
  {
    title: "Smart Travel Web App",
    description:
      "Smart Travel Web App is a web application for booking travel tickets, designed to integrate travel and hotel booking services for a seamless user experience.",
    techStack: ["codeigniter4", "tailwindcss", "html", "javascript", "mysql"],
    github: "https://github.com/TimothySubekti0322/Smart-Travel-App",
    android: "",
    web: "https://smart-travel-app.000webhostapp.com/",
    mobileImage: PROJECT_IMAGES.smartTravel,
    desktopImage: PROJECT_IMAGES.smartTravelWeb,
  },
  {
    title: "Smart Dormitory Backend Service",
    description:
      "Smart Dormitory Backend Services is a backend project for integrating catering services in a dormitory, ensuring seamless and efficient dormitory service management",
    techStack: ["codeigniter4", "REST API", "XAMPP", "mysql", "php", "postman"],
    github:
      "https://github.com/TimothySubekti0322/Smart-Dormitory-Backend-Service",
    android: "",
    web: "https://smart-dormitory-backend-service.000webhostapp.com",
    mobileImage: PROJECT_IMAGES.smartDormitoryBackendService,
    desktopImage: PROJECT_IMAGES.smartDormitoryBackendServiceWeb,
  },
  {
    title: "Simplicity",
    description:
      "Simplicity is a game resembling The Sims, created in Java to showcase my expertise in Java programming, game development, and software design skills.",
    techStack: ["Java"],
    github: "https://github.com/TimothySubekti0322/Tubes-OOP-STI21",
    android: "",
    web: "",
    mobileImage: PROJECT_IMAGES.simplicity,
    desktopImage: PROJECT_IMAGES.simplicityWeb,
  },
  {
    title: "BNMO",
    description:
      "BNMO is a classic video game console featuring Tower of Hanoi, Diner Dash, Snake on Meteor, Random Number Generator, and Hangman, all developed in C.",
    techStack: ["C"],
    github: "https://github.com/TimothySubekti0322/Tubes-1-Alstrukdat-G11",
    android: "",
    web: "",
    mobileImage: PROJECT_IMAGES.bnmo,
    desktopImage: PROJECT_IMAGES.bnmoWeb,
  },
  {
    title: "SEA Cinema",
    description:
      "Sea Cinema is my first full-stack web project, simulating cinema ticket booking using a third-party API. Unfortunately, the API provider is no longer active.",
    techStack: ["HTML", "ejs", "CSS", "Javascript", "Express.js", "MongoDB"],
    github: "https://github.com/TimothySubekti0322/SEA-Cinema",
    android: "",
    web: "",
    mobileImage: PROJECT_IMAGES.seaCinema,
    desktopImage: PROJECT_IMAGES.seaCinemaWeb,
  },
];

export default Projects;
