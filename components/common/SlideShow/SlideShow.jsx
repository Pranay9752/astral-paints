"use client";

import React, { useState, useEffect, useRef, Children } from "react";
import Slide from "./Slide";
import { motion } from "framer-motion";

// const SlideShow = ({ children, autoPlaySpeed = 10000, className }) => {
//   const slides = Children.toArray(children);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, autoPlaySpeed);

//     return () => clearInterval(interval);
//   }, [slides.length, autoPlaySpeed]);

//   const xPosition = -activeIndex * (100 / slides.length);

//   return (
//     <div
//       className={`relative overflow-hidden w-full ${className || ""}`}
//       ref={carouselRef}
//     >
//       <motion.div
//         className="flex h-full"
//         animate={{ x: `${xPosition}%` }}
//         transition={{
//           type: "tween",
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         style={{ width: `${slides.length * 100}%` }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-full h-full"
//             style={{ width: `${100 / slides.length}%` }}
//           >
//             {slide}
//           </div>
//         ))}
//       </motion.div>

//       <div className="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col justify-end items-end gap-1">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveIndex(index)}
//             className={`h-8 w-1 rounded-full transition-all duration-300 shadow-md cursor-pointer hover:w-2 ${
//               activeIndex === index
//                 ? "bg-white "
//                 : "bg-white/80  hover:bg-white"
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
const SlideShow = ({ children, autoPlaySpeed = 5000, className }) => {
  const slides = Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoPlaySpeed);

    return () => clearInterval(interval);
  }, [slides.length, autoPlaySpeed]);

  const yPosition = -activeIndex * (100 / slides.length);

  return (
    <div
      className={`relative overflow-hidden w-full h-[60vh] md:h-[80vh] lg:h-[100vh] ${className || ""}`}
      ref={carouselRef}
    >
      <motion.div
        className="flex flex-col h-full"
        animate={{ y: `${yPosition}%` }}
        transition={{
          type: "tween",
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{ height: `${slides.length * 100}%` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full"
            style={{ height: `${100 / slides.length}%` }}
          >
            {slide}
          </div>
        ))}
      </motion.div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col  justify-end items-end  gap-1">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-8 w-1 rounded-full transition-all duration-300 shadow-md cursor-pointer hover:w-2 ${
              activeIndex === index
                ? "bg-white"
                : "bg-white/80 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};



SlideShow.Slide = Slide;

export default SlideShow;
