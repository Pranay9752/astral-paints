// components/ServiceCard.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServiceCard = ({ image, title, description, gradientColor, href }) => {
  // Map of gradient colors for different cards
  const gradientColors = {
    yellow: 'from-yellow-300 to-yellow-400',
    orange: 'from-yellow-400 to-amber-400',
    green: 'from-lime-400 to-lime-500',
  };

  const gradient = gradientColors[gradientColor] || gradientColors.yellow;

  return (
    <div className="flex flex-col h-full overflow-hidden  shadow-md">
      {/* Image Section */}
      <div className="relative w-full h-64">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content Section */}
      <div className={`bg-gradient-to-r ${gradient} p-6 flex-grow`}>
        <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
        <p className="text-black mb-6">{description}</p>
        <Link href={href}>
          <span className="inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition duration-300">
            Read More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;