"use client";

import React from "react";
import { Element } from "@/config/types/atomic/element";
import { elementCategoryColors } from "@/config/types/atomic/elementConstants";

import AtomicStructure from "@/components/AtomicStructure";


interface ElementDetailsProps {
  element?: Element;
}

const ElementDetails: React.FC<ElementDetailsProps> = ({ element }) => {
  if (!element) {
    return (
      <div className="text-center text-lg font-semibold text-gray-600 py-10">
        No element data available.
      </div>
    );
  }

  const categoryColor = elementCategoryColors[element.category || "Unknown"];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-900 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full relative">
        
        <div className="bg-zinc-400 flex justify-center items-center p-4 md:p-10">
          <div className="absolute top-4 left-4 bg-white text-black border-4 border-black rounded-lg shadow-xl p-2 md:p-6 flex flex-col items-center space-y-1 md:space-y-2">
            <h4 className="text-base sm:text-lg md:text-xl font-secondary font-extrabold">
              {element.atomic_number}
            </h4>
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-main font-extrabold">
              {element.symbol}
            </h1>
            <h4 className="text-base sm:text-lg md:text-xl font-secondary font-extrabold">
              {element.atomic_mass}
            </h4>
          </div>
          <div className="w-11/12 sm:w-10/12 md:w-full">
            <AtomicStructure element={element} />
          </div>
        </div>

        <div className="bg-white border-8 border-black flex flex-col p-8 md:p-14 relative">
          
          <div 
            className={`absolute top-0 right-0 border-8 border-t-0 border-r-0 rounded-bl-lg py-2 px-3 sm:py-1.5 sm:px-3 md:py-2 md:px-4 flex flex-col items-center ${element.radioactivity ? "bg-red-200 border-red-500 text-red-500" : "bg-green-200 border-green-500 text-green-500"}`}
          >
            <h4 className="text-sm sm:text-base md:text-xl font-secondary font-bold">
              {element.radioactivity ? "Radioactive" : "Non-Radioactive"}
            </h4>
          </div>

          <div className="py-5">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-main font-extrabold text-zinc-900 mb-4 sm:mb-10">
              {element.name}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl font-secondary font-semibold text-zinc-700 mb-6 sm:mb-20">
              {element.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg md:text-xl text-zinc-700 font-secondary">
              <p>Atomic Number: <span className="font-bold text-zinc-600">{element.atomic_number}</span></p>
              <p>Atomic Mass: <span className="font-bold text-zinc-600">{element.atomic_mass}</span></p>
              <p>State: <span className="font-bold text-zinc-600">{element.state || "Unknown"}</span></p>
              <p>Density: <span className="font-bold text-zinc-600">{element.density ? `${element.density} g/cm³` : "Unknown"}</span></p>
              <p>Category: <span className={`font-bold py-1 px-2 bg-inherit ${categoryColor}`}>{element.category || "Unknown"}</span></p>
            </div>
          </div>

          <div className="py-4 sm:py-5 my-3 sm:my-5 border-4 md:border-8 border-orange-400 bg-orange-100 rounded-lg">
            <div className="p-4 sm:p-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-zinc-900 font-main font-bold mb-4 sm:mb-6">Thermal Properties</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg md:text-xl text-zinc-700 font-secondary">
                <p>Melting Point: <span className="font-bold text-zinc-600">{element.melting_point ? `${element.melting_point} K` : "Unknown"}</span></p>
                <p>Boiling Point: <span className="font-bold text-zinc-600">{element.boiling_point ? `${element.boiling_point} K` : "Unknown"}</span></p>
                <p>Heat Capacity: <span className="font-bold text-zinc-600">{element.heat_capacity ? `${element.heat_capacity} J/(mol·K)` : "Unknown"}</span></p>
                <p>Thermal Conductivity: <span className="font-bold text-zinc-600">{element.thermal_conductivity ? `${element.thermal_conductivity} W/(m·K)` : "Unknown"}</span></p>
              </div>
            </div>
          </div>

          <div className="py-4 sm:py-5 my-3 sm:my-5 border-4 md:border-8 border-blue-400 bg-blue-100 rounded-lg">
            <div className="p-4 sm:p-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-zinc-900 font-main font-bold mb-4 sm:mb-6">Electrical Properties</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg md:text-xl text-zinc-700 font-secondary">
                <p>Electronegativity: <span className="font-bold text-zinc-600">{element.electronegativity || "Unknown"}</span></p>
                <p>Ionization Energy: <span className="font-bold text-zinc-600">{element.ionization_energy ? `${element.ionization_energy} eV` : "Unknown"}</span></p>
                <p>Atomic Radius: <span className="font-bold text-zinc-600">{element.atomic_radius ? `${element.atomic_radius} pm` : "Unknown"}</span></p>
                <p>Electrical Conductivity: <span className="font-bold text-zinc-600">{element.electrical_conductivity ? `${element.electrical_conductivity} S/m` : "Unknown"}</span></p>
              </div>
            </div>
          </div>

          <div className="py-4 sm:py-5 my-3 sm:my-5 border-4 md:border-8 border-zinc-400 bg-zinc-100 rounded-lg">
            <div className="p-4 sm:p-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-zinc-900 font-main font-bold mb-4 sm:mb-6">Other Properties</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg md:text-xl text-zinc-700 font-secondary">
                <p>Valence Electrons: <span className="font-bold text-zinc-600">{element.valence_electrons || "Unknown"}</span></p>
                <p>Oxidation States: <span className="font-bold text-zinc-600">{element.oxidation_states || "Unknown"}</span></p>
                <p>Reactivity: <span className="font-bold text-zinc-600">{element.reactivity || "Unknown"}</span></p>
                <p>Occurrence: <span className="font-bold text-zinc-600">{element.occurrence || "Unknown"}</span></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ElementDetails;
