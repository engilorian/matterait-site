'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { FundamentalParticle, FundamentalParticleType } from "@/config/types/atomic/fundamental";
import FundamentalCard from "@/components/Cards/FundamentalCard";
import PillButton from "@/components/Pill";


interface StandardModelProps {
  particles: FundamentalParticle[];
}

const StandardModel: React.FC<StandardModelProps> = ({ particles }) => {
  const [activeTab, setActiveTab] = useState<FundamentalParticleType>(FundamentalParticleType.QUARK);

  const groupedParticles: Record<FundamentalParticleType, FundamentalParticle[]> = Object.values(FundamentalParticleType).reduce(
    (acc, type) => ({ ...acc, [type]: [] }),
    {} as Record<FundamentalParticleType, FundamentalParticle[]>
  );

  particles.forEach((particle) => {
    if (groupedParticles[particle.particle_type]) {
      groupedParticles[particle.particle_type].push(particle);
    } else {
    }
  });

  useEffect(() => {
    if (groupedParticles[activeTab].length === 0) {
      const firstAvailableType = Object.values(FundamentalParticleType).find(
        (type) => groupedParticles[type].length > 0
      );
      if (firstAvailableType) {
        setActiveTab(firstAvailableType);
      }
    }
  }, [activeTab, groupedParticles]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center mb-8 gap-2 sm:gap-4">
        {Object.values(FundamentalParticleType).map((type) => (
          <PillButton
            key={type}
            onClick={() => setActiveTab(type)}
            variant="secondary"
            active={activeTab === type}
            aria-pressed={activeTab === type}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </PillButton>
        ))}
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {groupedParticles[activeTab].map((particle) => (
          <motion.div key={particle.id} variants={cardVariants}>
            <FundamentalCard
              name={particle.name}
              brief={particle.brief || "No description available."}
              mass={particle.mass}
              charge={particle.charge}
              spin={particle.spin}
              particle_type={particle.particle_type}
              symbol={particle.symbol}
              link={`/atomic/fundamentals/${particle.id}`}
            />
          </motion.div>
        ))}
      </motion.div>

      {groupedParticles[activeTab].length === 0 && (
        <div className="text-center text-gray-500 mt-4">
          No particles available for the selected type.
        </div>
      )}
    </div>
  );
};

export default StandardModel;
