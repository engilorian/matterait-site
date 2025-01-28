"use client";

import React from "react";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";


interface ElementProps {
  name: string;
  brief: string;
  symbol: string;
  atomic_number: number;
  atomic_mass: number;
  category: string;
  link: string;
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 10 },
};

const categoryColors: Record<string, string> = {
  "Alkali Metal": "bg-pink-200 border-pink-500 text-pink-500",
  "Metalloid": "bg-green-200 border-green-500 text-green-500",
  "Actinide": "bg-purple-200 border-purple-500 text-purple-500",
  "Alkaline Earth Metal": "bg-yellow-200 border-yellow-500 text-yellow-500",
  "Reactive Nonmetal": "bg-blue-200 border-blue-500 text-blue-500",
  "Transition Metal": "bg-orange-200 border-orange-500 text-orange-500",
  "Noble Gas": "bg-yellow-200 border-yellow-500 text-yellow-500",
  "Post Transition Metal": "bg-pink-200 border-pink-500 text-pink-500",
  "Lanthanide": "bg-indigo-200 border-indigo-500 text-indigo-500",
  "Unknown Properties": "bg-gray-200 border-gray-500 text-gray-500",
};

const ElementCard: React.FC<ElementProps> = ({
  name,
  brief,
  symbol,
  atomic_number,
  atomic_mass,
  category,
  link,
  className = "",
}) => {
  const controls = useAnimation();

  const categoryClass = categoryColors[category] || "bg-gray-500";

  return (
    <Link href={link}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className={`
          group relative flex flex-col justify-between items-center
          rounded-lg border-4 border-black h-96 w-80 p-16 text-center 
          transition-transform duration-200 hover:scale-105
          ${className}
        `}
        onHoverStart={() => controls.start("hover")}
        onHoverEnd={() => controls.start("initial")}
      >
        <span
          className={`
            absolute top-0 right-0 px-4 py-2 border-4 text-sm font-secondary font-bold
            rounded-tr-lg rounded-bl-lg
            ${categoryClass}
          `}
          style={{
            transform: "translate(4px, -4px)",
          }}
        >
          {category}
        </span>

        <div className="flex flex-col items-center justify-center flex-1">
          <h6 className="font-secondary font-bold">
            {atomic_number}
          </h6>

          <motion.h1
            className="text-7xl font-main font-extrabold"
            initial={{ scale: 1 }}
            animate={controls}
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.05 },
            }}
            transition={{ duration: 0.2 }}
          >
            {symbol}
          </motion.h1>

          <motion.h3
            className="text-2xl font-main font-semibold"
            initial={{ scale: 1 }}
            animate={controls}
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.05 },
            }}
            transition={{ duration: 0.2 }}
          >
            {name}
          </motion.h3>
        </div>

        <div className="flex flex-col items-center justify-center mt-4">
          <motion.p
            className="text-sm text-gray-700 font-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            initial={{ opacity: 0, height: 0 }}
            animate={controls}
            variants={{
              initial: { opacity: 0, height: 0 },
              hover: { opacity: 1, height: "auto" },
            }}
            transition={{ duration: 0.2 }}
          >
            {brief}
          </motion.p>

          <motion.h6
            className="text-gray-700 font-secondary font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            initial={{ opacity: 0, height: 0 }}
            animate={controls}
            variants={{
              initial: { opacity: 0, height: 0 },
              hover: { opacity: 1, height: "auto" },
            }}
            transition={{ duration: 0.2 }}
          >
            {atomic_mass}
          </motion.h6>
        </div>
      </motion.div>
    </Link>
  );
};

export default ElementCard;
