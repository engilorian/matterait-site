"use client";

import React, { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

import { SubatomicParticleUpdate } from "@/config/types/atomic/subatomic";
import { subatomicFieldsForUpdate } from "@/config/types/atomic/subatomicContants";
import { useSubatomicParticle, useUpdateSubatomicParticle } from "@/hooks/atomic/useSubatomics";

import Form from "@/components/Form";


const EditSubatomic: React.FC = () => {
  const { id } = useParams() as { id: string };
  const particleId = Number(id);
  const router = useRouter();

  const { data: particle, isLoading } = useSubatomicParticle(particleId);
  const { mutate: updateSubatomic, isLoading: isUpdating } = useUpdateSubatomicParticle();

  useEffect(() => {
    if (!isLoading && !particle) {
      router.push("/404");
    }
  }, [particle, isLoading, router]);

  if (!particle) return null;

  const handleSubmit = (data: SubatomicParticleUpdate) => {
    updateSubatomic(
      { id: particleId, data },
      {
        onSuccess: () => {
          router.push(`/atomic/subatomics/${particleId}`);
        },
        onError: (error) => {
          console.error("Error updating subatomic particle:", error);
        },
      }
    );
  };

  return (
    <section className="py-20 bg-zinc-300">
    <div className="container mx-auto p-4">
    <h1 className="text-5xl md:text-7xl text-zinc-900 font-main mb-16">Edit Subatomic Particle</h1>
      <Form<SubatomicParticleUpdate>
        defaultValues={particle}
        fields={subatomicFieldsForUpdate()}
        onSubmit={handleSubmit}
        submitText="Update Particle"
        isLoading={isUpdating}
      />
    </div>
    </section>
  );
};

export default EditSubatomic;
