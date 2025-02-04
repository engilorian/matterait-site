"use client";

import React from "react";
import { FundamentalParticle } from "@/config/types/atomic/fundamental";
import { fundamentalCategoryColors } from "@/config/types/atomic/fundamentalConstants";


interface FundamentalDetailsProps {
  particle?: FundamentalParticle;
}

const FundamentalDetails: React.FC<FundamentalDetailsProps> = ({ particle }) => {
  if (!particle) {
    return (
      <div className="text-center text-lg font-semibold text-gray-600 py-10">
        No particle data available.
      </div>
    );
  }

  const typeColor = fundamentalCategoryColors[particle.particle_type];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white px-8 py-16">
      <div className="bg-white border-8 border-black flex flex-col p-8 md:p-14 w-full max-w-4xl relative">
        <div
          className={`absolute top-0 right-0 border-8 border-t-0 border-r-0 rounded-bl-lg py-2 px-3 sm:py-1.5 sm:px-3 md:py-2 md:px-4 flex flex-col items-center ${typeColor}`}
        >
          <h4 className="text-sm sm:text-base md:text-xl font-secondary font-bold">
            {particle.particle_type}
          </h4>
        </div>

        <div className="py-5">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-main font-extrabold text-zinc-900 mb-4 sm:mb-10">
            {particle.symbol} / {particle.name}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-secondary font-semibold text-zinc-700 mb-6 sm:mb-10">
            {particle.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg md:text-xl text-zinc-700 font-secondary">
            <p>
              Mass: <span className="font-bold text-zinc-600">{particle.mass} MeV/c²</span>
            </p>
            <p>
              Charge: <span className="font-bold text-zinc-600">{particle.charge} e</span>
            </p>
            <p>
              Spin: <span className="font-bold text-zinc-600">{particle.spin}</span>
            </p>
            <p>
              Stability:{" "}
              <span className="font-bold text-zinc-600">
                {particle.is_stable ? "Stable" : "Unstable"}
              </span>
            </p>
            <p>
              Antiparticle:{" "}
              <span className="font-bold text-zinc-600">
                {particle.is_antiparticle ? "True" : "False"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundamentalDetails;
