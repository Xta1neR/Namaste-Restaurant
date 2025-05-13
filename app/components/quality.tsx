import React from "react";
import Image from "next/image";
import { faBowlFood, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Quality = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/quality.jpg"
          alt="Quality"
          width={1050}
          height={500}
          className="w-[100vw] h-[60vh] object-cover mask-auto opacity-40"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl md:text-8xl font-bold text-white">
            BEST QUALITY FOOD
          </h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-20 mx-auto gap-16 p-5 md:p-0 w-[90vw]">
        <div className="md:w-1/2">
          <Image
            src="/sample4.jpg"
            alt="Our Story"
            width={1050}
            height={1050}
            className="w-full md:w-[90%] md:m-20 h-auto rounded-sm"
          />
        </div>
        <div className="flex flex-col justify-center md:w-1/2 md:p-20 text-[#d1c8bb]">
          <h2 className="text-4xl md:text-7xl text-white font-bold mb-4">
            Our Focus
          </h2>
          <p className="text-lg">
            Namaste Authentic Indian Cuisine is committed to delivering
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-20 mt-8">
            <div>
              <ul className="flex flex-col gap-4 font-bold">
                <li className="text-white text-2xl">💯 Fresh Foods</li>
                <li className="text-white text-2xl">🧡 Authentic</li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4 font-bold">
                <li className="text-white text-2xl">🔪 Precision Cooking</li>
                <li className="text-white text-2xl">
                  🥗 Memorable Experiences
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 p-5 md:p-0 mt-10">
            <div className="flex flex-row justify-center items-center gap-8">
              <FontAwesomeIcon
                icon={faBowlFood}
                className="text-6xl text-[#d1c8bb]"
              />
              <div>
                <p className="text-4xl font-bold">50+</p>
                <p className="text-[#d1c8bb] text-xs">Menu Items</p>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-8">
              <FontAwesomeIcon
                icon={faHouse}
                className="text-6xl text-[#d1c8bb]"
              />
              <div>
                <p className="text-4xl font-bold">100+</p>
                <p className="text-[#d1c8bb] text-xs">Person Capacity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
