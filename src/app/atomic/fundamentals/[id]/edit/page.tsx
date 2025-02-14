"use client";

import React, { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

import { useFundamentalParticle, useUpdateFundamentalParticle } from "@/hooks/atomic/useFundamentals";
import { FundamentalParticleUpdate } from "@/config/types/atomic/fundamental";
import { fundamentalFieldsForUpdate } from "@/config/types/atomic/fundamentalConstants";

import Form from "@/components/Form";


const EditFundamental: React.FC = () => {
  const { id } = useParams() as { id: string };
  const particleId = Number(id);
  const router = useRouter();

  const { data: particle, isLoading } = useFundamentalParticle(particleId);
  const { mutate: updateFundamental, isLoading: isUpdating } = useUpdateFundamentalParticle();

  useEffect(() => {
    if (!isLoading && !particle) {
      router.push("/404");
    }
  }, [particle, isLoading, router]);

  if (!particle) return null;

  const handleSubmit = (data: FundamentalParticleUpdate) => {
    updateFundamental(
      { id: particleId, data },
      {
        onSuccess: () => {
          router.push(`/atomic/fundamentals/${particleId}`);
        },
        onError: (error) => {
          console.error("Error updating fundamental particle:", error);
        },
      }
    );
  };

  return (
    <div className="py-20 bg-zinc-100">
      <div className="container mx-auto p-4">
      <h1 className="text-5xl md:text-7xl text-zinc-900 font-main mb-16">Edit Fundamental Particle</h1>
      <Form<FundamentalParticleUpdate>
        defaultValues={particle}
        fields={fundamentalFieldsForUpdate()}
        onSubmit={handleSubmit}
        submitText="Update Particle"
        isLoading={isUpdating}
      />
      </div>
    </div>
  );
};

export default EditFundamental;
