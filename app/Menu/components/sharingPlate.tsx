// components/SharingPlatesSection.tsx
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

interface SharingPlate {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const sharingPlatesLeftColumn: SharingPlate[] = [
  {
    title: "Namaste Special Set",
    price: "$23.95",
    description:
      "Two pieces of each: Tandoori Chicken, Garlic Chicken Tikka, Saffron Chicken Tikka, green chicken tikka, fish and prawns, all barbecued in our clay oven and served with mint chutney.",
    imageSrc: "/images/Tandoori Delight.jpg", // Replace with your image URL
    imageAlt: "Namaste Special Set",
  },
  {
    title: "Veggie Platter",
    price: "$16.95",
    description:
      "Samosas, pakora, spring roll & paneer fingers served with mint & tamarind chutney.",
    imageSrc: "/images/Veg Platter.jpg",
    imageAlt: "Veggie Platter",
  },
];

const sharingPlatesRightColumn: SharingPlate[] = [
  {
    title: "Tandoori Delight",
    price: "$23.95",
    description:
      "Three pieces of each: Tandoori Chicken, Garlic Chicken Tikka, saffron Chicken Tikka, green chicken tikka, all barbecued in our clay oven and served with mint chutney.",
    imageSrc: "/images/Tandoori Delight.jpg",
    imageAlt: "Tandoori Delight",
  },
];

const SharingPlatesSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Sharing Plates</h1>
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
          {sharingPlatesLeftColumn.map(
            ({ title, price, description, imageSrc, imageAlt }) => (
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
            )
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-10">
          {sharingPlatesRightColumn.map(
            ({ title, price, description, imageSrc, imageAlt }) => (
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
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SharingPlatesSection;