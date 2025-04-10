"use client";
import React, {
  useState,
  useEffect,
  useRef,
  Children,
  cloneElement,
} from "react";
import Slide from "./Slide";
import { cn } from "@/utils/cn";

const SlideShow = ({ children, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const slideshowRef = useRef(null);
  const timerRef = useRef(null);

  const slides = Children.toArray(children).filter(
    (child) => child?._owner?.name === "Slide"
  );

  const extendedSlides = [
    ...slides,
    cloneElement(slides[0], { key: "cloned-first" }),
  ];

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setTimeout(() => {
        goToNextSlide();
      }, 3000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentIndex, isPaused]);

  useEffect(() => {
    if (currentIndex === slides.length) {
      const resetTimer = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(0);
      }, 1000);

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex, slides.length]);

  const goToNextSlide = () => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (slides.length + 1));
  };

  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      setIsAnimating(false);
      setCurrentIndex(slides.length);

      setTimeout(() => {
        setIsAnimating(true);
        setCurrentIndex(slides.length - 1);
      }, 50);
    } else {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div
      className={cn(`overflow-hidden relative `, className)}
      ref={slideshowRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="transition-transform ease-in-out h-full"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
          transitionDuration: `${isAnimating ? 1000 : 0}ms`,
        }}
      >
        {extendedSlides}
      </div>

    </div>
  );
};

SlideShow.Slide = Slide;

export default SlideShow;
