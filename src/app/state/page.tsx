"use client";

import React from "react";
import { motion } from "framer-motion";

import { useStatesOfMatter } from "@/hooks/state/useStates";

import MatterStateCard from "@/components/MatterStateCard";


interface StateData {
  id?: number;
  name: string;
  slug?: string;
  description?: string;
}

const fallbackStates: StateData[] = [
  {
    name: "Solid",
    slug: "solid",
    description: "Rigid shape, definite volume, molecules packed close together.",
  },
  {
    name: "Liquid",
    slug: "liquid",
    description: "Flows, takes shape of the container, definite volume.",
  },
  {
    name: "Gas",
    slug: "gas",
    description: "Expands to fill the container, molecules far apart.",
  },
  {
    name: "Plasma",
    slug: "plasma",
    description: "Ionized gas, conducts electricity, found in stars.",
  },
];

const States: React.FC = () => {
  const { data: matterStates, isLoading, error } = useStatesOfMatter();

  const targetNames = ["Solid", "Liquid", "Gas", "Plasma"];

  function findState(name: string): StateData {
    const fromApi = matterStates?.find((st) => st.name === name);
    if (fromApi) return fromApi;
    return fallbackStates.find((fb) => fb.name === name)!;
  }

  const cornerStates = targetNames.map(findState);

  return (
    <section
      className="relative w-full h-screen"
      style={{
        background: `linear-gradient(to top left, #EF4444, transparent 50%),
                     linear-gradient(to top right, #FBBF24, transparent 50%),
                     linear-gradient(to bottom left, #3B82F6, transparent 50%),
                     linear-gradient(to bottom right, #374151, transparent 50%)`,
      }}
    >
      {isLoading && <div className="text-center text-white pt-10">Loading...</div>}
      {error && <div className="text-center text-red-500 pt-10">Error: {error.message}</div>}

      {!isLoading && !error && (
        <>
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MatterStateCard
              name={cornerStates[0]?.name || "Unknown State"}
              icon="/category/state-of-matter.svg"
              description={cornerStates[0]?.description || "No description available."}
              link={`/state/${cornerStates[0]?.slug || "solid"}`}
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            className="absolute top-0 right-0 w-1/2 h-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MatterStateCard
              name={cornerStates[1]?.name || "Unknown State"}
              icon="/category/state-of-matter.svg"
              description={cornerStates[1]?.description || "No description available."}
              link={`/state/${cornerStates[1]?.slug || "liquid"}`}
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 w-1/2 h-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <MatterStateCard
              name={cornerStates[2]?.name || "Unknown State"}
              icon="/category/state-of-matter.svg"
              description={cornerStates[2]?.description || "No description available."}
              link={`/state/${cornerStates[2]?.slug || "gas"}`}
              className="w-full h-full"
            />
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-0 w-1/2 h-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <MatterStateCard
              name={cornerStates[3]?.name || "Unknown State"}
              icon="/category/state-of-matter.svg"
              description={cornerStates[3]?.description || "No description available."}
              link={`/state/${cornerStates[3]?.slug || "plasma"}`}
              className="w-full h-full"
            />
          </motion.div>
        </>
      )}
    </section>
  );
};

export default States;
