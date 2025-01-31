"use client";

import React from "react";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";
import { elementCategoryColors } from "@/config/types/atomic/constants";


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
  visible: { opacity: 1, y: 0 },
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

  const categoryClass = elementCategoryColors[category] || "bg-gray-500";

  const handleHoverStart = () => {
    controls.start("hover");
  };

  const handleHoverEnd = () => {
    controls.start("initial");
  };

  return (
    <Link href={link}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className={`
          group relative flex flex-col justify-between items-center
          rounded-lg border-4 border-black
          h-96 w-80
          p-8 text-center
          ${className}
        `}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
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
          <h6 className="font-secondary font-bold text-sm mb-1">
            {atomic_number}
          </h6>

          <motion.h1
            className="text-7xl font-main font-extrabold"
            initial={{ scale: 1 }}
            animate={controls}
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1 },
            }}
          >
            {symbol}
          </motion.h1>

          <motion.h3
            className="text-xl font-main font-semibold mt-2"
            initial={{ scale: 1 }}
            animate={controls}
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1 },
            }}
          >
            {name}
          </motion.h3>
        </div>

        <div className="flex flex-col items-center justify-center mt-2">
          <motion.p
            className="text-xs text-gray-700 font-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200"
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
            className="text-sm text-gray-700 font-secondary font-bold mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            initial={{ opacity: 0, height: 0 }}
            animate={controls}
            variants={{
              initial: { opacity: 0, height: 0 },
              hover: { opacity: 1, height: "auto" },
            }}
          >
            {atomic_mass}
          </motion.h6>
        </div>
      </motion.div>
    </Link>
  );
};

export default ElementCard;
