'use client';

import React, { useState } from "react";

import { useCreateStateOfMatter } from "@/hooks/state/useStates";


const NewStateOfMatter = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    density_range: "",
    compressibility: "",
    energy_level: 0,
    particle_motion: "",
    intermolecular_forces: "",
    is_common: true,
  });
  const { mutate: createState, isLoading, error } = useCreateStateOfMatter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createState(form);
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
      <input
        type="text"
        placeholder="Density Range"
        value={form.density_range}
        onChange={(e) => setForm({ ...form, density_range: e.target.value })}
      />
      <input
        type="text"
        placeholder="Compressibility"
        value={form.compressibility}
        onChange={(e) => setForm({ ...form, compressibility: e.target.value })}
      />
      <input
        type="number"
        placeholder="Energy Level"
        value={form.energy_level}
        onChange={(e) => setForm({ ...form, energy_level: +e.target.value })}
      />
      <textarea
        placeholder="Particle Motion"
        value={form.particle_motion}
        onChange={(e) => setForm({ ...form, particle_motion: e.target.value })}
      />
      <textarea
        placeholder="Intermolecular Forces"
        value={form.intermolecular_forces}
        onChange={(e) =>
          setForm({ ...form, intermolecular_forces: e.target.value })
        }
      />
      <label>
        Common State:
        <input
          type="checkbox"
          checked={form.is_common}
          onChange={(e) => setForm({ ...form, is_common: e.target.checked })}
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create State"}
      </button>
      {error && <div>Error: {error.message}</div>}
    </form>
  );
};

export default NewStateOfMatter;
