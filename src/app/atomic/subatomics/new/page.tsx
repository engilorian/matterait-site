"use client";

import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { useCreateSubatomicParticle } from "@/hooks/atomic/useSubatomics";
import { SubatomicParticleCreate, SubatomicParticleType } from "@/config/types/atomic/subatomic";
import { SpinValue } from "@/config/types/atomic/fundamental";
import { subatomicFieldsForCreate } from "@/config/types/atomic/subatomicContants";

import Form from "@/components/Form/Form";


const NewSubatomic: React.FC = () => {
  const router = useRouter();
  const { mutate: createSubatomic, isLoading } = useCreateSubatomicParticle();

  const defaultValues: SubatomicParticleCreate = {
    name: "",
    variant: "",
    symbol: "",
    brief: "",
    description: "",
    particle_type: SubatomicParticleType.HADRON,
    mass: 0,
    charge: 0,
    spin: SpinValue.ZERO,
    is_antiparticle: false,
    is_stable: false,
    compositions: [],
  };

  const handleSubmit = (data: SubatomicParticleCreate) => {
    createSubatomic(data, {
      onSuccess: (particle) => router.push(`/atomic/subatomics/${particle.id}`),
      onError: (error: unknown) => {
        if (axios.isAxiosError(error) && error.response) {
          console.error("API Error:", error.response.data);
        } else {
          console.error("Unknown error:", error instanceof Error ? error.message : "No additional details.");
        }
      },
    });
  };

  return (
    <div className="py-20 bg-zinc-100">
      <div className="container mx-auto p-4">
        <h1 className="text-5xl md:text-7xl text-zinc-900 font-main mb-16">Submit New Subatomic Particle</h1>
        <Form<SubatomicParticleCreate>
          defaultValues={defaultValues}
          fields={subatomicFieldsForCreate()}
          onSubmit={handleSubmit}
          submitText="Create"
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default NewSubatomic;
