import React from "react";
import Image from "next/image";

const Reservation = () => {
  return (
    <div className="block">
      <div className="relative">
        
        <Image
            src={"/reservation.jpg"}
            alt="Restaurant interior with tables set with glasses and napkins, dim ambient lighting"
            width={1050}
            height={500}
            className="w-[100vw] h-[60vh] object-cover brightness-30"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left max-w-4xl px-6 flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <div className="text-white max-w-xl">
            <div className="flex items-center space-x-3 mb-2">
              <span className="block w-10 h-[1.5px] bg-[#d18a44]"></span>
              <span className="text-[#d18a44] text-xs tracking-widest font-semibold">
                RESERVE
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Reserve A Table
            </h1>
            <p className="text-sm md:text-base text-[#d9c9a3] max-w-md">
                Experience the perfect blend of ambiance and culinary delight. Reserve your table now and indulge in a memorable dining experience at our restaurant.
            </p>
          </div>
          <button className="mt-8 md:mt-0 bg-[#d18a44] text-black text-lg tracking-widest font-semibold py-4 px-10 uppercase hover:brightness-110 transition">
            Make a Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
