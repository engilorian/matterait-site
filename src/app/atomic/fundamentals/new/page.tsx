"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useCreateFundamentalParticle } from "@/hooks/atomic/useFundamentals";
import { FundamentalParticleCreate } from "@/config/types/atomic/fundamental";
import { fundamentalFieldsForCreate } from "@/config/types/atomic/fundamentalConstants";

import Form from "@/components/Form";


const NewFundamentalParticle: React.FC = () => {
  const router = useRouter();
  const { mutate: createFundamental, isLoading } = useCreateFundamentalParticle();

  const handleSubmit = (data: FundamentalParticleCreate) => {
    createFundamental(data, {
      onSuccess: (newParticle) => {
        if (newParticle?.id) {
          router.push(`/atomic/fundamentals/${newParticle.id}`);
        } else {
          console.error("Creation succeeded but no ID was returned.");
        }
      },
      onError: (error) => {
        console.error("Error creating fundamental particle:", error);
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Fundamental Particle</h1>
      <Form<FundamentalParticleCreate>
        fields={fundamentalFieldsForCreate()}
        onSubmit={handleSubmit}
        submitText="Create Particle"
        isLoading={isLoading}
      />
    </div>
  );
};

export default NewFundamentalParticle;
