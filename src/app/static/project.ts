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
];

export default Projects;
