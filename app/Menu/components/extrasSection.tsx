// components/ExtrasSection.tsx
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

interface Extra {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const extras: Extra[] = [
  {
    title: "Papadum",
    price: "$3.00",
    description: "Crispy lentil wafers served as a side.",
    imageSrc: "/images/papadum.jpeg", // Replace with your image URL
    imageAlt: "Papadum",
  },
  {
    title: "Mixed Pickle",
    price: "$3.95",
    description: "A blend of pickled vegetables for a tangy flavor.",
    imageSrc: "/images/mixed-pickle.jpeg", // Replace with your image URL
    imageAlt: "Mixed Pickle",
  },
  {
    title: "Raita",
    price: "$4.95",
    description: "A cooling yogurt side dish with spices.",
    imageSrc: "/images/raita.webp", // Replace with your image URL
    imageAlt: "Raita",
  },
  {
    title: "Mango Chutney",
    price: "$2.95",
    description: "Sweet and tangy mango chutney.",
    imageSrc: "/images/mango-chutney.jpeg", // Replace with your image URL
    imageAlt: "Mango Chutney",
  },
  {
    title: "Mint Chutney",
    price: "$1.95",
    description: "Fresh mint chutney for a refreshing taste.",
    imageSrc: "/images/mint-chutney.jpg", // Replace with your image URL
    imageAlt: "Mint Chutney",
  },
  {
    title: "Tamarind Chutney",
    price: "$1.95",
    description: "Tangy tamarind chutney to enhance your meal.",
    imageSrc: "/images/tamarind-chutney.jpg", // Replace with your image URL
    imageAlt: "Tamarind Chutney",
  },
  {
    title: "Add Chicken",
    price: "$4.95",
    description: "Add chicken to your dish for extra protein.",
    imageSrc: "/images/add-chicken.jpeg", // Replace with your image URL
    imageAlt: "Add Chicken",
  },
  {
    title: "Add Lamb",
    price: "$5.95",
    description: "Add lamb for a rich flavor.",
    imageSrc: "/images/add-lamb.jpg", // Replace with your image URL
    imageAlt: "Add Lamb",
  },
  {
    title: "Add Prawns",
    price: "$5.95",
    description: "Add prawns for a seafood twist.",
    imageSrc: "/images/add-prawns.jpeg", // Replace with your image URL
    imageAlt: "Add Prawns",
  },
  {
    title: "Add Steamed Vegetables (12 oz)",
    price: "$4.95",
    description: "Add a side of steamed vegetables.",
    imageSrc: "/images/add-steamed-vegetables.jpg", // Replace with your image URL
    imageAlt: "Add Steamed Vegetables",
  },
  {
    title: "Side of Red Onions",
    price: "$2.95",
    description: "Add a side of fresh red onions.",
    imageSrc: "/images/side-red-onions.jpeg", // Replace with your image URL
    imageAlt: "Side of Red Onions",
  },
];

const ExtrasSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Extras</h1>
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
          {extras.slice(0, 6).map(({ title, price, description, imageSrc, imageAlt }) => (
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
          {extras.slice(6).map(({ title, price, description, imageSrc, imageAlt }) => (
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

export default ExtrasSection;