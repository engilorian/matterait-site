'use client';

import React from 'react';
import { motion } from 'framer-motion';


interface QuantumPhenomenonProps {
  name: string;
  brief: string;
  description?: string;
  is_common: boolean;
  slug: string;
  className?: string;
}

const overlayVariants = {
  rest: { y: "100%", opacity: 0, transition: { duration: 0.1, ease: "easeInOut" } },
  hover: { y: "0%", opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } },
};

const QuantumPhenomenonCard: React.FC<QuantumPhenomenonProps> = ({
  name,
  brief,
  description,
  is_common,
}) => {
  return (
    <div className="w-full h-56">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={{ rest: {}, hover: {} }}
        className="relative flex flex-col items-center justify-center rounded-lg border-4 border-black w-full h-56 p-3 text-center bg-white overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-3 flex flex-row items-center space-x-2 z-20">
          <span
            className={`px-2 py-1 border-4 text-sm font-secondary font-bold rounded-tr-lg rounded-bl-lg ${
              is_common
                ? "bg-blue-200 border-blue-500 text-blue-500"
                : "bg-rose-200 border-rose-500 text-rose-500"
            }`}
          >
            {is_common ? 'Common' : 'Uncommon'}
          </span>
        </div>

        <div className="flex flex-col items-center justify-center flex-1">
          <h3 className="text-2xl font-main font-semibold mt-2">{name}</h3>
          <p className="text-sm font-secondary mt-2">{brief}</p>
        </div>

        <motion.div
          variants={overlayVariants}
          className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-zinc-600 z-20"
        >
          {description && (
            <p className="mb-2 text-white font-secondary font-bold">{description}</p>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuantumPhenomenonCard;
