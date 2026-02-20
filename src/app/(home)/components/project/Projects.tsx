import React from "react";
import Carousel from "./Subcard";
import OfcCarousel from "./ofcSubcard";

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
    Title: "ManageHub",
    shortUrl: "/priyankastack/ManageHub",
    description:
      "ManageHub is a web app with role-based access, offering login/signup and full CRUD functionality for admins and users.",
    img: "/images/mh.png",
    repo: "https://github.com/priyankastack/ManageHub",
    type: "web",
    view: "https://manage-hub-sepia.vercel.app/",
    techStack: ["React js","Express.js","Mongodb","RESTFULAPIs","Authentication","Tailwind CSS"],
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
    Title: "Wash Wizard",
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
const ofcprojects = [
  {
    projectId: 1,
    Title: "Eatinout",
    description:
      "EatinOut is a smart dining platform that helps users discover the best restaurants, explore menus, and find personalized offers. Non-subscribed users can browse restaurants and view basic deal information, while subscribed users can save offers to their wallet and redeem them using a secure code at the restaurant. Restaurant owners can manage their restaurants, create offers, and track redemptions, and admins have full control over users, restaurants, and offers. Built with Next.js, Tailwind, MongoDB, and Stripe, EatinOut delivers a smooth and reliable dining experience",
    keyFeatures: [
      "Restaurant search with filters like cuisine, category, location, and menu items",
      "Non-subscribed users can explore restaurants and view basic deal details",
      "Subscribed users can save offers to wallet and redeem using a unique code",
      "Secure Stripe-powered subscription system",
      "Restaurant owners can add restaurants and manage offers",
      "Offers instantly visible to users on the home screen",
      "Role-based dashboards for users, owners, and admins",
      "Admin controls to manage users, restaurants, and offers",
      "Responsive UI optimized for mobile and desktop",
      "AI-powered components using V0 and Lovable Cursor",
    ],
    img: "/images/eatinout.png",
    view: "https://www.eatinout.co.uk/",
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "MongoDB",
      "Stripe",
      "Calendly",
      "AI Tools: V0",
      "Lovable Cursor",
    ],
  },
  {
    projectId: 2,
    Title: "Fintrack CRM",
    description:
"Fintrack is an all-in-one platform for buying, renting, and managing properties in Australia. It combines property search and Customer Relationship Management (CRM) functionalities to offer a holistic solution. Key Features: Property Search: User-friendly interface for browsing properties based on location, price.",
    keyFeatures: [
      "Customer onboarding and comprehensive profile management",
      "Secure data handling with industry-standard encryption",
      "Advanced analytics dashboard for real-time financial insights",
      "Customizable workflows tailored for different departments",
      "Integration with banking systems and third-party APIs",
      "Role-based access control to ensure data security",
      "Automated reporting, documentation, and compliance support",
      "Mobile-responsive interface for on-the-go and field operations",
    ]
    ,

    img: "/images/fintrack.png",
    view: "https://software.fintrack.com.au/factfind",
    techStack: ["React", "Redux", "TypeScript", "Tailwind CSS", ".Net", "MYSQL", "Azure"],
  },
  {
    projectId: 3,
    Title: "E-Controls",
    description:"Controls Management Tool for SOX Compliance – KPMG India A comprehensive tool developed for SOX compliance featuring multilevel drill-downs and views. It supports periodic control surveys, detailed MIS reports with Excel exports",
    keyFeatures: [
      "Remote control of home appliances",
      "Real-time monitoring and status updates",
      "Automated scheduling and scene management",
      "Voice control integration with popular assistants",
      "Energy consumption tracking and optimization",
      "Secure cloud-based data storage",
      "Mobile app for iOS and Android",
    ],
    img: "/images/econtrols.webp",
    view: "https://dreamify-sigma.vercel.app",
    techStack: ["React", "TypeScript", "Tailwind CSS", "High Charts", ".NET", "MySQL"],
  },
  {
    projectId: 4,
    Title: "FabCab",
    description:
      "FabCap is an independent investment firm built on the belief that the strongest businesses are founded by people who deeply understand their industries. Backed by decades of entrepreneurial experience, FabCap partners with intrapreneurs and operators who have seen real problems first-hand and are ready to build practical, sustainable businesses. Rather than chasing hype, FabCap focuses on fast execution, real-world solutions, and long-term value creation by supporting builders with capital, expertise, and honest guidance.",
    keyFeatures: [
      "Instant ride booking with smart dispatching",
      "Live driver tracking with accurate ETA updates",
      "Secure and flexible payment options",
      "User and driver rating & feedback system",
      "Intelligent route optimization for faster trips",
      "24/7 customer assistance and support",
      "Multi-language experience for global users",
    ],






    img: "/images/fabcap.png",
    view: "https://www.fabcap.co.uk/",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Azure"],
  },
  {
    projectId: 5,
    Title: "AnthemInfotech Official Website",
    description:
      "AnthemInfotech Official Website is a responsive and modern website built for AnthemInfotech, showcasing their services, portfolio, and contact information.",
    keyFeatures: [
      "Responsive design for all devices",
      "SEO-friendly structure for better visibility",
      "Modern UI with smooth animations",
      "Fast loading times and optimized performance",

      "Easy navigation and user-friendly interface",
      "Contact form with validation",
      "Integration with social media platforms",
    ],





    img: "/images/anthem.png",
    view: "https://antheminfotech.com/",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "File Zilla"],
  },
];
const MyProjects = () => {
  return (
    <>
    <div className="lg:w-[85%] w-[100%] m-auto h-full py-20">
        <h2 className="text-4xl lg:text-5xl mb-20 md:text-5xl font-bold text-center">
         Professional Projects
        </h2>
        <OfcCarousel ofcprojects={ofcprojects} />  
             
      </div>
      <div className="lg:w-[85%] w-[100%] m-auto h-full py-20">
       
        <h2 className="text-4xl lg:text-5xl mb-20 md:text-5xl font-bold text-center">
         Personal Projects
        </h2>
        <Carousel projects={projects} />       
      </div>
    </>
  );
};

export default MyProjects;
