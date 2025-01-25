'use client';

import React, { useState } from "react";

import { useCreateFundamentalParticle } from "@/hooks/atomic/useFundamentals";


const NewFundamentalParticle = () => {
  const [form, setForm] = useState({
    name: "",
    symbol: "",
    particle_type: "",
    mass: 0,
    charge: 0,
    spin: "",
    is_antiparticle: false,
    is_stable: true,
  });
  const { mutate: createFundamentalParticle, isLoading, error } = useCreateFundamentalParticle();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createFundamentalParticle(form);
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
        <option value="quark">Quark</option>
        <option value="lepton">Lepton</option>
        <option value="boson">Boson</option>
      </select>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Creating..." : "Create Particle"}
      </button>
      {error && <div>Error: {error.message}</div>}
    </form>
  );
};

export default NewFundamentalParticle;
