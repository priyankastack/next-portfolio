import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import LinkPreviewDemo from "./link-preview-demo"

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className=" bg-transparent max-sm:my-2 py-20 min-h-fit">
      <LinkPreviewDemo/>
    </BackgroundBeamsWithCollision>
  )
}

