'use client';

import React from "react";

import { Element } from "@/config/types/atomic/element";


interface ElementDetailsProps {
  element?: Element;
}

const ElementDetails: React.FC<ElementDetailsProps> = ({ element }) => {
  if (!element) {
    return <div>No element data available</div>;
  }

  return (
    <div className="p-6 border rounded shadow">
      <h1 className="text-3xl font-bold">{element.name}</h1>
      <p>Atomic Number: {element.atomicNumber}</p>
    </div>
  );
};

export default ElementDetails;
