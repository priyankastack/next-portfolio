"use client"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react"
import { TbAward } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
export default function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-5 w-auto text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-5 w-auto text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skill",
      icon: <FaCode className="h-5 w-auto text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <TbAward className="h-5 w-auto text-neutral-500 dark:text-white"  />,
    },
    {
      name: "projects",
      link: "#project",
      icon: <FaFolder className="h-5 w-auto text-neutral-500 dark:text-white"  />,
    },
  ]
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  )
}


