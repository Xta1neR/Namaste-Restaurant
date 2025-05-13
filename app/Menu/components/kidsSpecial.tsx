// components/KidsSpecialitiesSection.tsx
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

interface KidsSpeciality {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const kidsSpecialitiesLeftColumn: KidsSpeciality[] = [
  {
    title: "Fries",
    price: "$7.95",
    description: "French fries served with ketchup.",
    imageSrc: "/images/fries.webp", // Replace with your image URL
    imageAlt: "Fries",
  },
  {
    title: "Wings",
    price: "$13.95",
    description: "BBQ, hot, butter chicken sauce, honey garlic.",
    imageSrc: "/images/wings.jpg", // Replace with your image URL
    imageAlt: "Wings",
  },
];

const kidsSpecialitiesRightColumn: KidsSpeciality[] = [
  {
    title: "Chicken Bite with Fries",
    price: "$10.95",
    description: "",
    imageSrc: "/images/chicken-bite-with-fries.jpg", // Replace with your image URL
    imageAlt: "Chicken Bite with Fries",
  },
  {
    title: "Fish & Chips 1pcs/2pcs",
    price: "$11.95 / $15.95",
    description: "2 pieces of crispy battered cod served with fries and tartar sauce.",
    imageSrc: "/images/fish-and-chips.jpeg", // Replace with your image URL
    imageAlt: "Fish & Chips",
  },
];

const KidsSpecialitiesSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Kids Specialities</h1>
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
          {kidsSpecialitiesLeftColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
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
          {kidsSpecialitiesRightColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
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

export default KidsSpecialitiesSection;