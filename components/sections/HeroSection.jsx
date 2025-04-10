import Image from "next/image";
import SlideShow from "../common/SlideShow/SlideShow";
import Slide from "../common/SlideShow/Slide";

export default function HeroSection({ data }) {
  console.log("data: ", data);
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative w-full  min-h-[500px]">
        <SlideShow>
          {/* Purple Room Slide */}
          {Array.isArray(data) &&
            data.map((banner, index) => {
              return (
                <Slide key={index}>
                  <div className="container mx-auto px-4 py-16">
                    <div className="flex flex-col md:flex-row">
                      {/* Left Content */}
                      <div className="md:w-1/2 z-10 pt-8">
                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                          {banner.bannersTitle || ""}
                        </h1>
                        <p className="text-white mb-6">
                          Excellent Fungal Resistance | Smooth Finish
                        </p>
                        <button className="bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-100 transition">
                          Read More
                        </button>
                      </div>

                      {/* Right Content - Furniture elements would be positioned here */}
                      <div className="md:w-1/2 relative">
                        {/* This area would have the furniture and shelving images */}
                      </div>
                    </div>
                  </div>
                </Slide>
              );
            })}
        </SlideShow>
      </section>
    </div>
  );
}
