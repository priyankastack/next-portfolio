// "use client";
// import React from "react";
// import { useParams } from "next/navigation";
// import { twMerge } from "tailwind-merge";
// import { TracingBeam } from "@/components/ui/tracing-beam";
// const ofcprojects = [
//   {
//     projectId: 1,
//     Title: "Eatinout",
//     shortUrl: "https://www.eatinout.co.uk/",
//     description:
//       "EatinOut is a smart dining platform that helps users discover the best restaurants, explore menus, and find personalized offers. Non-subscribed users can browse restaurants and view basic deal information, while subscribed users can save offers to their wallet and redeem them using a secure code at the restaurant. Restaurant owners can manage their restaurants, create offers, and track redemptions, and admins have full control over users, restaurants, and offers. Built with Next.js, Tailwind, MongoDB, and Stripe, EatinOut delivers a smooth and reliable dining experience.",
//     img: "/images/gemini.png",
//     repo: "https://www.eatinout.co.uk/",
//     type: "web",
//     view: "https://www.eatinout.co.uk/",
//    techStack: [
//   "Next.js",
//   "React",
//   "Tailwind CSS",
//   "MongoDB",
//   "Stripe",
//   "Calendly",
//   "AI Tools: V0",
//   "Lovable Cursor"
// ]

//   },
//   {
//     projectId: 2,
//     Title: "Agri saathi",
//     shortUrl: "/technandani/AgriSaathi",
//     description:
//     "AgriSaathi helps farmers with weather updates, market prices, government schemes, and expert advice. It fosters collaboration, crop recommendations, and equipment trading for smarter, more efficient farming.",
//     img: "/images/agriSaathi.png",
//     repo: "https://github.com/technandani/AgriSaathi",
//     type: "web",
//     view: "https://dreamify-sigma.vercel.app",
//     techStack: ["React js", "Express js", "MongoDB"],
//   },
//   {
//     projectId: 3,
//     Title: "ManageHub",
//     shortUrl: "/priyankastack/ManageHub",
//     description:
//       "ManageHub is a web app with role-based access, offering login/signup and full CRUD functionality for admins and users.",
//     img: "/images/mh.png",
//     repo: "https://github.com/priyankastack/ManageHub",
//     type: "web",
//     view: "https://manage-hub-sepia.vercel.app/",
//     techStack: ["React js","Express.js","Mongodb","RESTFULAPIs","Authentication","Tailwind CSS"],
//   },
//   {
//     projectId: 4,
//     Title: "Sneh Sangrah",
//     shortUrl: "/technandani/e-commerce",
//     description:
//       "Developed a personalized e-commerce platform, 'Senh Sangrah,' with browsing, shopping, cart, and wishlist functionalities. Enabled user authentication and shop creation for sellers.",
//     img: "/images/SenhSangrah.png",
//     repo: "https://github.com/technandani/e-commerce",
//     type: "php",
//     view: "https://youtu.be/3jh1oqnANUI",
//     techStack: ["PHP", "MySQL"],
//   },



//   {
//     projectId:8,
//     Title: "Web Developer Portfolio",
//     shortUrl: "priyankastack/Priyanka-sPortfolio",
//     description:
//       "A modern portfolio built with HTML,CSS and Javascript. Features skills, projects, testimonials, and contact sections, offering a responsive and interactive showcase of front-end development expertise.",
//     img: "/images/portfolio.png",
//     repo: "https://github.com/priyankastack/Priyanka-sPortfolio",
//     type: "web",
//     view: "priyanka-s-portfolio-six.vercel.app/",
//     techStack: ["Javascript","CSS","HTML"],
//   },
//   {
//     projectId:9,
//     Title: "Wash Wizard",
//     shortUrl: "priyankastack/WashWizard",
//     description:
//       "A responsive Laundry Service Website built with HTML, CSS, and JavaScript, enabling users to explore services, schedule pickups, and manage orders with an interactive, user-friendly design.",
//     img: "/images/12.png",
//     repo: "https://github.com/priyankastack/WashWizard",
//     type: "web",
//     view: "https://wash-wizard.vercel.app/",
//     techStack: ["Javascript","CSS","HTML"],
//   },

// ];

// export default function TracingBeamDemo() {
// const params = useParams();
// const title=params.title;
//   return (
//     <TracingBeam className="px-6">
//       <div className="max-w-2xl mx-auto antialiased pt-4 relative">
//         {dummyContent.map((item, index) => (
//           <div key={`content-${index}`} className="mb-10">
//             <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
//               {title}
//             </h2>

