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
    (child) => child?._owner.name === "Slide"
  );
  console.log("slides: ", Children.toArray(children)[0]);

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
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        <button
          onClick={goToPrevSlide}
          className="bg-white/30 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white/50 transition-colors focus:outline-none"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="bg-white/30 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white/50 transition-colors focus:outline-none"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        {slides.map((_, index) => (
          <button
            key={`indicator-${index}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === (currentIndex === slides.length ? 0 : currentIndex)
                ? "bg-white"
                : "bg-white/30 hover:bg-white/50"
            }`}
            onClick={() => {
              setIsAnimating(true);
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

SlideShow.Slide = Slide;

export default SlideShow;
