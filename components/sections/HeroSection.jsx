import Image from "next/image";
import SlideShow from "../common/SlideShow/SlideShow";
import Slide from "../common/SlideShow/Slide";
import Link from "next/link";

export default function HeroSection({ data }) {
  console.log("data: ", data);
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative w-full  m in-h-[500px]">
        <SlideShow className={"h-[650px]"}>
          {/* Purple Room Slide */}
          {Array.isArray(data) &&
            data.map((banner, index) => {
              console.log("banner: ", banner?.bannerButton);
              return (
                <Slide key={index}>
                  <div className=" relative container mx-auto px-4 py-16 w-full h-[650px] drop-shadow-sm">
                    <Image
                      src={banner.bannerImage.node.sourceUrl}
                      alt={banner.bannersTitle}
                      fill
                      className="absolute object-cover "
                    />
                    <div className="flex flex-col md:flex-row">
                      {/* Left Content */}
                      <div className="md:w-1/2 z-10 pt-8">
                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                          {banner.bannersTitle || ""}
                        </h1>
                        <p className="text-white mb-6">
                          {banner?.bannerDescription || ""}
                        </p>
                        <Link
                          href={banner?.bannerButton?.url}
                          className="bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-100 transition"
                        >
                          {banner?.bannerButton?.title || ""}
                        </Link>
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
