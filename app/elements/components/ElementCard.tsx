'use client';

import React from "react";
import Link from "next/link";

import { Element } from "@/config/types/element";

interface ElementCardProps {
  element: Element;
}

const ElementCard: React.FC<ElementCardProps> = ({ element }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold">{element.name}</h2>
      <p>Atomic Number: {element.atomicNumber}</p>
      <Link href={`/elements/${element.id}`} className="text-blue-500 underline">
        View Details
      </Link>
    </div>
  );
};

export default ElementCard;
