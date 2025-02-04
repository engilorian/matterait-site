"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

import { SubatomicParticleUpdate } from "@/config/types/atomic/subatomic";
import { subatomicFieldsForUpdate } from "@/config/types/atomic/subatomicContants";
import { useSubatomicParticle, useUpdateSubatomicParticle } from "@/hooks/atomic/useSubatomics";
import { useFundamentalParticles } from "@/hooks/atomic/useFundamentals";

import Form from "@/components/Form";

const EditSubatomic: React.FC = () => {
  const { id } = useParams() as { id: string };
  const particleId = Number(id);
  const router = useRouter();

  const { data: particle, isLoading: isLoadingParticle } = useSubatomicParticle(particleId);
  const { mutate: updateSubatomic, isLoading: isUpdating } = useUpdateSubatomicParticle();
  const { data: fundamentalParticles, isLoading: isLoadingFundamentals } = useFundamentalParticles();

  const [fields, setFields] = useState([]);

  useEffect(() => {
    if (!isLoadingParticle && !particle) {
      router.push("/404");
    }
  }, [particle, isLoadingParticle, router]);

  useEffect(() => {
    if (fundamentalParticles) {
      setFields(subatomicFieldsForUpdate(fundamentalParticles));
    }
  }, [fundamentalParticles]);

  if (isLoadingParticle || isLoadingFundamentals || fields.length === 0) return <div>Loading form...</div>;

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
          fields={fields}
          onSubmit={handleSubmit}
          submitText="Update Particle"
          isLoading={isUpdating}
        />
      </div>
    </section>
  );
};

export default EditSubatomic;
