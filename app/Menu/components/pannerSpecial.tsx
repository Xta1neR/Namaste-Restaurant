// components/PaneerSpecialtiesSection.tsx
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

interface PaneerSpecialty {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const paneerLeftColumn: PaneerSpecialty[] = [
  {
    title: "Palak Paneer",
    price: "$16.95",
    description: "Chopped spinach cooked delicately in ginger, garlic & onions mixed with pieces of Indian cheese.",
    imageSrc: "/images/palak-paneer.jpg", // Replace with your image URL
    imageAlt: "Palak Paneer",
  },
  {
    title: "Kadai Paneer",
    price: "$16.95",
    description: "Indian cheese cooked with freshly sliced peppers, onions & exotic spices.",
    imageSrc: "/images/kadai-paneer.jpg", // Replace with your image URL
    imageAlt: "Kadai Paneer",
  },
  {
    title: "Matar Paneer",
    price: "$16.95",
    description: "Tender cubes of Indian cheese cooked with green peas in an onion & tomato sauce with exotic spices.",
    imageSrc: "/images/matar-paneer.jpg", // Replace with your image URL
    imageAlt: "Matar Paneer",
  },
];

const paneerRightColumn: PaneerSpecialty[] = [
  {
    title: "Shahi Paneer",
    price: "$15.95",
    description: "Diced Indian cheese cooked in a thick sauce of onions, nuts & cream with a hint of fenugreek leaves.",
    imageSrc: "/images/Shahi Paneer.jpg", // Replace with your image URL
    imageAlt: "Shahi Paneer",
  },
  {
    title: "Paneer Makhani",
    price: "$16.95",
    description: "Indian cheese simmered in a tomato & butter gravy, topped with cream.",
    imageSrc: "/images/paneer-makhani.jpg", // Replace with your image URL
    imageAlt: "Paneer Makhani",
  },
  {
    title: "Chilli Paneer",
    price: "$15.95",
    description: "Paneer prepared with bell peppers, onion & exotic Indian spices with chilli garlic sauce.",
    imageSrc: "/images/chilli-paneer.jpg", // Replace with your image URL
    imageAlt: "Chilli Paneer",
  },
];

const PaneerSpecialtiesSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Paneer Specialties</h1>
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
          {paneerLeftColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
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
          {paneerRightColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
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

export default PaneerSpecialtiesSection;