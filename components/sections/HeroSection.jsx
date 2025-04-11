import Image from "next/image";
import SlideShow from "../common/SlideShow/SlideShow";
import Slide from "../common/SlideShow/Slide";
import Link from "next/link";
import { getAsset } from "@/utils/getAsset";

export default function HeroSection({ data }) {
  return (
      <section id="hero" className="relative   ">
        <SlideShow className={"h-[100vh]"}>
          {Array.isArray(data) &&
            data.map((banner, index) => {
              return (
                <Slide key={index} className="h-[100vh]">
                  <div className=" relative  px-4 py-16 w-full h-[100vh] drop-shadow-sm">
                    <Image
                      src={getAsset(banner.bannerImage)}
                      alt={banner.bannersTitle}
                      fill
                      className="absolute object-cover "
                    />
                    <div className="flex flex-col md:flex-row">
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
                    </div>
                  </div>
                </Slide>
              );
            })}
        </SlideShow>
      <div className="absolute -bottom-20 w-full h-[375px] rotat e-2 z-50">
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
