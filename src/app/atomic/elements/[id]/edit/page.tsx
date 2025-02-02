"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

import { useElement, useUpdateElement } from "@/hooks/atomic/useElements";
import { elementFieldsForUpdate } from "@/config/types/atomic/elementConstants";
import { ElementUpdate } from "@/config/types/atomic/element";
import { StateOfMatter } from "@/config/types/state";
import { useStatesOfMatter } from "@/hooks/state/useStates";

import Form from "@/components/Form/Form";


function isStateOfMatter(value: unknown): value is StateOfMatter {
  return value !== null && typeof value === "object" && "name" in value && typeof (value as { name: unknown }).name === "string";
}

const EditElement: React.FC = () => {
  const { id } = useParams() as { id: string };
  const elementId = Number(id);

  const router = useRouter();
  const { data: element, isLoading: isElementLoading } = useElement(elementId);
  const { mutate: updateElement, isLoading: isUpdating } = useUpdateElement();
  const { data: states, isLoading: isStatesLoading } = useStatesOfMatter();

  const [stateOptions, setStateOptions] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    if (!isElementLoading && !element) {
      router.push("/404");
    }
  }, [element, isElementLoading, router]);

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

  if (!element) return null;

  const transformedElement: ElementUpdate = {
    ...element,
    state_id: isStateOfMatter(element.state) ? element.state.id : element.state,
  };

  const handleSubmit = (data: ElementUpdate) => {
    updateElement(
      { id: elementId, data },
      { onSuccess: () => router.push(`/atomic/elements/${elementId}`) }
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Element</h1>
      <Form<ElementUpdate>
        defaultValues={transformedElement}
        fields={elementFieldsForUpdate(stateOptions)} 
        onSubmit={handleSubmit}
        submitText="Update"
        isLoading={isUpdating || isStatesLoading}
      />
    </div>
  );
};

export default EditElement;
