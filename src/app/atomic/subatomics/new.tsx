'use client';

import React, { useState } from "react";

import { useCreateSubatomicParticle } from "@/hooks/atomic/useSubatomics";


const NewSubatomicParticle = () => {
  const [form, setForm] = useState({
    name: "",
    symbol: "",
    particle_type: "",
    mass: 0,
    charge: 0,
    spin: "",
    fundamental_particle_id: 0,
    is_antiparticle: false,
    is_stable: true,
  });
  const { mutate: createSubatomicParticle, isLoading, error } = useCreateSubatomicParticle();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createSubatomicParticle(form);
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
      <input
        type="text"
        placeholder="Symbol"
        value={form.symbol}
        onChange={(e) => setForm({ ...form, symbol: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Mass"
        value={form.mass}
        onChange={(e) => setForm({ ...form, mass: +e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Charge"
        value={form.charge}
        onChange={(e) => setForm({ ...form, charge: +e.target.value })}
        required
      />
      <select
        value={form.particle_type}
        onChange={(e) => setForm({ ...form, particle_type: e.target.value })}
        required
      >
        <option value="">Select Particle Type</option>
        <option value="hadron">Hadron</option>
        <option value="meson">Meson</option>
        <option value="baryon">Baryon</option>
      </select>
      <input
        type="number"
        placeholder="Fundamental Particle ID"
        value={form.fundamental_particle_id}
        onChange={(e) => setForm({ ...form, fundamental_particle_id: +e.target.value })}
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create Particle"}
      </button>
      {error && <div>Error: {error.message}</div>}
    </form>
  );
};

export default NewSubatomicParticle;
