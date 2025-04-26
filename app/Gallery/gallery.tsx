'use client';
import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  return (
    <div className="bg-black p-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Image
          alt="Close-up of cooked steak on a black stone surface with rosemary and a wooden tray in the background"
          className="w-full object-cover hover:scale-105 transition-transform duration-300"
          height={400}
          width={600}
          src="https://storage.googleapis.com/a1aa/image/836538eb-0210-4415-2bdc-68b0f2e678a7.jpg"
        />
        <Image
          alt="Round cheese topped with walnuts and jam on a black plate with a fork on the side"
          className="w-full object-cover hover:scale-105 transition-transform duration-300"
          height={400}
          width={600}
          src="https://storage.googleapis.com/a1aa/image/b935813a-6495-422f-8791-26c3f3eacdaf.jpg"
        />
        <Image
          alt="Shrimp cooked in red sauce in a black pan with lemon wedges and red peppercorns on a black cloth"
          className="w-full object-cover hover:scale-105 transition-transform duration-300"
          height={400}
          width={600}
          src="https://storage.googleapis.com/a1aa/image/9d057e6e-0012-41e6-3647-d8570bc09ba4.jpg"
        />
        <Image
          alt="Cooked shrimp with grilled garlic in a black pan on a dark surface with scattered peppercorns"
          className="w-full object-cover hover:scale-105 transition-transform duration-300"
          height={400}
          width={600}
          src="https://storage.googleapis.com/a1aa/image/8bff4e7b-b472-4614-e0cb-4b302ea1ec96.jpg"
        />
        <Image
          alt="Grilled meat skewers on a black plate with ketchup in a small bowl and spinach leaves around"
          className="w-full object-cover hover:scale-105 transition-transform duration-300"
          height={400}
          width={600}
          src="https://storage.googleapis.com/a1aa/image/97cf554b-14c0-4e37-88ba-00f3bcd99b6b.jpg"
        />
        <Image
          alt="Chef wearing a blue shirt and brown apron pouring oil into a pan in a professional kitchen with another chef in the background"
          className="w-full object-cover hover:scale-105 transition-transform duration-300"
          height={400}
          width={600}
          src="https://storage.googleapis.com/a1aa/image/5026ecee-8c58-4491-c3af-004bb7daa6ea.jpg"
        />
      </div>
    </div>
  );
};

export default Gallery;
