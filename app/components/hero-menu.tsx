import Image from 'next/image'
import React from 'react'

const HeroMenu = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row gap-12 lg:gap-24 text-white mt-20">
      <section className="lg:w-1/2 flex flex-col gap-8 md:hidden">
    <Image 
        src={"/sample1.jpg"}
        alt='image 1'
        width={480}
        height={320}
        className="w-full object-cover rounded-md"
    />
    <div className="flex gap-8">
        <Image
            src={"/sample2.jpg"}
            alt='image 2'
            width={480}
            height={320}
            className="w-1/2 object-cover rounded-md"
        />
     <Image
        src={"/sample3.jpg"}    
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
      🌟 Five Signature flavours to Highlight
     </p>
    </div>
    <h1 className="text-6xl font-extrabold mb-10">
     Special Menu
    </h1>
    <ul className="space-y-8">
     <li>
      <div className="flex justify-between items-center">
       <h3 className="text-xl font-semibold max-w-[70%]">
        Butter Chicken Poutine
       </h3>
       <span className="text-lg font-bold">
        $10.95
       </span>
      </div>
      <p className="text-[#d68a3a] text-lg mt-1">
       A delightful fusion of Canadian comfort food and Indian flavors, featuring creamy butter chicken atop crispy fries and melted cheese.
      </p>
     </li>
     <li>
      <div className="flex justify-between items-center">
       <h3 className="text-xl font-semibold max-w-[70%]">
        Namaste Special Set
       </h3>
       <span className="text-lg font-bold">
        $23.95
       </span>
      </div>
      <p className="text-[#d68a3a] text-lg mt-1">
       An assortment of tandoori delights, including Tandoori Chicken, Garlic Chicken Tikka, Saffron Chicken Tikka, Green Chicken Tikka, and prawns, all barbecued in our clay oven and served with mint chutney.
      </p>
     </li>
     <li>
      <div className="flex justify-between items-center">
       <h3 className="text-xl font-semibold max-w-[70%]">
        Malai Kofta
       </h3>
       <span className="text-lg font-bold">
        $16.95
       </span>
      </div>
      <p className="text-[#d68a3a] text-lg mt-1">
       Soft paneer and vegetable dumplings simmered in a rich, creamy onion sauce, offering a melt-in-the-mouth experience.
      </p>
     </li>
     <li>
      <div className="flex justify-between items-center">
       <h3 className="text-xl font-semibold max-w-[70%]">
        Prawn Biryani
       </h3>
       <span className="text-lg font-bold">
        $18.95
       </span>
      </div>
      <p className="text-[#d68a3a] text-lg mt-1">
       Fragrant basmati rice cooked with succulent prawns, aromatic spices, saffron, and a hint of rose water, capturing the essence of traditional Indian biryani.
      </p>
     </li>
     <li>
      <div className="flex justify-between items-center">
       <h3 className="text-xl font-semibold max-w-[70%]">
        Green Chicken Curry
       </h3>
       <span className="text-lg font-bold">
        $16.95
       </span>
      </div>
      <p className="text-[#d68a3a] text-lg mt-1">
       A vibrant curry made with boneless chicken, blended with mint, spinach, cilantro, green peppers, and herbs, delivering a fresh and flavorful punch.
      </p>
     </li>
    </ul>
   </section>
   <section className="lg:w-1/2 hidden md:flex flex-col gap-4">
    <Image 
        src={"/sample1.jpg"}
        alt='image 1'
        width={480}
        height={320}
        className="w-full object-cover rounded-md"
    />
    <div className="flex gap-2">
        <Image 
            src={"/sample2.jpg"}
            alt='image 2'
            width={480}
            height={320}
            className="w-1/2 object-cover rounded-md"
        />
     <Image
        src={"/sample3.jpg"}    
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
