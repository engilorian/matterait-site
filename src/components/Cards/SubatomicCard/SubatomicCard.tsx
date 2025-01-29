import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { SubatomicParticleType } from "@/config/types/atomic/subatomic";
import { SpinValue } from "@/config/types/atomic/fundamental";


interface SubatomicProps {
  name: string;
  brief: string;
  symbol: string;
  mass: number;
  charge: number;
  spin: SpinValue;
  particle_type: SubatomicParticleType;
  is_antiparticle: boolean;
  is_stable: boolean;
  link: string;
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const particleTypeColors: Record<SubatomicParticleType, string> = {
  [SubatomicParticleType.HADRON]: "bg-purple-500 border-purple-700 text-purple-100",
  [SubatomicParticleType.MESON]: "bg-pink-500 border-pink-700 text-pink-100",
  [SubatomicParticleType.BARYON]: "bg-indigo-500 border-indigo-700 text-indigo-100",
};

const SubatomicCard: React.FC<SubatomicProps> = ({
  name,
  brief,
  symbol,
  mass,
  charge,
  spin,
  particle_type,
  is_antiparticle,
  is_stable,
  link,
  className = "",
}) => {
  const particleTypeClass =
    particleTypeColors[particle_type] || "bg-slate-500 border-slate-500 text-slate-500";

  const stableLabel = is_stable ? "Stable" : "Unstable";

  return (
    <div className={`w-full aspect-square ${className}`}>
      <Link href={link} passHref>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className={`
            group relative flex flex-col items-center justify-center
            rounded-lg border-4 border-black w-full aspect-square p-3 text-center
            bg-white transition-transform duration-200
            overflow-hidden
          `}
        >
          <div className="absolute top-0 right-0 flex flex-row items-center space-x-2 pt-1.5 pr-1.5 md:pt-2 md:pr-2 z-30">
            {is_antiparticle && (
              <span className="px-2 py-1 border-4 text-[10px] md:text-xs font-secondary font-bold rounded-tr-lg rounded-bl-lg bg-rose-200 border-rose-500 text-rose-500">
                Antiparticle
              </span>
            )}
            <span
              className={`px-2 py-1 border-4 text-[10px] md:text-xs font-secondary font-bold
                rounded-tr-lg rounded-bl-lg
                ${is_stable
                  ? "bg-green-200 border-green-500 text-green-500"
                  : "bg-amber-200 border-amber-500 text-amber-500"}`}
            >
              {stableLabel}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <div
              className={`rounded-full border-8 flex items-center justify-center 
                aspect-square w-24 p-4 ${particleTypeClass}`}
            >
              <h1 className="text-3xl md:text-4xl font-main font-extrabold">{symbol}</h1>
            </div>
            <h3 className="text-xl md:text-2xl font-main font-semibold mt-2 md:mt-3">
              {name}
            </h3>
          </div>

          <motion.div
            className={`absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8
              bg-black bg-opacity-75 opacity-0 group-hover:opacity-100
              transition-opacity duration-300 pointer-events-none`}
          >
            <div className="mb-3 md:mb-4 font-bold text-xs md:text-sm text-white">
              <div className="mb-1 md:mb-2">
                <span className="block font-secondary">Mass (MeV/c²)</span>
                <span className="font-secondary font-bold">{mass}</span>
              </div>
              <div className="mb-1 md:mb-2">
                <span className="block font-secondary">Charge</span>
                <span className="font-secondary font-bold">{charge}</span>
              </div>
              <div>
                <span className="block font-secondary">Spin</span>
                <span className="font-secondary font-bold">{spin}</span>
              </div>
            </div>
            <p className="text-center text-xs md:text-sm text-white px-2 font-secondary font-extrabold">
              {brief}
            </p>
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
};

export default SubatomicCard;
