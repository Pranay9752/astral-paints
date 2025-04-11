// components/AboutAstral.tsx
"use client";

import React from "react";
import SectionLayout from "../layouts/SectionLayout";
import Button from "../common/ui/button";
import Image from "next/image";

export default function AboutSection({
  videoUrl,
  buttonInfo,
  subtitle,
  title,
  description
}) {
  return (
    <section id='about' className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-screen-2xl mx-auto p-4 place-content-start">
      {/* Text Section */}
      <SectionLayout title={title} subtitle={subtitle} mainClass={'mt-10'} >
        <p className="text-gray-600 mb-4" dangerouslySetInnerHTML={{__html: description}}/>
        

        <Button
          {...buttonInfo}
          className={
            "border border-red-500 text-red-500 px-6 py-4 text-sm rounded-full hover:bg-red-500 hover:text-white transition mt-56"
          }
        />
      </SectionLayout>

      <div className="flex justify-center">
        <div className="relative w-full  h-[600px] overflow-hidden shadow-lg">
          <Image
            src={videoUrl} 
            alt="Astral Paints About"
            fill
            style={{ objectFit: 'cover' }}
            className=" w-full"
          />
        </div>
      </div>
    </section>
  );
}
