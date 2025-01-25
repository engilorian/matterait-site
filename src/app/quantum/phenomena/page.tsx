'use client';

import React from "react";

import { useQuantumPhenomena } from "@/hooks/quantum/usePhenomena";


const QuantumPhenomena = () => {
  const { data: phenomena, isLoading, error } = useQuantumPhenomena();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Quantum Phenomena</h1>
      <ul>
        {phenomena?.map((phenomenon) => (
          <li key={phenomenon.id}>
            <h2>{phenomenon.name}</h2>
            <p>{phenomenon.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuantumPhenomena;
