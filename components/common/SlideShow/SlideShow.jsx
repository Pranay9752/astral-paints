"use client";

import React, {
  useState,
  useEffect,
  useRef,Children
} from "react";
import Slide from "./Slide";
import { cn } from "@/utils/cn";

// const SlideShow = ({ children, className, interval = 3000 }) => {
//   const [index, setIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const timeoutRef = useRef(null);

//   const slides = Children.toArray(children).filter(
//     (child) => isValidElement(child) && child.type === Slide
//   );

//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % slides.length);
//   };

//   useEffect(() => {
//     if (!isPaused && slides.length > 1) {
//       timeoutRef.current = setTimeout(nextSlide, interval);
//     }

//     return () => clearTimeout(timeoutRef.current);
//   }, [index, isPaused, interval, slides.length]);

//   return (
//     <div
//       className={cn("overflow-hidden relative", className)}
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <div
//         className="transition-transform duration-1000 ease-in-out h-full"
//         style={{
//           transform: `translateY(-${index * 100}%)`,
//         }}
//       >
//         {slides}
//       </div>
//     </div>
//   );
// };


// const SlideShow = ({ children, className = "", interval = 5000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const slides = React.Children.toArray(children);
//   const totalSlides = slides.length;

//   useEffect(() => {
//     if (totalSlides <= 1) return; // Don't set interval if only one slide
    
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//     }, interval);
    
//     return () => clearInterval(timer);
//   }, [interval, totalSlides]);

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
//   };

//   return (
//     <div className={cn("relative overflow-hidden w-full", className)}>
//       <div 
//         className="flex flex-col transition-transform duration-1000 ease-in-out h-full"
//         style={{
//           transform: `translateY(-${currentIndex * 100}%)`,
//           height: `${totalSlides * 100}%`
//         }}
//       >
//         {slides.map((slide, idx) => (
//           // <div key={idx} className="w-full flex-shrink-0" style={{ height: `${100 / totalSlides}%` }}>
//            <>{slide}</> 
//           // </div>
//         ))}
//       </div>

//       <div className="absolute bottom-4 right-4 flex flex-col space-y-2 z-10">
//         {slides.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => goToSlide(idx)}
//             className={cn(
//               "w-3 h-3 rounded-full transition-all duration-300",
//               currentIndex === idx ? "bg-white scale-110" : "bg-white/50 hover:bg-white/80"
//             )}
//             aria-label={`Go to slide ${idx + 1}`}
//           />
//         ))}
//       </div>

     
//     </div>
//   );
// };


const SlideShow = ({ children, className }) => {
  const slides = Children.toArray(children);
  // Clone first slide to create seamless infinite effect
  const extendedSlides = [...slides];
  const extendedSlidesLength = extendedSlides.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev < extendedSlidesLength - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [extendedSlidesLength]);
 
  useEffect(() => {
    if (activeIndex === extendedSlidesLength - 1) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(false);
        setActiveIndex(0);
        setTimeout(() => setTransitionEnabled(true), 0);
      }, 1000); // Match transition duration

      return () => clearTimeout(timeout);
    }
  }, [activeIndex, extendedSlidesLength]);

  return (
    <div className={`${className} overflow-hidden`}>
      <div
        className="transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateY(-${activeIndex * 100}vh)`,
          transition: transitionEnabled ? 'transform 1000ms ease-in-out' : 'none',
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={index} className="h-[100vh]">
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};


SlideShow.Slide = Slide;

export default SlideShow;
