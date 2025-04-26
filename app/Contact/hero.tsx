import React from "react";
import Image from "next/image";


const Hero = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src="/menu-hero.jpg"
          alt="Quality"
          width={1050}
          height={500}
          className="w-[100vw] h-[60vh] object-cover mask-auto opacity-40"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl md:text-8xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </div>

    </div>
  );
};

export default Hero;
