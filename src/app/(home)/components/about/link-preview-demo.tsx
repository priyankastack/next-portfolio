"use client";
import { LinkPreview } from "@/components/ui/link-preview";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
export default function LinkPreviewDemo() {
  return (
    <div className="flex justify-center items-center flex-col px-4">
      <h2 className="text-4xl lg:text-5xl font-bold m-4 mb-10">About me</h2>
      <div className="text-neutral-400 max-sm:text-neutral-300 text-lg lg:text-xl md:text-2xl max-w-5xl mx-auto mb-10 text-center">
        Welcome to my coding journey! 🚀 I&apos;m thrilled to share my passion
        for tech and showcase my projects, including my work at{" "}  <LinkPreview url="https://antheminfotech.com/" className="font-bold">
          Anthem Infotech Pvt Ltd
        </LinkPreview>,{" "}
        <span className="font-bold text-white">
          Multinational opportunities for diplomatic and international growth
        </span>{" "}
        and ,
        <span className="font-bold text-white">
        IREIE
        </span>{" "}
        are a great way to build modern websites. Visit Explore my creations and
        join me on this adventure as I learn, build, and innovate in the world
        of technology! Let&apos;s connect and create something amazing together!
      </div>
      <div className="socialmediaIcons flex justify-between items-center gap-4 text-2xl">
        <div
          className="socialMediaIcon p-3 rounded-full"
          style={{ boxShadow: "0 0 5px" }}
        >
          <Link href="https://github.com/priyankastack" target="_blank">
            <IoLogoGithub />
          </Link>
        </div>
        <div
          className="socialMediaIcon p-3 rounded-full"
          style={{ boxShadow: "0 0 5px" }}
        >
          <Link href="https://www.linkedin.com/in/priyankasingh81/" target="_blank">
            <FaLinkedinIn />
          </Link>
        </div>
        <div
          className="socialMediaIcon p-3 rounded-full"
          style={{ boxShadow: "0 0 5px" }}
        >
          <Link href="https://www.behance.net/gallery/200998573/Nutri-go" target="_blank">
            <FaBehance />
          </Link>
        </div>
        <div
          className="socialMediaIcon p-3 rounded-full"
          style={{ boxShadow: "0 0 5px" }}
        >
          <Link href="mailto:ps9446133@gmail.com" target="_blank">
            <HiOutlineMail />
          </Link>
        </div>
      </div>
    </div>
  );
}


