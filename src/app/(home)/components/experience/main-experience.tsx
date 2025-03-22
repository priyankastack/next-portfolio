"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Link from "next/link";

export default function TracingBeamDemo() {
  return (
    <>
      <div className="py-20">
        <div>
          <h2 className="text-4xl lg:text-5xl pb-10 lg:pb-20 font-bold text-center">
            Experience
          </h2>
        </div>
        <TracingBeam className="pl-10 pr-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative max-h-fit">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-14">
                <p className={twMerge("text-xl mb-4")}>{item.title}</p>

                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>

                <div className="text-sm  prose prose-sm dark:prose-invert">
                 {/*{item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}*/ } 
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div>
    </>
  );
}

const dummyContent = [
  {
    title: "Frontend Developer",
    description: (
      <>
        <p>
        ▪ Developed responsive web applications using React.js and Tailwind CSS for an intuitive user experience.
        </p>
        <p>
        ▪ Integrated Firebase for authentication, real-time data updates, and cloud storage in frontend applications.
        </p>
        <p>
        ▪ Optimized frontend performance with efficient API handling and state management for smooth interactions.
        </p>
      </>
    ),
    badge: "M.O.D.I | Sept 2024 - Present",
  
  },
  {
    title: "Frontend Developer Intern",
    description: (
      <>
        <p>
        Assisted in web development sessions, teaching students HTML, CSS, and JavaScript to build responsive websites
        </p>
        <p>
        Guided students in creating interactive web pages, focusing on accessibility and user-friendly design.
        </p>
      </>
    ),
    badge: "IREIE | May 2024 – Aug 2024",
    
  },
];
