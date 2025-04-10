"use client";

import React, {
  useState,
  useEffect,
  useRef,
  Children,
  isValidElement,
} from "react";
import Slide from "./Slide";
import { cn } from "@/utils/cn";

const SlideShow = ({ children, className, interval = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  const slides = Children.toArray(children).filter(
    (child) => isValidElement(child) && child.type === Slide
  );

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    if (!isPaused && slides.length > 1) {
      timeoutRef.current = setTimeout(nextSlide, interval);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [index, isPaused, interval, slides.length]);

  return (
    <div
      className={cn("overflow-hidden relative", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="transition-transform duration-1000 ease-in-out h-full"
        style={{
          transform: `translateY(-${index * 100}%)`,
        }}
      >
        {slides}
      </div>
    </div>
  );
};

SlideShow.Slide = Slide;

export default SlideShow;
