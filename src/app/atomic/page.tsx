"use client";

import React from "react";
import { motion } from "framer-motion";

import { useElements } from "@/hooks/atomic/useElements";
import { useFundamentalParticles } from "@/hooks/atomic/useFundamentals";
import { useSubatomicParticles } from "@/hooks/atomic/useSubatomics";

import ElementCard from "@/components/Cards/ElementCard";
import SubatomicCard from "@/components/Cards/SubatomicCard";
import Carousel from "@/components/Carousel/Carousel";
import StandardModel from "@/components/StandardModel";


const Atomic: React.FC = () => {
  const {
    data: elements,
    isLoading: elementsLoading,
    error: elementsError,
  } = useElements();

  const {
    data: fundamentals,
    isLoading: fundamentalsLoading,
    error: fundamentalsError,
  } = useFundamentalParticles();

  const {
    data: subatomics,
    isLoading: subatomicsLoading,
    error: subatomicsError,
  } = useSubatomicParticles();

  return (
    <>
      <section className="py-10 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {elementsLoading && (
            <div className="text-center text-gray-900">Loading elements...</div>
          )}
          {elementsError && (
            <div className="text-center text-red-500">
              Error: {elementsError.message}
            </div>
          )}
          {!elementsLoading && !elementsError && elements?.length ? (
            <Carousel>
              {elements.map((element) => (
                <ElementCard
                  key={element.id}
                  name={element.name}
                  brief={element.brief || "No description available."}
                  symbol={element.symbol}
                  atomic_number={element.atomic_number}
                  atomic_mass={element.atomic_mass}
                  category={element.category || "Unknown Properties"}
                  link={`/atomic/elements/${element.id}`}
                />
              ))}
            </Carousel>
          ) : (
            <div className="text-center text-gray-900">No elements available.</div>
          )}
        </div>
      </section>

      {!fundamentalsLoading && !fundamentalsError && fundamentals?.length ? (
        <section className="py-20 bg-emerald-800">
          <div className="w-full max-w-7xl mx-auto px-6">
            <h2 className="text-5xl md:text-7xl text-zinc-50 font-main font-bold mb-32">
              Fundamental <strong className="font-extrabold">Particles</strong>
            </h2>
          
            <StandardModel particles={fundamentals} />

          </div>
        </section>
      ) : (
        <section className="py-20 bg-slate-500 text-center">
          {fundamentalsLoading
            ? "Loading fundamental particles..."
            : "No fundamental particles available."}
        </section>
      )}

      <section className="py-32 bg-gray-200">
        <div className="w-full max-w-7xl mx-auto px-3">
          <h2 className="text-2xl sm:text-4xl text-gray-800 font-secondary font-extrabold mb-10">
            Subatomic Particles
          </h2>
          {subatomicsLoading && (
            <div className="text-center text-gray-800">Loading subatomic particles...</div>
          )}
          {subatomicsError && (
            <div className="text-center text-red-500">
              Error: {subatomicsError.message}
            </div>
          )}
          {!subatomicsLoading && !subatomicsError && subatomics?.length ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center"  
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {subatomics.map((particle) => (
                <SubatomicCard
                  key={particle.id}
                  name={particle.name}
                  brief={particle.brief || "No description available."}
                  symbol={particle.symbol}
                  mass={particle.mass}
                  charge={particle.charge}
                  spin={particle.spin}
                  particle_type={particle.particle_type}
                  is_antiparticle={particle.is_antiparticle}
                  is_stable={particle.is_stable}
                  link={`/atomic/subatomic/${particle.id}`}
                />
              ))}
            </motion.div>
          ) : (
            <div className="text-center text-gray-800">
              No subatomic particles available.
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Atomic;
