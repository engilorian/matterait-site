"use client";

import React from "react";
import { motion } from "framer-motion";

import { useStatesOfMatter } from "@/hooks/state/useStates";

import MatterStateCard from "@/components/Cards/MatterStateCard";


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
  const { data: matterStates, error } = useStatesOfMatter();

  const targetNames = ["Solid", "Liquid", "Gas", "Plasma"];

  function findState(name: string): StateData {
    const fromApi = matterStates?.find((st) => st.name === name);
    if (fromApi) return fromApi;
    return fallbackStates.find((fb) => fb.name === name)!;
  }

  const cornerStates = targetNames.map(findState);

  const getPosition = (index: number) => {
    switch (index) {
      case 0:
        return "top-0 left-0 w-1/2 h-1/2";
      case 1:
        return "top-0 right-0 w-1/2 h-1/2";
      case 2:
        return "bottom-0 left-0 w-1/2 h-1/2";
      case 3:
        return "bottom-0 right-0 w-1/2 h-1/2";
      default:
        return "";
    }
  };

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
      {error && <div className="text-center text-red-500 pt-10">Error: {error.message}</div>}

      {cornerStates.map((state, index) => (
        <motion.div
          key={state.name}
          className={`absolute ${getPosition(index)}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <MatterStateCard
            name={state.name || "Unknown State"}
            icon="/category/state-of-matter.svg"
            description={state.description || "No description available."}
            link={`/state/${state.slug || "unknown"}`}
            className="w-full h-full"
          />
        </motion.div>
      ))}
    </section>
  );
};

export default States;
