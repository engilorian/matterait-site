"use client";

import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "@/components/CategoryCard";
import SearchBar from "@/components/SearchBar";
import { useStatesOfMatter } from "@/hooks/state/useStates";

const StatesPage: React.FC = () => {
  const { data: states, isLoading, error } = useStatesOfMatter();

  return (
    <>
      {/* Header Section */}
      <section className="py-20 bg-white">
        <div className="text-center px-6">
          <motion.h1
            className="font-main text-5xl md:text-7xl text-gray-900 font-extrabold mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <strong className="text-emerald-700">States</strong> of Matter
          </motion.h1>
          <p className="text-lg md:text-2xl text-gray-700 font-secondary font-medium max-w-2xl mx-auto">
            Explore the various phases and transformations that matter undergoes in the universe.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-6 bg-white">
        <div className="max-w-lg mx-auto">
          <SearchBar />
        </div>
      </section>

      {/* Content Section */}
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
              {states?.map((state) => (
                <CategoryCard
                  key={state.id}
                  name={state.name}
                  icon="/category/state-of-matter.svg" // You can customize icons per state if available
                  description={state.description || "No description available."}
                  link={`/state/${state.slug}`}
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

export default StatesPage;
