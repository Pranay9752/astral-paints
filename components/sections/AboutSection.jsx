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
}) {
  return (
    <section id='about' className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-screen-2xl mx-auto p-4 place-content-start">
      {/* Text Section */}
      <SectionLayout title={title} subtitle={subtitle} mainClass={'mt-10'} >
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis
          phasellus porttitor amet odio tempor. Ac molestie fames id urna dui
          posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at
          in pharetra velit luctus id pellentesque.
        </p>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis
          phasellus porttitor amet odio tempor. Ac molestie fames id urna dui
          posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at
          in pharetra velit luctus id pellentesque.
        </p>

        <Button
          {...buttonInfo}
          className={
            "border border-red-500 text-red-500 px-6 py-4 text-sm rounded-full hover:bg-red-500 hover:text-white transition"
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
