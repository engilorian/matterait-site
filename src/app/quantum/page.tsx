"use client";

import React from "react";
import { motion } from "framer-motion";

import CategoryCard from "@/components/Cards/CategoryCard";
import SearchBar from "@/components/SearchBar";

import { useQuantumPhenomena } from "@/hooks/quantum/usePhenomena";


const Quantum: React.FC = () => {
  const { data: phenomena, isLoading, error } = useQuantumPhenomena();

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
            <strong className="text-emerald-700">Quantum</strong> Properties
          </motion.h1>
          <p className="text-lg md:text-2xl text-gray-700 font-secondary font-medium max-w-2xl mx-auto">
            Unravel the complexities and mysteries of quantum phenomena in the universe.
          </p>
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="max-w-lg mx-auto">
          <SearchBar />
        </div>
      </section>

      <section className="h-full py-32 bg-emerald-800">
        <div className="max-w-7xl mx-auto px-6">
          {isLoading && <div className="text-center text-white">Loading...</div>}
          {error && <div className="text-center text-red-500">Error: {error.message}</div>}
          {!isLoading && !error && (
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
              {phenomena?.map((phenomenon) => (
                <CategoryCard
                  key={phenomenon.id}
                  name={phenomenon.name}
                  icon="/category/quantum-properties.svg"
                  description={phenomenon.description || "No description available."}
                  link={`/quantum/${phenomenon.slug}`}
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

export default Quantum;
