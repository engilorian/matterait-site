"use client";

import React from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { FundamentalParticleType } from "@/config/types/atomic/fundamental";
import { fundamentalParticleTypeColors } from "@/config/types/atomic/fundamentalConstants";


interface FundamentalProps {
  name: string;
  brief: string;
  symbol: string;
  mass: number;
  charge: number;
  spin: string;
  particle_type: FundamentalParticleType;
  className?: string;
}

const topSectionVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0 },
};

const FundamentalCard: React.FC<FundamentalProps> = ({
  name,
  brief,
  symbol,
  mass,
  charge,
  spin,
  particle_type,
  className = "",
}) => {
  const controls = useAnimation();

  const particleTypeClass =
    fundamentalParticleTypeColors[particle_type] ||
    "bg-slate-50 border-slate-500 text-slate-500";

  const handleHoverStart = () => {
    controls.start("visible");
  };

  const handleHoverEnd = () => {
    controls.start("hidden");
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="group relative flex flex-col items-center justify-center bg-white border-4 border-black rounded-lg p-3"
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        <motion.div
          className="flex justify-around items-center w-full p-2 mb-4"
          variants={topSectionVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 font-secondary">
              Mass <strong>(MeV)</strong>
            </span>
            <span className="text-black font-secondary font-bold text-sm">
              {mass}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 font-secondary">
              Charge
            </span>
            <span className="text-black font-secondary font-bold text-sm">
              {charge}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 font-secondary">
              Spin
            </span>
            <span className="text-black font-secondary font-bold text-sm">
              {spin}
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-center flex-1">
          <div
            className={`rounded-full border-8 flex items-center justify-center aspect-square w-24 p-4 ${particleTypeClass}`}
          >
            <motion.h1
              className="text-3xl font-main font-extrabold"
              initial={{ scale: 1 }}
              animate={controls}
              variants={{
                hidden: { scale: 1 },
                visible: { scale: 1 },
              }}
              transition={{ duration: 0.2 }}
            >
              {symbol}
            </motion.h1>
          </div>

          <h3 className="text-xl font-main font-semibold mt-2">
            {name}
          </h3>
        </div>

        <motion.div
          className="text-xs text-gray-700 font-secondary mt-2 py-2 px-2"
          variants={descriptionVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.3 }}
        >
          <motion.p
            variants={descriptionVariants}
            transition={{ duration: 0.3 }}
          >
            {brief}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FundamentalCard;
