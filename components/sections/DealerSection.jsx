import React from "react";
import Button from "../common/ui/button";

const DealerSection = ({
  backgroundImage,
  subtitle,
  title,
  description,
  buttonData,
}) => {
  return (
    <section
    id="become-a-dealer"
      className="w-full h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-center px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="max-w-3xl text-white">
        <p className="text-lg md:text-xl mb-2">{subtitle || ""}</p>
        <h1 className="text-2xl md:text-4xl font-bold mb-4">{title || ""}</h1>
        <p
          className="text-sm md:text-base mb-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <Button {...buttonData} />
      </div>
    </section>
  );
};

export default DealerSection;
