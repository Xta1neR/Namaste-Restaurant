// components/DessertsSection.tsx
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

interface Dessert {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const desserts: Dessert[] = [
  {
    title: "Gulab Jamun",
    price: "$6.50",
    description: "Deep fried milk solids, served in a warm sugar syrup.",
    imageSrc: "/images/Gulab Jamun.jpg", // Replace with your image URL
    imageAlt: "Gulab Jamun",
  },
  {
    title: "Rasmalai",
    price: "$6.50",
    description: "Homemade rich cheese served in milky cream.",
    imageSrc: "/images/Rasmalai_.jpg", // Replace with your image URL
    imageAlt: "Rasmalai",
  },
  {
    title: "Carrot Halwa",
    price: "$6.50",
    description: "Made from fresh carrots & cream. Served hot.",
    imageSrc: "/images/Carrot Halwa.jpg", // Replace with your image URL
    imageAlt: "Carrot Halwa",
  },
  {
    title: "Rice Pudding",
    price: "$6.50",
    description: "Homemade rice pudding served with sliced almonds on top.",
    imageSrc: "/images/Rice pudding.jpg", // Replace with your image URL
    imageAlt: "Rice Pudding",
  },
  {
    title: "Ice Cream",
    price: "$6.50",
    description: "Mango, strawberry, vanilla or chocolate.",
    imageSrc: "/images/icecream.webp", // Replace with your image URL
    imageAlt: "Ice Cream",
  },
];

const DessertsSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Desserts</h1>
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
          {desserts.slice(0, 3).map(({ title, price, description, imageSrc, imageAlt }) => (
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
          {desserts.slice(3).map(({ title, price, description, imageSrc, imageAlt }) => (
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

export default DessertsSection;