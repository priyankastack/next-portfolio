"use client";

import CardHoverEffectDemo from "./components/services/card-hover-effect-demo";
import HeroScrollDemo from "./components/skill/container-scroll-animation-demo";
import FloatingNavDemo from "./components/floating-navbar-demo";
import SparklesPreview from "./components/sparkles-demo";
import SpotlightNewDemo from "./components/home/spotlight-new-demo";
import TracingBeamDemo from "./components/experience/main-experience";
import BackgroundBeamsDemo from "./components/contact/main-contact";
import BackgroundBeamsWithCollisionDemo from "./components/about/main-about";
import MyProjects from "./components/project/Projects";
import { useEffect, useState } from "react";
import AnimatedTestimonialsDemo from "./components/testimonials/animated-testimonials-demo";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen dark:bg-black px-10">
          {/* Profile Picture Skeleton */}
          {/* <div className="w-32 h-32 bg-neutral-300 dark:bg-neutral-900 rounded-full animate-pulse"></div> */}

          <div className="animate-pulse w-96 max-sm:w-[100%] h-10 bg-gradient-to-r from-neutral-800 via-neutral-850 to-neutral-900  rounded-lg mt-4 animate-pulse"></div>
          <div className="animate-pulse lg:w-[50%] md:w-[55%] max-sm:w-[78%] h-8 bg-gradient-to-r from-neutral-800 via-neutral-850 to-neutral-900 rounded-lg mt-4 animate-pulse"></div>

          <div className="animate-pulse w-96 max-sm:w-[80%] h-5 bg-gradient-to-r from-neutral-800 via-neutral-850 to-neutral-900 rounded mt-2 animate-pulse"></div>
          <div className="animate-pulse w-80 h-4 max-sm:w-[40%] bg-gradient-to-r from-neutral-800 via-neutral-850 to-neutral-900 rounded mt-2 animate-pulse"></div>
          <div className="animate-pulse w-80 h-4 max-sm:w-[97%] bg-gradient-to-r from-neutral-800 via-neutral-850 to-neutral-900 rounded mt-2 animate-pulse"></div>

          <div className="animate-pulse w-32 h-10 rounded-full bg-gradient-to-r from-neutral-800 via-neutral-850 to-neutral-900 mt-6 animate-pulse"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-black">
        {/* Navbar */}
        <div>
          <FloatingNavDemo />
        </div>

        {/* hero section */}
       
        <div>
          <div className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <SpotlightNewDemo />
          </div>
        </div>

        <hr className="h-[1px] border-transparent bg-neutral-900" />

        {/* about section */}
        <div id="about">
          <BackgroundBeamsWithCollisionDemo />
        </div>

        <hr className="h-[1px] border-transparent bg-neutral-900" />

        {/* skills section */}
        <div id="skill">
          <HeroScrollDemo />
        </div>

        <hr className="h-[1px] border-transparent bg-neutral-900" />

        {/* what i can do section */}
        <div id="service">
          <CardHoverEffectDemo />
        </div>

        <hr className="h-[1px] border-transparent bg-neutral-900" />

        {/* Experience section */}
        <div id="experience">
          <div>
            <TracingBeamDemo />
          </div>
        </div>

        <hr className="h-[1px] border-transparent bg-neutral-900" />

        {/* project section */}

        <div id="project">
          <MyProjects />
        </div>

        <hr className="h-[1px] border-transparent bg-neutral-900" />

        {/* testiminoial */}
        {/* <div><AnimatedTestimonialsDemo /></div>

        <hr className="h-[1px] border-transparent bg-neutral-900" /> */}

        {/* Contact */}
        <div id="contact">
          <BackgroundBeamsDemo />
        </div>

        <hr className="h-[1px] border-transparent bg-neutral-900" />

        {/* Thanku */}
        <div className="lg:my-36 my-0">
          <SparklesPreview />
        </div>
      </div>
    </>
  );
}
