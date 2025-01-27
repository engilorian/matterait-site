"use client";

import React from "react";
import { motion } from "framer-motion";

import { useElements } from "@/hooks/atomic/useElements";
import { useFundamentalParticles } from "@/hooks/atomic/useFundamentals";
import { useSubatomicParticles } from "@/hooks/atomic/useSubatomics";

import CategoryCard from "@/components/Cards/CategoryCard";
import ElementCard from "@/components/Cards/ElementCard";
import Carousel from "@/components/Carousel/Carousel";


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
        <div className="w-full max-w-7xl mx-auto px-6">
          {elementsLoading && (
            <div className="text-center text-gray-900">Loading...</div>
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
                  category={element.category || "No description available."}
                  link={`/atomic/elements/${element.id}`}
                />
              ))}
            </Carousel>
          ) : (
            <div className="text-center text-gray-900">No elements available.</div>
          )}
        </div>
      </section>

      <section className="py-32 bg-blue-900">
        <div className="w-full max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-6xl text-white font-secondary font-extrabold py-10">
            Fundamental Particles
          </h2>
          {fundamentalsLoading && (
            <div className="text-center text-white">Loading...</div>
          )}
          {fundamentalsError && (
            <div className="text-center text-red-500">
              Error: {fundamentalsError.message}
            </div>
          )}
          {!fundamentalsLoading && !fundamentalsError && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {fundamentals?.map((particle) => (
                <CategoryCard
                  key={particle.id}
                  name={particle.name}
                  icon="/category/fundamental-particles.svg"
                  description={
                    particle.brief || "No description available."
                  }
                  link={`/atomic/fundamental/${particle.id}`}
                  className="bg-white text-gray-900"
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-32 bg-blue-900">
        <div className="w-full max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-6xl text-white font-secondary font-extrabold py-10">
            Subatomic Particles
          </h2>
          {subatomicsLoading && (
            <div className="text-center text-white">Loading...</div>
          )}
          {subatomicsError && (
            <div className="text-center text-red-500">
              Error: {subatomicsError.message}
            </div>
          )}
          {!subatomicsLoading && !subatomicsError && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {subatomics?.map((particle) => (
                <CategoryCard
                  key={particle.id}
                  name={particle.name}
                  icon="/category/subatomic-particles.svg"
                  description={
                    particle.description || "No description available."
                  }
                  link={`/atomic/subatomic/${particle.id}`}
                  className="bg-white text-gray-900"
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
};

export default Atomic;
