// components/AboutAstral.tsx
"use client";

import React, { useRef } from "react";
import SectionLayout from "../layouts/SectionLayout";
import Button from "../common/ui/button";
import Image from "next/image";
import { useInView, motion } from "framer-motion";

export default function AboutSection({
  videoUrl,
  buttonInfo,
  subtitle,
  title,
  description,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <section
      id="about"
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-screen-2xl mx-auto p-4 place-content-start"
    >
      {/* Text Section */}
      <SectionLayout title={title} subtitle={subtitle} mainClass={"mt-10"}>
        <p
          className="text-gray-600 mb-4"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <Button
          {...buttonInfo}
          className={
            "border border-red-500 text-red-500 px-6 py-4 text-sm rounded-full hover:bg-red-500 hover:text-white transition mt-56"
          }
        />
      </SectionLayout>

      <motion.div
        ref={ref}
        className="relative w-full h-[600px] overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="w-full h-full"
          initial={{ y: 20 }}
          animate={isInView ? { y: 0 } : { y: 20 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Image
            src={videoUrl}
            alt={"Astral Paints About"}
            fill
            style={{ objectFit: "cover" }}
            className="w-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
