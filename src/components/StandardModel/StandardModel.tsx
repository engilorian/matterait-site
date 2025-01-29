'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";

import { FundamentalParticle, FundamentalParticleType } from "@/config/types/atomic/fundamental";
import FundamentalCard from "@/components/Cards/FundamentalCard";
import PillButton from "@/components/Pill";


interface StandardModelProps {
  particles: FundamentalParticle[];
}

const StandardModel: React.FC<StandardModelProps> = ({ particles }) => {
  const [activeTab, setActiveTab] = useState<FundamentalParticleType>(FundamentalParticleType.QUARK);

  const groupedParticles: Record<FundamentalParticleType, FundamentalParticle[]> = {
    [FundamentalParticleType.QUARK]: [],
    [FundamentalParticleType.LEPTON]: [],
    [FundamentalParticleType.BOSON]: [],
    [FundamentalParticleType.HIGGS]: [],
  };

  particles.forEach((particle) => {
    if (groupedParticles[particle.particle_type]) {
      groupedParticles[particle.particle_type].push(particle);
    }
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center mb-8 gap-2 sm:gap-4">
          {Object.values(FundamentalParticleType).map((type) => (
            <PillButton
              key={type}
              onClick={() => setActiveTab(type)}
              variant="secondary"
              active={activeTab === type}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </PillButton>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {groupedParticles[activeTab].map((particle) => (
            <FundamentalCard
              key={particle.id}
              name={particle.name}
              brief={particle.brief || "No description available."}
              mass={particle.mass}
              charge={particle.charge}
              spin={particle.spin}
              particle_type={particle.particle_type}
              symbol={particle.symbol}
              link={`/atomic/fundamental/${particle.id}`}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default StandardModel;
