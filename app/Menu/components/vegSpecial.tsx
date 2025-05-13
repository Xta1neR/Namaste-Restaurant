// components/VegetarianSpecialtiesSection.tsx
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';

interface VegetarianSpecialty {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const vegetarianLeftColumn: VegetarianSpecialty[] = [
  {
    title: "Aloo Gobhi",
    price: "$15.95",
    description: "Fresh cauliflower & potatoes cooked with onions, tomatoes & spices.",
    imageSrc: "/images/Aloo Gobhi.jpg", // Replace with your image URL
    imageAlt: "Aloo Gobhi",
  },
  {
    title: "Baingan Bharta",
    price: "$15.95",
    description: "Mashed eggplant cooked with onion & spices.",
    imageSrc: "/images/baingan-bharta.jpg", // Replace with your image URL
    imageAlt: "Baingan Bharta",
  },
  {
    title: "Mixed Vegetables",
    price: "$15.95",
    description: "Seasonal fresh vegetables cooked in exotic Indian spices.",
    imageSrc: "/images/Mix Vegitable.jpg", // Replace with your image URL
    imageAlt: "Mixed Vegetables",
  },
  {
    title: "Chana Masala",
    price: "$15.95",
    description: "Chick peas cooked with tomatoes, ginger, onions & garnished with fresh cilantro.",
    imageSrc: "/images/Channa Masala.jpg", // Replace with your image URL
    imageAlt: "Chana Masala",
  },
  {
    title: "Matar Mushroom",
    price: "$15.95",
    description: "Fresh mushroom & green peas cooked in a fine onion & tomato sauce with garlic & ginger.",
    imageSrc: "/images/matar-mushroom.jpg", // Replace with your image URL
    imageAlt: "Matar Mushroom",
  },
  {
    title: "Vegetable Mango Curry",
    price: "$15.95",
    description: "Fresh vegetables cooked in mango sauce & exotic spices.",
    imageSrc: "/images/vegetable-mango-curry.webp", // Replace with your image URL
    imageAlt: "Vegetable Mango Curry",
  },
  {
    title: "Green Vegetable Curry",
    price: "$15.95",
    description: "Seasonal vegetables cooked with a fine paste of broccoli, mint, spinach, cilantro, green pepper & herbs.",
    imageSrc: "/images/green-vegetable-curry.jpeg", // Replace with your image URL
    imageAlt: "Green Vegetable Curry",
  },
];

const vegetarianRightColumn: VegetarianSpecialty[] = [
  {
    title: "Dal Makhani",
    price: "$15.95",
    description: "Lentils cooked in garlic onions aromatic spices & tempered with butter.",
    imageSrc: "/images/dal-makhani.webp", // Replace with your image URL
    imageAlt: "Dal Makhani",
  },
  {
    title: "Dal Fry",
    price: "$14.95",
    description: "Yellow lentils cooked with butter, garlic, onions & whole spices.",
    imageSrc: "/images/dal-fry.jpg", // Replace with your image URL
    imageAlt: "Dal Fry",
  },
  {
    title: "Malai Kofta",
    price: "$16.95",
    description: "Grated Indian cheese dumplings cooked in creamy onion sauce.",
    imageSrc: "/images/malai-kofta.jpeg", // Replace with your image URL
    imageAlt: "Malai Kofta",
  },
  {
    title: "Veg Jalfrezi",
    price: "$15.95",
    description: "Mixed veggies cooked with onions, green peppers, ginger, garlic & dash of vinegar.",
    imageSrc: "/images/veg-jalfrezi.jpg", // Replace with your image URL
    imageAlt: "Veg Jalfrezi",
  },
  {
    title: "Vegetable Coconut Curry",
    price: "$15.95",
    description: "Fresh vegetables cooked in coconut cream and royal spices.",
    imageSrc: "/images/vegetable-coconut-curry.jpeg", // Replace with your image URL
    imageAlt: "Vegetable Coconut Curry",
  },
  {
    title: "Vegetable Shahi Korma",
    price: "$16.95",
    description: "Mixed vegetables delic ately cooked in a seasoned, creamy sauce with onion & cashews.",
    imageSrc: "/images/vegetable-shahi-korma.jpeg", // Replace with your image URL
    imageAlt: "Vegetable Shahi Korma",
  },
  {
    title: "Bhindi Masala",
    price: "$15.95",
    description: "Masala okra cooked with onions, tomatoes and tangy spices.",
    imageSrc: "/images/bhindi-masala.jpg", // Replace with your image URL
    imageAlt: "Bhindi Masala",
  },
];

const VegetarianSpecialtiesSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Vegetarian Specialties</h1>
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
          {vegetarianLeftColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
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
          {vegetarianRightColumn.map(({ title, price, description, imageSrc, imageAlt }) => (
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

export default VegetarianSpecialtiesSection;