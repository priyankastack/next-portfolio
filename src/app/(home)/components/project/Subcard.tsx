"use client";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { PinContainer, PinPerspective } from "@/components/ui/3d-pin"; // Adjust the import path as needed
import Image from "next/image";

interface ProjectData {
  projectId: number;
  Title: string;
  shortUrl: string;
  description: string;
  img: string;
  repo: string;
  type: string;
  view: string;
  techStack: string[];
}

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`flex items-center justify-center bg-transparent rounded-full border transition-colors duration-200 p-3 ${
        type == "previous" ? "" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      {type == "previous" ? (
        <IconArrowNarrowLeft className="text-white" />
      ) : (
        <IconArrowNarrowRight className="text-white" />
      )}
    </button>
  );
};

interface CarouselProps {
  projects: ProjectData[];
}

export default function Carousel({ projects }: CarouselProps) {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [cardsPerGroup, setCardsPerGroup] = useState(1); // Default to 1 card for mobile

  // Update cardsPerGroup based on screen size
  useEffect(() => {
    const updateCardsPerGroup = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 768) {
          setCardsPerGroup(1); // Mobile
        } else if (window.innerWidth < 1024) {
          setCardsPerGroup(2); // Tablet
        } else {
          setCardsPerGroup(3); // Desktop
        }
      }
    };

    // Update on mount and window resize
    updateCardsPerGroup();
    window.addEventListener("resize", updateCardsPerGroup);

    // Cleanup
    return () => window.removeEventListener("resize", updateCardsPerGroup);
  }, []);

  // Total number of groups
  const totalGroups = Math.ceil(projects.length / cardsPerGroup);

  const handlePreviousClick = () => {
    setCurrentGroup((prev) => (prev === 0 ? totalGroups - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setCurrentGroup((prev) => (prev === totalGroups - 1 ? 0 : prev + 1));
  };

  // Get the current group of projects
  const startIndex = currentGroup * cardsPerGroup;
  const endIndex = startIndex + cardsPerGroup;
  const currentProjects = projects.slice(startIndex, endIndex);

  return (
    <div className="relative w-full max-w-screen-lg mx-auto px-4">
      <div className="flex justify-between gap-10 max-sm:justify-center items-center">
        {currentProjects.map((project) => (
          <div
            key={project.projectId}
            className="flex-shrink-0 w-full flex items-center justify-center"
            style={{
              width: `${100 / cardsPerGroup}%`, // Ensure each card takes equal width
            }}
          >
            <PinContainer title={project.shortUrl} href={project.repo}>
              <div className="flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-fit min-h-[22rem] py-4">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base max-sm:text-xl text-slate-100">
                  {project.Title}
                </h3>
                <div className="text-sm !m-0 !p-0 font-normal">
                  <span className="text-slate-500 max-sm:text-base">{project.description}</span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4">
                  <Image
                    src={project.img}
                    alt="project thumbnail"
                    width={500}
                    height={300}
                    className="h-auto w-full rounded"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <div className="flex w-full mt-20 justify-end gap-3 lg:px-4 px-0">
        <CarouselControl
          type="previous"
          title="Go to previous group"
          handleClick={handlePreviousClick}
        />
        <CarouselControl
          type="next"
          title="Go to next group"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}