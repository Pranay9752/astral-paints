import { cn } from "@/utils/cn";
import React from "react";

const Button = ({ title, url, target, className }) => {
  return (
    <a
      href={url}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={cn("bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition", className)}
    >
      {title}
    </a>
  );
};

export default Button;
