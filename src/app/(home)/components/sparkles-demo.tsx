"use client"
import { SparklesCore } from "@/components/ui/sparkles"

export default function SparklesPreview() {
  return (
    <div className="h-fit w-full lg:w-[70%] m-auto text-center lg:py-4 px-2 py-0 bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="text-4xl lg:text-5xl pb-4 pt-20 font-bold text-center text-white relative z-20">Thank You for Visiting!</h1>
      <p className="text-base lg:text-2xl pb-6 font-bold text-center text-white">
      Thank you for taking the time to explore my portfolio! I hope you enjoyed learning about my projects and the work I’m passionate about. If you’d like to connect, collaborate, or just say hello, feel free to reach out</p>
      <div className="w-[40rem] h-30 lg:h-40 relative px-2">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  )
}

