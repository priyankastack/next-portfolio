


"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

interface Project {
  projectId: number;
  Title: string;
  img: string;
}

interface CarouselProps {
  ofcprojects: Project[];
}


export default function SimpleCarousel({ ofcprojects: projects }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const handleClick = (title: string) => {
    router.push(`/project/${encodeURIComponent(title)}`);
  };

  const project = projects[currentIndex];

  return (
    <div className="relative w-[700px] h-[400px] mx-auto overflow-hidden rounded-xl">
      
      {/* Image */}
      <div
        onClick={() => handleClick(project.Title)}
        className="relative w-full h-full cursor-pointer group"
      >
        <Image
          src={project.img}
          alt={project.Title}
          fill
          className="object-cover"
        />

        {/* Title Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-100  transition flex items-start p-4">
          <h2 className="text-white text-xl font-bold">
            {project.Title}
          </h2>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white"
      >
        <IconArrowLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full text-white"
      >
        <IconArrowRight />
      </button>
    </div>
  );
}
