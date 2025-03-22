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
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
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
    title: "MERN Stack Developer",
    description: (
      <>
        <p>
        ▪ Built full-stack applications using the MERN stack, ensuring scalability and responsiveness.
        </p>
        <p>
        ▪ Integrated Firebase for authentication, real-time database, and storage to enhance app functionality.
        </p>
        <p>
        ▪ Optimized MongoDB for efficient data handling, ensuring high performance and reliability.
        </p>
      </>
    ),
    badge: "KraftMonk | Nov 2024 - Present",
    image: "/images/kraftmonk.png",
  },
  {
    title: "Backend Developer Intern",
    description: (
      <>
         <p>
        ▪ Designed and maintained the backend for Rentout Homes, a zero-brokerage rental platform.
        </p>
        <p>
        ▪ Enhanced the Admin Panel by adding features like owners management for efficient property and user data handling.
        </p>
        <p>
        ▪ Integrated analytics APIs and optimized database queries to improve platform performance and insights.
        </p>
        <p>
        ▪ Collaborated on implementing advanced search functionalities for a seamless user experience.
        </p>
        <p className="opacity-0">.</p>
        <Link href={'https://drive.google.com/file/d/1xVUeTwgxN2_OL_uHFaqpgENXpLUA2d2d/view?usp=sharing'} className="text-base font-semibold py-2 px-4 border rounded-lg">
         Letter of Appreciation
        </Link>
      </>
    ),
    badge: "Rentout Homes | Oct 2024 - Jan 2025",
    image: "/images/rentout.png",
  },
  {
    title: "Dev Club Representative",
    description: (
      <>
        <p>
          Conducted web development sessions, teaching students HTML, CSS,
          JavaScript, and React.js. Guided them in building responsive and
          accessible web applications through hands-on projects and coding
          challenges.
        </p>
        <p>
          Mentored students on backend development using Node.js and Express.js,
          helping them understand database management and API integration.
          Fostered a collaborative learning environment, inspiring students to
          pursue careers in tech.
        </p>
      </>
    ),
    badge: "Upskill Mafia | April 2024 - Oct 2024",
    image: "/images/upskill-rep.png",
  },
];
