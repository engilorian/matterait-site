"use client";

import React from "react";
import { motion } from "framer-motion";

import CategoryCard from "@/components/CategoryCard";
import SearchBar from "@/components/SearchBar";
import { useElements } from "@/hooks/atomic/useElements";
import { useFundamentalParticles } from "@/hooks/atomic/useFundamentals";
import { useSubatomicParticles } from "@/hooks/atomic/useSubatomics";


const Atomic: React.FC = () => {
  const { data: elements, isLoading: elementsLoading, error: elementsError } = useElements();
  const { data: fundamentals, isLoading: fundamentalsLoading, error: fundamentalsError } = useFundamentalParticles();
  const { data: subatomics, isLoading: subatomicsLoading, error: subatomicsError } = useSubatomicParticles();

  return (
    <>
      <section className="py-20 bg-white">
        <div className="text-center px-6">
          <motion.h1
            className="font-main text-5xl md:text-7xl text-gray-900 font-extrabold mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <strong className="text-emerald-700">Atomic</strong> Matter
          </motion.h1>
          <p className="text-lg md:text-2xl text-gray-700 font-secondary font-medium max-w-2xl mx-auto">
            Explore the fundamental building blocks of the universe, from particles to atoms.
          </p>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="max-w-lg mx-auto">
          <SearchBar />
        </div>
      </section>

      <section className="h-full py-32 bg-blue-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-white font-extrabold mb-6">
            Fundamental Particles
          </h2>
          {fundamentalsLoading && <div className="text-center text-white">Loading...</div>}
          {fundamentalsError && <div className="text-center text-red-500">Error: {fundamentalsError.message}</div>}
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
                  description={particle.description || "No description available."}
                  link={`/atomic/fundamental/${particle.id}`}
                  className="bg-white text-gray-900"
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section className="h-full py-32 bg-green-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-white font-extrabold mb-6">
            Subatomic Particles
          </h2>
          {subatomicsLoading && <div className="text-center text-white">Loading...</div>}
          {subatomicsError && <div className="text-center text-red-500">Error: {subatomicsError.message}</div>}
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
                  description={particle.description || "No description available."}
                  link={`/atomic/subatomic/${particle.id}`}
                  className="bg-white text-gray-900"
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section className="h-full py-32 bg-emerald-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-white font-extrabold mb-6">Elements</h2>
          {elementsLoading && <div className="text-center text-white">Loading...</div>}
          {elementsError && <div className="text-center text-red-500">Error: {elementsError.message}</div>}
          {!elementsLoading && !elementsError && (
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
              {elements?.map((element) => (
                <CategoryCard
                  key={element.id}
                  name={element.name}
                  icon="/category/elements.svg"
                  description={element.name || "No description available."}
                  link={`/atomic/elements/${element.id}`}
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
