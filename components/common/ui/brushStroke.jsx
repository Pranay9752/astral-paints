import Image from "next/image";
import React from "react";

const strokes = {
  red: { alt: "Red line brush stroke", svg: "/red-stroke.svg" },
  yellow: { alt: "Yellow line brush stroke", svg: "/yellow-stroke.svg" },
  orange: { alt: "Orange line brush stroke", svg: "/orange-stroke.svg" },
  green: { alt: "Green line brush stroke", svg: "/green-stroke.svg" },
  blue: { alt: "Blue line brush stroke", svg: "/blue-stroke.svg" },
};

function BrushStroke({ strokeColor }) {
  const stroke = strokes[strokeColor || "red"];
  return (
    <>
      <Image src={stroke.svg} alt={stroke.alt} width={1700} height={10} />
    </>
  );
}

export default BrushStroke;
