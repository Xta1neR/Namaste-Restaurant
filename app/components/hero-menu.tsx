import Image from 'next/image'
import React from 'react'

const HeroMenu = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 lg:gap-24 text-white mt-20">
      <section className="lg:w-1/2 flex flex-col gap-8 md:hidden">
    <Image 
        src={"/special-menu-1.webp"}
        alt='image 1'
        width={480}
        height={320}
        className="w-full object-cover rounded-md"
    />
    <div className="flex gap-8">
        <Image 
            src={"/special-menu-2.webp"}
            alt='image 2'
            width={480}
            height={320}
            className="w-1/2 object-cover rounded-md"
        />
     <Image
        src={"/special-menu-3.webp"}    
        alt='image 3'
        width={480}
        height={320}
        className="w-1/2 object-cover rounded-md"
     />
    </div>
   </section>
   <section className="lg:w-1/2">
    <div className="flex items-center gap-3 mb-3">
     <span className="block w-10 h-[1px] bg-[#d68a3a]">
     </span>
     <p className="text-[#d68a3a] text-xl tracking-widest font-semibold">
      THIS WEEK
     </p>
    </div>
    <h1 className="text-6xl font-extrabold mb-10">
     Specials Menu
    </h1>
    <ul className="space-y-8">
     <li>
      <div className="flex justify-between items-center">
       <h3 className="text-xl font-semibold max-w-[70%]">
        Citrus Cured Salmon With Honey
       </h3>
       <span className="text-lg font-bold">
        $20
       </span>
      </div>
      <p className="text-[#d68a3a] text-lg mt-1">
       Salmon / Citrus / Honey / Spice
      </p>
     </li>
     <li>
      <div className="flex justify-between items-center">
       <h3 className="text-xl font-semibold max-w-[70%]">
        Pork Tenderloin In Yogurt
       </h3>
       <span className="text-lg font-bold">
        $25
       </span>
      </div>
      <p className="text-[#d68a3a] text-lg mt-1">
       Pork / Tenderloin / Yogurt
      </p>
     </li>
     <li>
      <div className="flex justify-between items-center">
       <h3 className="text-xl font-semibold max-w-[70%]">
        Grilled Pork With Lemons
       </h3>
       <span className="text-lg font-bold">
        $27
       </span>
      </div>
      <p className="text-[#d68a3a] text-lg mt-1">
       Pork / Lemon / Onions
      </p>
     </li>
     <li>
      <div className="flex justify-between items-center">
       <h3 className="text-xl font-semibold max-w-[70%]">
        Roasted Prawns with Coriander
       </h3>
       <span className="text-lg font-bold">
        $18
       </span>
      </div>
      <p className="text-[#d68a3a] text-lg mt-1">
       Prawn / Coriander / Spices
      </p>
     </li>
     <li>
      <div className="flex justify-between items-center">
       <h3 className="text-xl font-semibold max-w-[70%]">
        Prawn Sausage Cassaoulet
       </h3>
       <span className="text-lg font-bold">
        $19
       </span>
      </div>
      <p className="text-[#d68a3a] text-lg mt-1">
       Prawn / Sausage / Tomato
      </p>
     </li>
    </ul>
   </section>
   <section className="lg:w-1/2 hidden md:flex flex-col gap-8">
    <Image 
        src={"/special-menu-1.webp"}
        alt='image 1'
        width={480}
        height={320}
        className="w-full object-cover rounded-md"
    />
    <div className="flex gap-8">
        <Image 
            src={"/special-menu-2.webp"}
            alt='image 2'
            width={480}
            height={320}
            className="w-1/2 object-cover rounded-md"
        />
     <Image
        src={"/special-menu-3.webp"}    
        alt='image 3'
        width={480}
        height={320}
        className="w-1/2 object-cover rounded-md"
     />
    </div>
   </section>
  </div>
 
  )
}

export default HeroMenu
