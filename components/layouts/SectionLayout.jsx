"use client";
import { cn } from "@/utils/cn";
import React, { useRef } from "react";
import Button from "../common/ui/button";
import { motion, useInView } from "framer-motion";
import BrushStroke from "../common/ui/brushStroke";

function SectionLayout({
  title,
  subtitle,
  classname,
  mainClass,
  children,
  id,
  buttonData,
  stroke = "red",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      id={id}
      ref={ref}
      className={cn("max-w-screen-2xl mx-auto p-4 w-full", mainClass)}
    >
      <div className="flex justify-between items-center">
        <div>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-medium text-lg">{subtitle || ""}</p>
          </motion.div>

          <div className="flex items-center mb-8">
            <motion.h1
              className="text-xl md:text-3xl font-bold mr-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {title || ""}
            </motion.h1>

            
            <motion.div
              className={cn(" h-2", buttonData && "hidden md:block")}
              initial={{ width: 0, opacity: 0 }}
              animate={
                isInView
                  ? { width: "10rem", opacity: 1 }
                  : { width: 0, opacity: 0 }
              }
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <BrushStroke strokeColor={stroke} />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button {...buttonData} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          duration: 0.7,
          delay: 0.8,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default SectionLayout;
