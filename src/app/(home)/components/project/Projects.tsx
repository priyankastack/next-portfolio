import React from "react";
import Carousel from "./Subcard";

const projects = [
  {
    projectId: 1,
    Title: "Gemini AI Chatbot",
    shortUrl: "priyankastack/Gemini-AI-Chatbot",
    description:
      "Gemini AI Chatbot: An intelligent conversational AI designed for seamless and context-aware interactions.",
    img: "/images/gemini.png",
    repo: "https://github.com/priyankastack/Gemini-AI-Chatbot",
    type: "web",
    view: "https://gemini-ai-chatbot-orcin-pi.vercel.app/",
    techStack: ["React js", "Tailwind CSS", "Gemini Api","HTML"],
  },
  {
    projectId: 2,
    Title: "Agri saathi",
    shortUrl: "/technandani/AgriSaathi",
    description:
    "AgriSaathi helps farmers with weather updates, market prices, government schemes, and expert advice. It fosters collaboration, crop recommendations, and equipment trading for smarter, more efficient farming.",
    img: "/images/agriSaathi.png",
    repo: "https://github.com/technandani/AgriSaathi",
    type: "web",
    view: "https://dreamify-sigma.vercel.app",
    techStack: ["React js", "Express js", "MongoDB"],
  },
  {
    projectId: 3,
    Title: "Employee Task Management",
    shortUrl: "/priyankastack/EMS",
    description:
      "The Employee Management System (EMS) is a frontend-based application where admins can assign tasks to employees, and employees can view their assigned tasks",
    img: "/images/ems.png",
    repo: "https://github.com/priyankastack/EMS",
    type: "web",
    view: "https://ems-six-tau.vercel.app/",
    techStack: ["React js", "Tailwind CSS", "HTML"],
  },
  {
    projectId: 4,
    Title: "Sneh Sangrah",
    shortUrl: "/technandani/e-commerce",
    description:
      "Developed a personalized e-commerce platform, 'Senh Sangrah,' with browsing, shopping, cart, and wishlist functionalities. Enabled user authentication and shop creation for sellers.",
    img: "/images/SenhSangrah.png",
    repo: "https://github.com/technandani/e-commerce",
    type: "php",
    view: "https://youtu.be/3jh1oqnANUI",
    techStack: ["PHP", "MySQL"],
  },
  {
    projectId: 5,
    Title: "Sky Tracker",
    shortUrl: "priyankastack/weather",
    description:
      "Built a weather app providing real- me weather informa on with forecasts up to 1 week ahead.",
    img: "/images/carrierpath.png",
    repo: "https://github.com/priyankastack/weather",
    type: "web",
    view: "https://weather-two-beige.vercel.app/",
    techStack: ["Jvavascript", "Tailwind CSS", "HTML"],
  },

  {
    projectId: 6,
    Title: "Nutri Go",
    shortUrl: "https://www.behance.net/gallery/200998573/Nutri-go",
    description:
      "Designed Nutri Go, a UI/UX project integrating nutriton tracking and meal planning features into a restaurant app",
    img: "/images/11.jpeg",
    repo: "https://www.behance.net/gallery/200998573/Nutri-go",
    type: "web",
    view: "https://www.behance.net/gallery/200998573/Nutri-go",
    techStack: ["Figma"],
  },
  {
    projectId: 7,
    Title: "EchoTune",
    shortUrl: "priyankastack/RhythmCraft",
    description:
      "Built a music application featuring interactive playlists, playback controls, and seamless access to my personal music collection.",
    img: "/images/music.jpg",
    repo: "https://github.com/priyankastack/RhythmCraft",
    type: "web",
    view: "https://music-app-ten-black.vercel.app/",
    techStack: ["HTML", "CSS", "JavaScript"],
  },
 

  {
    projectId:8,
    Title: "Web Developer Portfolio",
    shortUrl: "priyankastack/Priyanka-sPortfolio",
    description:
      "A modern portfolio built with HTML,CSS and Javascript. Features skills, projects, testimonials, and contact sections, offering a responsive and interactive showcase of front-end development expertise.",
    img: "/images/portfolio.png",
    repo: "https://github.com/priyankastack/Priyanka-sPortfolio",
    type: "web",
    view: "priyanka-s-portfolio-six.vercel.app/",
    techStack: ["Javascript","CSS","HTML"],
  },
  {
    projectId:9,
    Title: "Web Developer Portfolio",
    shortUrl: "priyankastack/WashWizard",
    description:
      "A responsive Laundry Service Website built with HTML, CSS, and JavaScript, enabling users to explore services, schedule pickups, and manage orders with an interactive, user-friendly design.",
    img: "/images/12.png",
    repo: "https://github.com/priyankastack/WashWizard",
    type: "web",
    view: "https://wash-wizard.vercel.app/",
    techStack: ["Javascript","CSS","HTML"],
  },
 
];

const MyProjects = () => {
  return (
    <>
      <div className="lg:w-[85%] w-[100%] m-auto h-full py-20">
        <h2 className="text-4xl lg:text-5xl mb-20 md:text-5xl font-bold text-center">
          Projects
        </h2>
        <Carousel projects={projects} />       
      </div>
    </>
  );
};

export default MyProjects;
