// components/IndoChineseStyleSection.tsx
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

interface IndoChineseDish {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const indoChineseLeftColumn: IndoChineseDish[] = [
  {
    title: "Spring Rolls",
    price: "$9.95",
    description: "Roll of thin pastry, filled with vegetables.",
    imageSrc: "/images/Spring Roll.jpg", // Replace with your image URL
    imageAlt: "Spring Rolls",
  },
  {
    title: "Veg Manchurian (Dry/Gravy)",
    price: "$16.95",
    description: "Fried vegetable balls cooked sweet and tangy Chinese sauce.",
    imageSrc: "/images/Veg Munchurian curry.jpg", // Replace with your image URL
    imageAlt: "Veg Manchurian",
  },
  {
    title: "Chicken Manchurian (Dry/Gravy)",
    price: "$16.95",
    description: "Boneless chicken pieces cooked sweet and tangy Chinese sauce.",
    imageSrc: "/images/Veg Munchurian curry.jpg", // Replace with your image URL
    imageAlt: "Chicken Manchurian",
  },
  {
    title: "Chilli Chicken (Dry/Gravy)",
    price: "$16.95",
    description: "Boneless chicken pieces prepared with onion and bell pepper, blended with Chinese sauce.",
    imageSrc: "/images/Chilly Chicken.jpg", // Replace with your image URL
    imageAlt: "Chilli Chicken",
  },
  {
    title: "Chilli Paneer (Dry/Gravy)",
    price: "$17.95",
    description: "Pieces of paneer prepared with onion and bell pepper, blended with Chinese sauce.",
    imageSrc: "/images/Chilly Paneer.jpg", // Replace with your image URL
    imageAlt: "Chilli Paneer",
  },
  {
    title: "Chilli Prawn (Dry/Gravy)",
    price: "$17.95",
    description: "Prawn prepared with onion and bell pepper, blended with Chinese sauce.",
    imageSrc: "/images/chilli-prawn.jpg", // Replace with your image URL
    imageAlt: "Chilli Prawn",
  },
  {
    title: "Veg Chowmien",
    price: "$14.95",
    description: "Rice noodles stir fried with Chinese sauces and vegetables.",
    imageSrc: "/images/Veg Chowmein.jpg", // Replace with your image URL
    imageAlt: "Veg Chowmien",
  },
];

const indoChineseRightColumn: IndoChineseDish[] = [
  {
    title: "Chicken Chowmien",
    price: "$15.95",
    description: "Rice noodles stir-fry with chicken, Chinese sauces, and vegetables.",
    imageSrc: "/images/Veg Chowmein.jpg", // Replace with your image URL
    imageAlt: "Chicken Chowmien",
  },
  {
    title: "Veg Fried Rice",
    price: "$14.95",
    description: "Cooked rice stir-fry with vegetables and Chinese sauce.",
    imageSrc: "/images/veg-fried-rice.jpg", // Replace with your image URL
    imageAlt: "Veg Fried Rice",
  },
  {
    title: "Chicken Fried Rice",
    price: "$15.95",
    description: "Cooked rice stir-fry with chicken and Chinese sauce.",
    imageSrc: "/images/chicken-fried-rice.jpg", // Replace with your image URL
    imageAlt: "Chicken Fried Rice",
  },
  {
    title: "Prawn Fried Rice",
    price: "$16.95",
    description: "Cooked rice stir-fry with Prawn and Chinese sauce.",
    imageSrc: "/images/prawn-fried-rice.jpg", // Replace with your image URL
    imageAlt: "Prawn Fried Rice",
  },
];

const IndoChineseStyleSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Indo Chinese Style</h1>
      <div className="flex items-center gap-3 mb-14">
        <div className="border-t border-[#d99e5f] w-24"></div>
        <span className="text-[#d99e5f] text-2xl">
          <FontAwesomeIcon icon={faBowlFood} />
        </span>
        <div className="border-t border-[#d99e5f] w-24"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
        {/* Left Column */}
        <div className="space-y-10">
          {indoChineseLeftColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
            <div key={title} className="flex items-start space-x-4">
              <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                  priority={false}
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <span className="font-semibold text-white">{price}</span>
                </div>
                <p className="text-[#d99e5f] text-xs mt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          {indoChineseRightColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
            <div key={title} className="flex items-start space-x-4">
              <div className="relative w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                  priority={false}
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between border-b border-[#d99e5f] pb-1">
                  <h3 className="font-semibold text-white">{title}</h3>
                  <span className="font-semibold text-white">{price}</span>
                </div>
                <p className="text-[#d99e5f] text-xs mt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndoChineseStyleSection;