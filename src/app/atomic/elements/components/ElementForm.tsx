'use client';

import React, { useState } from "react";


interface ElementFormProps {
  initialValues?: { name: string; atomicNumber: number };
  onSubmit: (data: { name: string; atomicNumber: number }) => void;
  isLoading: boolean;
  submitText: string;
}

const ElementForm: React.FC<ElementFormProps> = ({
  initialValues = { name: "", atomicNumber: 0 },
  onSubmit,
  isLoading,
  submitText,
}) => {
  const [name, setName] = useState(initialValues.name);
  const [atomicNumber, setAtomicNumber] = useState(initialValues.atomicNumber);

  const handleSubmit = () => {
    onSubmit({ name, atomicNumber });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div>
        <label className="block font-medium">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label className="block font-medium">Atomic Number</label>
        <input
          type="number"
          value={atomicNumber}
          onChange={(e) => setAtomicNumber(Number(e.target.value))}
          className="border rounded p-2 w-full"
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={isLoading}
        className={`px-4 py-2 rounded ${
          isLoading ? "bg-gray-400" : "bg-blue-500 text-white"
        }`}
      >
        {isLoading ? "Loading..." : submitText}
      </button>
    </form>
  );
};

export default ElementForm;
