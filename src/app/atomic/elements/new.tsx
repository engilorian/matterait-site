'use client';

import React from "react";

import { useCreateElement } from "@/hooks/atomic/useElements";
import ElementForm from "./components/ElementForm";


const NewElement: React.FC = () => {
  const { mutate: createElement, isLoading } = useCreateElement();

  const handleSubmit = (data: { name: string; atomicNumber: number }) => {
    createElement(data);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create a New Element</h1>
      <ElementForm
        onSubmit={handleSubmit}
        isLoading={isLoading}
        submitText="Create"
      />
    </div>
  );
};

export default NewElement;
