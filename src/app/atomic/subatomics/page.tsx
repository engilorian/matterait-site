'use client';

import React from "react";

import { useSubatomicParticles } from "@/hooks/atomic/useSubatomics";


const Subatomics = () => {
  const { data: subatomics, isLoading, error } = useSubatomicParticles();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Subatomic Particles</h1>
      <ul>
        {subatomics?.map((particle) => (
          <li key={particle.id}>
            {particle.name} ({particle.symbol}) - {particle.particle_type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Subatomics;
