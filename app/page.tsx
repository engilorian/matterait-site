"use client";

import React from "react";
import { motion } from "framer-motion";

import CategoryCard from "@/components/CategoryCard";
import SearchBar from "@/components/SearchBar";


const Home: React.FC = () => {
  const categories = [
    {
      name: "Fundamental Particles",
      icon: "/category/fundamental-particles.svg",
      description: "Uncover the universe's smallest building blocks.",
      link: "/fundamental-particles",
    },
    {
      name: "States of Matter",
      icon: "/category/states-of-matter.svg",
      description: "Discover the phases and transformations of matter.",
      link: "/states-of-matter",
    },
    {
      name: "Atomic-Level Matter",
      icon: "/category/atomic-level-matter.svg",
      description: "Explore atoms, molecules, and their qualities.",
      link: "/atomic-level-matter",
    },
    {
      name: "Quantum Properties",
      icon: "/category/quantum-properties.svg",
      description: "Understand the mysteries of quantum phenomena.",
      link: "/exotic-quantum-properties",
    },
  ];

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
            <strong className="text-emerald-700">Matterait</strong> / Traits of Matter
          </motion.h1>
          <p className="text-lg md:text-2xl text-gray-700 font-secondary font-medium max-w-2xl mx-auto">
            Discover the fundamental aspects of the universe—from particles to quantum phenomena, interaction, and characteristics.
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
          <motion.div
            className="grid grid-cols-1 gap-8"
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
            {categories
              .filter((category) => category.name === "States of Matter")
              .map((category, index) => (
                <CategoryCard
                  key={`top-${index}`}
                  name={category.name}
                  icon={category.icon}
                  description={category.description}
                  link={category.link}
                  className="col-span-full w-full"
                />
              ))}
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
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
            {categories
              .filter((category) => category.name !== "States of Matter")
              .map((category, index) => (
                <CategoryCard
                  key={`bottom-${index}`}
                  name={category.name}
                  icon={category.icon}
                  description={category.description}
                  link={category.link}
                />
              ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
