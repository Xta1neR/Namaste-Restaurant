import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative opacity-75">
        <Image
          src="/bg-hero.png"
          alt="Hero Image"
          width={1050}
          height={1050}
          className="md:w-full md:h-auto w-screen h-screen object-cover top-0 z-0"
        />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 ml-2 md:ml-24 md:w-1/2 ">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Food is our Passion
          <br />
          <p className="text-[#d29a5a] mt-5">
            Its time for the Indian <br />
            Spicy Delights
          </p>
        </h1>

        <div className="flex flex-row gap-4 md:gap-8 ">
          <a href="./Menu">
          <button className="px-4 py-2 mt-12 text-2xl text-black font-extralight bg-[#d29a5a] hover:bg-transparent border-2 border-[#d29a5a] transition duration-300 ease-in-out hover:text-white cursor-pointer">
            Explore Menu
          </button>
        </a>
        
        <a
          href="https://www.qooway.com/OLO/m-en?NamasteSalmonArm"
          target="_blank"
        >
          <button className="px-4 py-2 mt-12 text-2xl text-black font-extralight bg-[#d29a5a] hover:bg-transparent border-2 border-[#d29a5a] transition duration-300 ease-in-out hover:text-white cursor-pointer">
            Order Online
          </button>
        </a>
        </div>

        
      </div>
    </div>
  );
};

export default Hero;
