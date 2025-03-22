// "use client";
// import React, {
//   useEffect,
//   RefObject,
//   useRef,
//   useState,
//   createContext,
//   useContext,
// } from "react";
// import {
//   IconArrowNarrowLeft,
//   IconArrowNarrowRight,
//   IconX,
// } from "@tabler/icons-react";
// import { cn } from "@/lib/utils";
// import { AnimatePresence, motion } from "framer-motion";
// // import Image, { type ImageProps } from "next/image";
// import Image, { type ImageProps, type StaticImport } from "next/image";
// // import { useOutsideClick } from "@/hooks/use-outside-click";
// import { PinContainer } from "@/components/ui/3d-pin";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";

// interface CarouselProps {
//   items: {
//     projectId: number;
//     Title: string;
//     shortUrl: string;
//     description: string;
//     img: string;
//     repo: string;
//     type: string;
//     view: string;
//     techStack: string[];
//   }[];
//   initialScroll?: number;
// }

// type Card = {
//   src: string;
//   title: string;
//   category: string;
//   content: React.ReactNode;
// };


// export const useOutsideClick = (
//   ref: RefObject<HTMLElement | null>,
//   callback: () => void
// ) => {
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (ref.current && !ref.current.contains(event.target as Node)) {
//         callback();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref, callback]);
// };



// export const CarouselContext = createContext<{
//   onCardClose: (index: number) => void;
//   currentIndex: number;
// } | null>(null);

// export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
//   const carouselRef = React.useRef<HTMLDivElement>(null);
//   const [canScrollLeft, setCanScrollLeft] = React.useState(false);
//   const [canScrollRight, setCanScrollRight] = React.useState(true);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollLeft = initialScroll;
//       checkScrollability();
//     }
//   }, [initialScroll]);

//   const checkScrollability = () => {
//     if (carouselRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
//       setCanScrollLeft(scrollLeft > 0);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
//     }
//   };

//   const scrollLeft = () => {
//     if (carouselRef.current) {
//       const card = carouselRef.current.children[0]?.children[0] as HTMLElement;
//       if (card) {
//         const cardWidth = card.offsetWidth;
//         carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
//       }
//     }
//   };

//   const scrollRight = () => {
//     if (carouselRef.current) {
//       const card = carouselRef.current.children[0]?.children[0] as HTMLElement;
//       if (card) {
//         const cardWidth = card.offsetWidth;
//         carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
//       }
//     }
//   };

//   const handleCardClose = (index: number) => {
//     if (carouselRef.current) {
//       const card = carouselRef.current.children[0]?.children[index] as HTMLElement;
//       if (card) {
//         const cardWidth = card.offsetWidth;
//         const gap = parseInt(window.getComputedStyle(card).marginRight);
//         const scrollPosition = (cardWidth + gap) * (index + 1);
//         carouselRef.current.scrollTo({
//           left: scrollPosition,
//           behavior: "smooth",
//         });
//         setCurrentIndex(index);
//       }
//     }
//   };

//   const isMobile = () => {
//     return typeof window !== "undefined" && window.innerWidth < 768;
//   };

//   return (
//     <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
//       <div className="relative w-full">
//         <div
//           className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none]"
//           ref={carouselRef}
//           onScroll={checkScrollability}
//         >
//           <div
//             className={cn(
//               "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
//             )}
//           ></div>

//           <div className={cn("flex flex-row justify-start gap-4 pl-4", "max-w-7xl mx-auto")}>
            // {items.map((project, index) => (
            //   <div
            //     key={project.projectId}
            //     className="flex-shrink-0 flex items-center justify-center p-4"
            //   >
            //     <PinContainer title={project.shortUrl} href={project.repo}>
            //       <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            //         <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            //           {project.Title}
            //         </h3>
            //         <div className="text-sm !m-0 !p-0 font-normal">
            //           <span className="text-slate-500">{project.description}</span>
            //         </div>
            //         <div className="flex flex-1 w-full rounded-lg mt-4">
            //           <img
            //             src={project.img}
            //             alt="project thumbnail"
            //             className="h-auto w-full"
            //           />
            //         </div>
            //       </div>
            //     </PinContainer>
            //   </div>
            // ))}
//           </div>
//         </div>
//         <div className="flex justify-end gap-2 mr-10">
//           <button
//             aria-label="Scroll left"
//             className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
//             onClick={scrollLeft}
//             disabled={!canScrollLeft}
//           >
//             <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
//           </button>
//           <button
//             aria-label="Scroll right"
//             className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
//             onClick={scrollRight}
//             disabled={!canScrollRight}
//           >
//             <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
//           </button>
//         </div>
//       </div>
//     </CarouselContext.Provider>
//   );
// };

// export const Card = ({
//   card,
//   index,
//   layout = false,
// }: {
//   card: {
//     src: string | StaticImport;
//     title: string;
//     category: string;
//     content: React.ReactNode;
//   };
//   index: number;
//   layout?: boolean;
// }) => {
//   const [open, setOpen] = useState(false);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const context = useContext(CarouselContext);

//   if (!context) {
//     throw new Error("CarouselContext must be used within a CarouselProvider");
//   }
//   const { onCardClose, currentIndex } = context;

//   useEffect(() => {
//     function onKeyDown(event: KeyboardEvent) {
//       if (event.key === "Escape") {
//         handleClose();
//       }
//     }

//     if (open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [open]);

//   useOutsideClick(containerRef, () => {
//     if (open) handleClose();
//   });

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     onCardClose(index);
//   };

//   return (
//     <>
//       <AnimatePresence>
//         {open && (
//           <div className="fixed inset-0 h-screen z-50 overflow-auto">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
//             />
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               ref={containerRef}
//               layoutId={layout ? `card-${card.title}` : undefined}
//               className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
//             >
//               <button
//                 aria-label="Close card"
//                 className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
//                 onClick={handleClose}
//               >
//                 <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
//               </button>
//               <motion.p
//                 layoutId={layout ? `category-${card.title}` : undefined}
//                 className="text-base font-medium text-black dark:text-white"
//               >
//                 {card.category}
//               </motion.p>
//               <motion.p
//                 layoutId={layout ? `title-${card.title}` : undefined}
//                 className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
//               >
//                 {card.title}
//               </motion.p>
//               <div className="py-10">{card.content}</div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//       <motion.button
//         layoutId={layout ? `card-${card.title}` : undefined}
//         onClick={handleOpen}
//         className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
//       >
//         <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
//         <div className="relative z-40 p-8">
//           <motion.p
//             layoutId={layout ? `category-${card.category}` : undefined}
//             className="text-white text-sm md:text-base font-medium font-sans text-left"
//           >
//             {card.category}
//           </motion.p>
//           <motion.p
//             layoutId={layout ? `title-${card.title}` : undefined}
//             className="text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
//           >
//             {card.title}
//           </motion.p>
//         </div>
//         <BlurImage
//           src={card.src}
//           alt={card.title}
//           fill
//           className="object-cover absolute z-10 inset-0"
//         />
//       </motion.button>
//     </>
//   );
// };

// export const BlurImage = ({
//   height,
//   width,
//   src,
//   className,
//   alt,
//   ...rest
// }: ImageProps) => {
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     const img = new Image();
//     img.src = typeof src === "string" ? src : (src as StaticImport).src;
//     img.onload = () => setLoading(false);
//   }, [src]);

//   return (
//     <Image
//       className={cn(
//         "transition duration-300",
//         isLoading ? "blur-sm" : "blur-0",
//         className
//       )}
//       src={src}
//       width={width}
//       height={height}
//       loading="lazy"
//       decoding="async"
//       blurDataURL={typeof src === "string" ? src : "/default-blur-image.jpg"}
//       alt={alt ? alt : "Background of a beautiful view"}
//       {...rest}
//     />
//   );
// };