"use client"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import Image from "next/image"

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col">
      <ContainerScroll
        titleComponent={
          <>
            <div className="dark:text-white mb-0 lg:mb-20">
            <h2 className="text-4xl lg:text-5xl font-semibold">My Skills</h2>
            <p className="text-sm lg:text-2xl font-bold mt-4">These are the skills I use every day to bring ideas to life, tackle challenges, and achieve goals.</p>
            </div>
          </>
        }
      >
        <Image
          src={`/images/skill.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}