'use client';

import React from "react";

import { useElements } from "@/hooks/useElements";
import ElementList from "./components/ElementList";


const Elements: React.FC = () => {
  const { data: elements, isLoading, error } = useElements();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading elements</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Elements</h1>
      <ElementList elements={elements || []} />
    </div>
  );
};

export default Elements;
