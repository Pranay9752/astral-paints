import Image from "next/image";
import SlideShow from "../common/SlideShow/SlideShow";
import Slide from "../common/SlideShow/Slide";
import Link from "next/link";
import { getAsset } from "@/utils/getAsset";

export default function HeroSection({ data }) {
  return (
    <section id="hero" className="relative   ">
      <SlideShow className={"h-[60vh] md:h-[80vh] lg:h-[100vh]"}>
        {Array.isArray(data) &&
          data.map((banner, index) => {
            return (
              <Slide key={index} className="h-[60vh] md:h-[80vh] lg:h-[100vh]">
                <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[100vh] drop-shadow-sm overflow-hidden">
                  <Image
                    src={getAsset(banner.bannerImage)}
                    alt={banner.bannersTitle}
                    fill
                    className="object-cover z-0"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/40 z-10" />

                  <div className="absolute inset-0 z-20 flex items-center px-4 sm:px-8 md:px-12 lg:px-24">
                    <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 space-y-4 md:space-y-6">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        {banner.bannersTitle || ""}
                      </h1>

                      <p className="text-white text-sm sm:text-base md:text-lg">
                        {banner?.bannerDescription || ""}
                      </p>

                      <div>
                        <Link
                          href={banner?.bannerButton?.url || "#"}
                          className="inline-block bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-medium transition-colors"
                        >
                          {banner?.bannerButton?.title || "Learn More"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            );
          })}
      </SlideShow>
      <div className="absolute -bottom-[32px] md:-bottom-20 w-full h-[150px] md:h-[375px]  z-50">
        <Image
          src={"/rainbow.png"}
          alt={"rainbow Image"}
          fill
          className="absolute  "
        />
      </div>
    </section>
  );
}
