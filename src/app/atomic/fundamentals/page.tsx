'use client';

import React from "react";

import { useFundamentalParticles } from "@/hooks/atomic/useFundamentals";


const Fundamentals = () => {
  const { data: fundamentals, isLoading, error } = useFundamentalParticles();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Fundamental Particles</h1>
      <ul>
        {fundamentals?.map((particle) => (
          <li key={particle.id}>
            {particle.name} ({particle.symbol}) - {particle.particle_type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fundamentals;
