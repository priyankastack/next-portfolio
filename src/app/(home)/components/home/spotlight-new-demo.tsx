"use client";
import { Spotlight } from "@/components/ui/spotlight-new";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import HoverBorderGradientDemo from "./hover-border-gradient-demo";
import { useEffect } from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function SpotlightNewDemo() {
  const words = ["React js developer", "Frontend developer", "UI/UX designer"];
  useEffect(() => {
    const SportLightSoundEffect = () => {
      const audio = new Audio("/images/sound.mp3");
      audio.muted = false;
      setTimeout(() => {
        audio.muted = true;
        audio.play();
      }, 1000);
    };
    window.addEventListener("click", SportLightSoundEffect);
  }, []);

  return (
    <div className="h-[100dvh] w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <div className="text-4xl md:text-6xl pb-3 font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Hey! I&apos;m Priyanka,
          <br />
          <span className="flex max-sm:hidden text-2xl items-center pt-4 justify-center">
            <TextHoverEffect text="Frontend developer" />
          </span>

        {/* mobile view role */}
          <span className="hidden max-sm:flex items-center pt-4 text-2xl text-center justify-center">
          <FlipWords words={words} />
          </span>
        </div>
        <p className="mt-4 font-normal text-lg text-neutral-300 max-w-lg text-center mx-auto">
          Welcome to my coding journey! 🚀 I&apos;m excited to share my passion
          for tech and showcase my projects. Explore and join me on this
          adventure as I learn, create, and innovate in the world of technology!
        </p>
        <div className="flex mt-8 justify-center">
          <HoverBorderGradientDemo />
        </div>
      </div>
    </div>
  );
}
