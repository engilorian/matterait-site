"use client";

import React from "react";

import { SubatomicParticle } from "@/config/types/atomic/subatomic";
import { subatomicCategoryColors } from "@/config/types/atomic/subatomicContants";

interface SubatomicDetailsProps {
  particle?: SubatomicParticle;
}

const SubatomicDetails: React.FC<SubatomicDetailsProps> = ({ particle }) => {
  if (!particle) {
    return (
      <div className="text-center text-lg font-semibold text-gray-600 py-10">
        No particle data available.
      </div>
    );
  }

  const typeColor = subatomicCategoryColors[particle.particle_type];

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
              Mass:{" "}
              <span className="font-bold text-zinc-600">
                {particle.mass} MeV/c²
              </span>
            </p>
            <p>
              Charge:{" "}
              <span className="font-bold text-zinc-600">
                {particle.charge} e
              </span>
            </p>
            <p>
              Spin:{" "}
              <span className="font-bold text-zinc-600">{particle.spin}</span>
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

        {particle.compositions && particle.compositions.length > 0 && (
          <div className="py-4 sm:py-5 my-3 sm:my-5 border-4 md:border-8 border-purple-400 bg-purple-100 rounded-lg">
            <div className="p-4 sm:p-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-zinc-900 font-main font-bold mb-4 sm:mb-6">
                Composition
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base sm:text-lg md:text-xl text-zinc-700 font-secondary">
                {particle.compositions.map((comp, index) => (
                  <p key={`${comp.fundamental_particle_id}-${index}`}>
                    {comp.name} ({comp.symbol}):{" "}
                    <span className="font-bold text-zinc-600">{comp.quantity}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default SubatomicDetails;
