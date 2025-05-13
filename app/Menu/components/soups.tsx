// components/SoupSection.tsx
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

interface Soup {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const soupsLeftColumn: Soup[] = [
  {
    title: "Tomato Soup",
    price: "$5.00",
    description: "",
    imageSrc: "/images/tomato-soup.jpg", // Replace with your image URL
    imageAlt: "Tomato Soup",
  },
  {
    title: "Creamy Tomato Soup",
    price: "$5.95",
    description: "",
    imageSrc: "/images/creamy-tomato-soup.jpg", // Replace with your image URL
    imageAlt: "Creamy Tomato Soup",
  },
  {
    title: "Cream of Chicken Soup",
    price: "$6.95",
    description: "",
    imageSrc: "/images/cream-of-chicken-soup.jpeg", // Replace with your image URL
    imageAlt: "Cream of Chicken Soup",
  },
];

const soupsRightColumn: Soup[] = [
  {
    title: "Lentil Soup",
    price: "$5.95",
    description: "",
    imageSrc: "/images/lentil-soup.jpeg", // Replace with your image URL
    imageAlt: "Lentil Soup",
  },
  {
    title: "Vegetable Soup",
    price: "$6.95",
    description: "",
    imageSrc: "/images/vegetable-soup.jpg", // Replace with your image URL
    imageAlt: "Vegetable Soup",
  },
  {
    title: "Namaste Special Soup",
    price: "$7.95",
    description: "Chicken, prawn and vegetables.",
    imageSrc: "/images/namaste-special-soup.jpeg", // Replace with your image URL
    imageAlt: "Namaste Special Soup",
  },
];

const SoupSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Soup</h1>
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
          {soupsLeftColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
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
          {soupsRightColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
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

export default SoupSection;