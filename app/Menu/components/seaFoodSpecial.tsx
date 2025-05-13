// components/SeafoodSpecialtiesSection.tsx
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

interface SeafoodSpecialty {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const seafoodLeftColumn: SeafoodSpecialty[] = [
  {
    title: "Prawn Masala",
    price: "$18.95",
    description: "Prawns cooked with fresh tomato, bell peppers & onions in a mildly spiced gravy.",
    imageSrc: "/images/prawn-masala.jpg", // Replace with your image URL
    imageAlt: "Prawn Masala",
  },
  {
    title: "Coconut Prawn Curry",
    price: "$17.95",
    description: "Prawns cooked with royal spices in a coconut cream sauce.",
    imageSrc: "/images/Tandoori Prawn.jpg", // Replace with your image URL
    imageAlt: "Coconut Prawn Curry",
  },
  {
    title: "Prawn Shahi Korma",
    price: "$18.95",
    description: "Prawns delicately cooked in a sauce seasoned with onions, cashews & cream.",
    imageSrc: "/images/prawn-shahi-korma.jpg", // Replace with your image URL
    imageAlt: "Prawn Shahi Korma",
  },
  {
    title: "Traditional Prawn Curry",
    price: "$17.95",
    description: "Prawns cooked in an onion & tomato sauce with ground spices.",
    imageSrc: "/images/traditional-prawn-curry.jpeg", // Replace with your image URL
    imageAlt: "Traditional Prawn Curry",
  },
  {
    title: "Coconut Curry Fish",
    price: "$17.95",
    description: "Basa fish delicately cooked in coconut cream and royal spices.",
    imageSrc: "/images/coconut-curry-fish.jpg", // Replace with your image URL
    imageAlt: "Coconut Curry Fish",
  },
];

const seafoodRightColumn: SeafoodSpecialty[] = [
  {
    title: "Traditional Fish Curry",
    price: "$17.95",
    description: "Fish cooked in an onion & tomato sauce with ground spices.",
    imageSrc: "/images/traditional-fish-curry.jpg", // Replace with your image URL
    imageAlt: "Traditional Fish Curry",
  },
  {
    title: "Fish Vindaloo",
    price: "$17.95",
    description: "Basa cooked with potatoes in a tangy sauce with coconut & vinegar.",
    imageSrc: "/images/fish-vindaloo.jpeg", // Replace with your image URL
    imageAlt: "Fish Vindaloo",
  },
  {
    title: "Fish Masala",
    price: "$17.95",
    description: "Basa cooked with fresh onions & bell pepper in a thick gravy.",
    imageSrc: "/images/fish-masala.jpeg", // Replace with your image URL
    imageAlt: "Fish Masala",
  },
  {
    title: "Chilli Prawn",
    price: "$17.95",
    description: "Prawn prepared with bell peppers, onion & exotic Indian spices with chilli garlic sauce.",
    imageSrc: "/images/Tandoor Prawn.jpg", // Replace with your image URL
    imageAlt: "Chilli Prawn",
  },
];

const SeafoodSpecialtiesSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Seafood Specialties</h1>
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
          {seafoodLeftColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
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
          {seafoodRightColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
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

export default SeafoodSpecialtiesSection;