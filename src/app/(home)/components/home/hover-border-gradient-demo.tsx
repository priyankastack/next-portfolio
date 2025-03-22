"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function HoverBorderGradientDemo() {
  return (
    <div className="">
      <Link
        href={
          "https://drive.google.com/file/d/1dlHVjAwILo_-l-slTca8s93WKsPIbtaG/view?usp=sharing"
        }
      >
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-3 text-xl"
        >
          <FaCloudDownloadAlt />
          <span className="">Resume</span>
        </HoverBorderGradient>
      </Link>
    </div>
  );
}
