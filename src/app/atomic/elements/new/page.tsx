"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useStatesOfMatter } from "@/hooks/state/useStates";
import { useCreateElement } from "@/hooks/atomic/useElements";
import { elementFieldsForCreate } from "@/config/types/atomic/elementConstants";
import { ElementCreate } from "@/config/types/atomic/element";

import Form from "@/components/Form";


const NewElement: React.FC = () => {
  const router = useRouter();
  const { mutate: createElement, isLoading } = useCreateElement();
  const { data: states, isLoading: statesLoading } = useStatesOfMatter();

  const [stateOptions, setStateOptions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    if (states) {
      setStateOptions(
        states.map((state) => ({
          value: state.id.toString(),
          label: state.name,
        }))
      );
    }
  }, [states]);

  const handleSubmit = (data: ElementCreate) => {
    createElement(data, {
      onSuccess: (newElement) => {
        if (newElement?.id) {
          router.push(`/atomic/elements/${newElement.id}`);
        } else {
          console.error("Element creation successful, but no ID returned.");
        }
      },
      onError: (error) => {
        console.error("Error creating element:", error);
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Element</h1>
      <Form<ElementCreate>
        fields={elementFieldsForCreate(stateOptions)}
        onSubmit={handleSubmit}
        submitText="Create Element"
        isLoading={isLoading || statesLoading}
      />
    </div>
  );
};

export default NewElement;
