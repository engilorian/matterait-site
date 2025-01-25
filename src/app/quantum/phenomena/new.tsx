'use client';

import React, { useState } from "react";

import { useCreateQuantumPhenomenon } from "@/hooks/quantum/usePhenomena";


const NewQuantumPhenomena = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    examples: "",
    is_common: true,
  });
  const { mutate: createPhenomenon, isLoading, error } = useCreateQuantumPhenomenon();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPhenomenon(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <textarea
        placeholder="Examples"
        value={form.examples}
        onChange={(e) => setForm({ ...form, examples: e.target.value })}
      />
      <label>
        Common Phenomenon:
        <input
          type="checkbox"
          checked={form.is_common}
          onChange={(e) => setForm({ ...form, is_common: e.target.checked })}
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create Phenomenon"}
      </button>
      {error && <div>Error: {error.message}</div>}
    </form>
  );
};

export default NewQuantumPhenomena;