//             <p className={twMerge("text-xl mb-4")}>
//               {item.title}
//             </p>

//             <div className="text-sm  prose prose-sm dark:prose-invert">
//               {item?.image && (
//                 <img
//                   src={item.image}
//                   alt="blog thumbnail"
//                   height="1000"
//                   width="1000"
//                   className="rounded-lg mb-10 object-cover"
//                 />
//               )}
//               {item.description}
//             </div>
//           </div>
//         ))}
//       </div>
//     </TracingBeam>
//   );
// }

// const dummyContent = [
//   {
//     title: "Lorem Ipsum Dolor Sit Amet",
//     description: (
//       <>
//         <p>
//           Sit duis est minim proident non nisi velit non consectetur. Esse
//           adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
//           Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
//           incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
//           fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
//           nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
//           occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
//           officia sint labore. Tempor consectetur excepteur ut fugiat veniam
//           commodo et labore dolore commodo pariatur.
//         </p>
//         <p>
//           Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
//           veniam in commodo id reprehenderit adipisicing. Proident duis
//           exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
//         </p>
//         <p>
//           Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
//           reprehenderit deserunt amet laborum consequat adipisicing officia qui
//           irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
//           Amet culpa officia aliquip deserunt veniam deserunt officia
//           adipisicing aliquip proident officia sunt.
//         </p>
//       </>
//     ),
//     badge: "React",
//     image:
//       "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Lorem Ipsum Dolor Sit Amet",
//     description: (
//       <>
//         <p>
//           Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
//           deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
//           non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
//           sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
//           velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
//           commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
//         </p>
//         <p>
//           In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
//           veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
//           reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
//           cillum ut mollit.
//         </p>
//       </>
//     ),
//     badge: "Changelog",
//     image:
//       "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Lorem Ipsum Dolor Sit Amet",
//     description: (
//       <>
//         <p>
//           Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
//           deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
//           non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
//           sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
//           velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
//           commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
//         </p>
//       </>
//     ),
//     badge: "Launch Week",
//     image:
//       "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];


"use client";

import React from "react";
import { useParams } from "next/navigation";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

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
    "Deployment : Azure"
    ],
  },
  {
    projectId: 2,
    Title: "Fintrack CRM",
    description:"Fintrack is an all-in-one platform for buying, renting, and managing properties in Australia. It combines property search and Customer Relationship Management (CRM) functionalities to offer a holistic solution. Key Features: Property Search: User-friendly interface for browsing properties based on location and price.",
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
    techStack: ["React", "Redux", "TypeScript", "Tailwind CSS", ".Net", "MYSQL", "Deployment : Azure"],
  },
  {
    projectId: 3,
    Title: "E-Controls",
    description:
      "Controls Management Tool for SOX Compliance – KPMG India A comprehensive tool developed for SOX compliance featuring multilevel drill-downs and views. It supports periodic control surveys, detailed MIS reports with Excel exports.",
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
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Deployment : Azure"],
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
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Deployment : File Zilla"],
  },
];

export default function ProjectDetailsPage() {
  const params = useParams();

  // decode URL-encoded title
  const decodedTitle = decodeURIComponent(params.title as string);

  // find matching project
  const project = ofcprojects.find(
    (p) => p.Title.toLowerCase() === decodedTitle.toLowerCase()
  );

  if (!project) {
    return (
      <div className="text-center py-20 text-xl">
        Project not found 🚫
      </div>
    );
  }

  return (
    <TracingBeam className="px-6">
      <div className="max-w-3xl mx-auto pt-6 space-y-8">
        {/* Title */}
        <h1 className="text-3xl font-bold">{project.Title}</h1>

        {/* Image */}
        <Image
          src={project.img}
          alt={project.Title}
          width={1000}
          height={600}
          className="rounded-xl object-cover"
        />

        {/* Description */}
        <p className="text-gray-300 text-lg">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-neutral-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        {project.keyFeatures && (
          <div>
            <h2 className="text-xl font-semibold ">Highlights</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4 pb-2">
          <a
            href={project.view}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-md bg-white text-black font-medium"
          >
            Live Demo
          </a>
        </div>
      </div>
    </TracingBeam>
  );
}