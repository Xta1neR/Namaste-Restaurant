import Image from 'next/image'
import React from 'react'

const MenuSelection = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-12">
   <div className="mb-8 max-w-lg">
    <div className="flex items-center gap-3 mb-2">
     <div className="w-10 h-[1.5px] bg-[#d9b37a]">
     </div>
     <p className="text-xs font-semibold tracking-widest uppercase text-[#d9b37a]">
      Menus
     </p>
    </div>
    <h1 className="text-white text-4xl font-extrabold leading-tight mb-4">
     Our Menus
    </h1>
    <p className="text-lg text-[#d9b37a] leading-relaxed">
        Explore our diverse menu options, each crafted with the finest ingredients and a touch of love. From appetizers to desserts, we have something for everyone.
    </p>
   </div>
   <a href="/Menu">
   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    <div className="flex flex-col items-center text-center">

        <Image
         src={"/1.jpg"}
            alt="Appetizer dish with chips, sauce drizzled on top, and some nuts on a black plate on a black background"
            width={400}
            height={400}
            className="w-full max-w-[400px] object-cover mb-6 hover:scale-110 transition-transform duration-300 ease-in-out"
        />

     <h3 className="text-[#d9b37a] font-semibold tracking-widest mb-1 uppercase text-sm">
      Appetizer
     </h3>
     <p className="text-xs text-[#d9b37a]">
      Snacks / Salads / Soups
     </p>
    </div>
    <div className="flex flex-col items-center text-center">

        <Image
         src={"/2.jpg"}
            alt="Main dish steak with herbs on a black plate on a dark textured background"
            width={400}
            height={400}
            className="w-full max-w-[400px] object-cover mb-6 hover:scale-110 transition-transform duration-300 ease-in-out"
        />

     <h3 className="text-[#d9b37a] font-semibold tracking-widest mb-1 uppercase text-sm">
      Main Dish
     </h3>
     <p className="text-xs text-[#d9b37a]">
      Chicken / Grills / Prawns
     </p>
    </div>
    <div className="flex flex-col items-center text-center">

        <Image
         src={"/3.jpg"}
            alt="Dessert with ice cream, whipped cream, a spoon, and glasses with amber liquid on a black surface"
            width={400}
            height={400}
            className="w-full max-w-[400px] object-cover mb-6 hover:scale-110 transition-transform duration-300 ease-in-out"
        />

     <h3 className="text-[#d9b37a] font-semibold tracking-widest mb-1 uppercase text-sm">
      Dessert
     </h3>
     <p className="text-xs text-[#d9b37a]">
      Ice Cream / Sweets / Pudding
     </p>
    </div>
   </div>
   </a>
  </div>

    </div>
  )
}

export default MenuSelection
