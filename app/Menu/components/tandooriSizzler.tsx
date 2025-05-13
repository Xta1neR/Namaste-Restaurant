// components/TandooriSizzlersSection.tsx
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";

interface TandooriSizzler {
  title: string;
  price: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const tandooriSizzlersLeftColumn: TandooriSizzler[] = [
  {
    title: "Garlic Chicken Tikka",
    price: "$18.95",
    description:
      "Boneless chicken pieces marinated with garlic & exotic Indian spices. Cooked in our Indian clay oven & served with mint chutney. Served on rice.",
    imageSrc: "/images/Garlic Chicken Tikka.jpg", 
    imageAlt: "Garlic Chicken Tikka",
  },
  {
    title: "Saffron Chicken Tikka",
    price: "$18.95",
    description:
      "Boneless chicken pieces marinated with cream cheese, saffron & exotic Indian spices. Cooked in our Indian clay oven & served with mint chutney. Served on rice.",
    imageSrc: "/images/Garlic Chicken Tikka.jpg",
    imageAlt: "Saffron Chicken Tikka",
  },
  {
    title: "Green Chicken Tikka",
    price: "$18.95",
    description:
      "Boneless chicken pieces marinated with fresh mint, cilantro & exotic Indian spices. Cooked in our Indian clay oven & served with mint chutney. Served on rice.",
    imageSrc: "/images/Tandoori Green Chicken Tikka.jpg", 
    imageAlt: "Green Chicken Tikka",
  },
  {
    title: "Tandoori Chicken 4pcs/8pcs",
    price: "$15.95/$22.95",
    description:
      "Chicken marinated with yogurt & exotic Indian spices. Cooked in our Indian clay oven & served with mint chutney.",
    imageSrc: "/images/Tandoori Delight.jpg", 
    imageAlt: "Tandoori Chicken",
  },
];

const tandooriSizzlersRightColumn: TandooriSizzler[] = [
  {
    title: "Kasturi Shashlic Paneer Tikka",
    price: "$19.95",
    description:
      "Indian cheese, onion and bell peppers marinated in yogurt, fenugreek leaves & spices. Cooked in our Indian clay oven & served with mint chutney.",
    imageSrc: "/images/kasturi-shashlic-paneer-tikka.jpg", // Replace with your image URL
    imageAlt: "Kasturi Shashlic Paneer Tikka",
  },
  {
    title: "Tandoori Fish Tikka",
    price: "$18.95",
    description:
      "Basa fish marinated with ginger, garlic and exotic Indian spices. Cooked in our Indian clay oven & served with mint chutney. Served on rice.",
    imageSrc: "/images/tandoori-fish-tikka.jpeg", // Replace with your image URL
    imageAlt: "Tandoori Fish Tikka",
  },
  {
    title: "Tandoori Prawns Tikka",
    price: "$19.95",
    description:
      "Tiger prawns marinated with ginger, garlic & exotic Indian spices. Cooked in our Indian clay oven and served with mint chutney. Served on rice.",
    imageSrc: "/images/tandoori-prawns-tikka.jpeg", // Replace with your image URL
    imageAlt: "Tandoori Prawns Tikka",
  },
];

const TandooriSizzlersSection: React.FC = () => {
  return (
    <section className="bg-[#110c09] text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-3">Tandoori Sizzlers</h1>
      <div className="flex items-center gap-3 mb-14">
        <div className="border-t border-[#d99e5f] w-24"></div>
        <span className="text-[#d99e5f] text-2xl">
          <FontAwesomeIcon icon={faBowlFood} />
        </span>
        <div className="border-t border-[#d99e5f] w -24"></div>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
        {/* Left Column */}
        <div className="space-y-10">
          {tandooriSizzlersLeftColumn.map(
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
          {tandooriSizzlersRightColumn.map(
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

export default TandooriSizzlersSection;
