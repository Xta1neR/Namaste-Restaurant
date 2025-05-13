// components/TandooriStuffedBreadsSection.tsx
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

interface TandooriStuffedBread {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const tandooriStuffedBreadsLeftColumn: TandooriStuffedBread[] = [
  {
    title: "Cheese & Spinach Naan",
    price: "$6.95",
    description: "Naan bread stuffed with chopped spinach, cheese & grated Indian cheese.",
    imageSrc: "/images/cheese-spinach-naan.jpeg", // Replace with your image URL
    imageAlt: "Cheese & Spinach Naan",
  },
  {
    title: "Peshawari Naan",
    price: "$6.95",
    description: "Naan bread stuffed with shredded coconut, raisins & cashews.",
    imageSrc: "/images/peshawari-naan.jpeg", // Replace with your image URL
    imageAlt: "Peshawari Naan",
  },
  {
    title: "Chicken & Cheese Naan",
    price: "$6.95",
    description: "Naan bread stuffed with chicken & cheese.",
    imageSrc: "/images/chicken-cheese-naan.jpg", // Replace with your image URL
    imageAlt: "Chicken & Cheese Naan",
  },
];

const tandooriStuffedBreadsRightColumn: TandooriStuffedBread[] = [
  {
    title: "Aloo Naan",
    price: "$5.95",
    description: "Naan bread stuffed with potatoes & cilantro.",
    imageSrc: "/images/aloo-naan.jpg", // Replace with your image URL
    imageAlt: "Aloo Naan",
  },
  {
    title: "Aloo Parantha",
    price: "$5.00",
    description: "Whole wheat bread stuffed with potatoes and authentic spices.",
    imageSrc: "/images/aloo-parantha.jpeg", // Replace with your image URL
    imageAlt: "Aloo Parantha",
  },
];

const TandooriStuffedBreadsSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Tandoori Stuffed Breads</h1>
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
          {tandooriStuffedBreadsLeftColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
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
          {tandooriStuffedBreadsRightColumn.map(({ title, price , description, imageSrc, imageAlt }) => (
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

export default TandooriStuffedBreadsSection;