'use client';

import React from "react";

import { Element } from "@/config/types/element";
import ElementCard from "./ElementCard";


interface ElementListProps {
  elements: Element[];
}

const ElementList: React.FC<ElementListProps> = ({ elements }) => {
  if (elements.length === 0) {
    return <p>No elements found.</p>;
  }

  return (
    <ul>
      {elements.map((element) => (
        <li key={element.id}>
          <ElementCard element={element} />
        </li>
      ))}
    </ul>
  );
};

export default ElementList;
