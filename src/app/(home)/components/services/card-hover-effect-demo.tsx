"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-2 lg:px-8 mb-20 max-sm:mb-16 max-sm:mt-20">
      <h2 className="text-4xl lg:text-5xl font-bold text-center mt-36 mb-5 max-sm:mt-10 max-sm:mb-0">
        What I Can Do
      </h2>
      <HoverEffect items={services} />
    </div>
  );
}
export const services = [
  {
    id:" 1",
    title: " Full-Stack Development",
    description:
    "💻 Build scalable and responsive web applications using modern front-end and back-end technologies. From user-friendly interfaces to powerful server-side logic, I develop complete solutions.",
    link: "#service",
  },
  {
    id:" 2",
    title: "Front-End Development",
    description:
    "🎨 Create stunning and interactive UIs with React, Next.js, and modern frameworks. I specialize in crafting pixel-perfect, responsive designs that enhance user experience.",
    link: "#service",
  },
  {
    id:" 3",
    title: "Back-End Development",
    description:
    "🛠 Develop secure and optimized back-end systems using Node.js, Express, and databases like MongoDB and MySQL. I ensure seamless data handling and API integrations.",
    link: "#service",
  },
  {
    id:" 4",
    title: " API Development & Integration",
    description:
    "🔗 Build and integrate RESTful & GraphQL APIs to connect applications efficiently. I design robust APIs that enable smooth communication between front-end and back-end systems.",
    link: "#service",
  },
  {
    id:" 5",
    title: "UI/UX Design",
    description:
    "🎯 Design intuitive and visually appealing user interfaces that prioritize user experience. I create wireframes, prototypes, and high-fidelity designs using tools like Figma and Adobe XD, ensuring a seamless and engaging user journey.",
    link: "#service",
  },
  {
    id:" 6",
    title: "WordPress Development",
    description:
      " Build custom WordPress websites and themes tailored to your needs. From simple blogs to complex e-commerce platforms, I create scalable and maintainable WordPress solutions with plugins, customizations, and SEO optimization",
    link: "#service",
  },
];
