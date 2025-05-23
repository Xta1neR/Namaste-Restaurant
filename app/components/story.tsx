import React from "react";
import Image from "next/image";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Story = () => {
  return (
    <div
      id="aboutus"
      className="flex flex-col md:flex-row w-3/4 mx-auto gap-16 bg-emerald-950 rounded-md p-5 md:p-0 "
    >
      <div>
        <Image
          src="/sample5.jpg"
          alt="Our Story"
          width={1050}
          height={1050}
          className="w-[400px] h-auto md:rounded-l-3xl"
        />
      </div>
      <div className="flex flex-col justify-center md:w-1/2">
        <h2 className="text-4xl md:text-7xl text-white font-bold mb-4">
          Our Story
        </h2>
        <p className="text-lg text-gray-300">
          Welcome to Namaste Authentic Indian Cuisine Nestled in the heart of
          Salmon Arm, Namaste Authentic Indian Cuisine offers a rich tapestry of
          traditional Indian flavors, crafted with passion and precision. Our
          chefs blend time-honored recipes with the freshest ingredients to
          deliver an unforgettable dining experience.{" "}
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-20 mt-8">
          <div>
            <ul className="flex flex-col gap-4 font-bold">
              <li className="text-white">
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="mr-2"
                />
                Authentic Indian Cuisine
              </li>
              <li className="text-white">
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="mr-2"
                />
                Exquisite Flavors
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4 font-bold">
              <li className="text-white">
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="mr-2"
                />
                Skilled Chefs
              </li>
              <li className="text-white">
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className="mr-2"
                />
                Quality Ingredients
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
