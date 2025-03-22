import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Nandani was a dedicated Backend Intern at Rentout.homes, delivering tasks on time and contributing significantly to website improvements. A valuable team member!",
      name: "Avnish Yadav",
      designation: "Founder, Rentout.homes",
      src: "/images/rentoutowner.png",
      description: "Transforming workflows with innovative features.",
    },
    {
      quote:
        "Nandani was a dedicated Backend Intern at Rentout.homes, delivering tasks on time and contributing significantly to website improvements. A valuable team member!",
      name: "Avnish Yadav",
      designation: "Founder, Rentout.homes",
      src: "/images/rentoutowner.png",
      description: "Transforming workflows with innovative features.",
    },
    {
      quote:
        "Nandani was a dedicated Backend Intern at Rentout.homes, delivering tasks on time and contributing significantly to website improvements. A valuable team member!",
      name: "Avnish Yadav",
      designation: "Founder, Rentout.homes",
      src: "/images/rentoutowner.png",
      description: "Transforming workflows with innovative features.",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}