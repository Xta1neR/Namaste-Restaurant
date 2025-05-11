import React from "react";
import AppetizersSection from "./appetizers";
import SharingPlatesSection from "./sharingPlate";
import SaladsSection from "./salads";
import SoupSection from "./soups";
import KidsSpecialitiesSection from "./kidsSpecial";
import TandooriBreadsSection from "./tandooriBread";
import TandooriStuffedBreadsSection from "./tandooriStuffedBread";
import TandooriSizzlersSection from "./tandooriSizzler";
import IndoChineseStyleSection from "./indoChinese";
import VegetarianSpecialtiesSection from "./vegSpecial";
import PaneerSpecialtiesSection from "./pannerSpecial";
import ChickenSpecialtiesSection from "./chickenSpecial";
import LambSpecialtiesSection from "./lambSpecial";
import SeafoodSpecialtiesSection from "./seaFoodSpecial";
import BiryaniRiceSpecialtiesSection from "./biryanis";
import SideDishSection from "./sideDish";
import DessertsSection from "./desserts";
import ExtrasSection from "./extrasSection";

const Menu = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#d18a44] text-center mb-8">
          Order Your Favorite Dishes
        </h1>
        
      </div>
      {/* ----------------- Appetizers ---------------- */}
      <AppetizersSection />

      {/* ------------------- Sharing Plates ---------------- */}
      <SharingPlatesSection />

      {/* ---------------------- Salads ---------------------- */}
      <SaladsSection />

      {/* ---------------------- Soup ---------------------- */}
      <SoupSection />

      {/* ------------------ Kids Specialities ---------------- */}
      <KidsSpecialitiesSection />

      {/* ---------------------- Tandoori Breads ---------------------- */}
      <TandooriBreadsSection />

      {/* ---------------- Tandoori Stuffed Breads ---------------------- */}
      <TandooriStuffedBreadsSection />

      {/* -------------------- Tandoori Sizzlers -------------------- */}
      <TandooriSizzlersSection />

      {/* -------------- Indo Chinese Style ------------- */}
      <IndoChineseStyleSection />

      {/* ------------------ Vegetarian Specialties ---------------------- */}

      <VegetarianSpecialtiesSection />

      {/* ------------------- Panner Specialties ---------------- */}
      <PaneerSpecialtiesSection />

      {/* -------------------- Chicken Specialities -------------------- */}

      <ChickenSpecialtiesSection />

      {/* ---------------------- Lamb Specialties ---------------------- */}

      <LambSpecialtiesSection />

      {/* --------------------- Seafood Specialties ----------------------- */}

      <SeafoodSpecialtiesSection />

      {/* ----------------- Biryani Rice Specialties ---------------- */}
      <BiryaniRiceSpecialtiesSection />

      {/* -------------- Side Dishes ------------- */}
      <SideDishSection  />

      {/* -------------- Dessets ------------ */}
      <DessertsSection  />

      {/* ------------------ Extras ---------------- */}
      <ExtrasSection />

    </div>
  );
};

export default Menu;
