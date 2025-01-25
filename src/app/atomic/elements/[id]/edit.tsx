import React from "react";
import { useRouter } from "next/router";

import { useElement, useUpdateElement } from "@/hooks/atomic/useElements";
import ElementForm from "@/elements/components/ElementForm";


const EditElementPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: element, isLoading: loadingElement } = useElement(Number(id));
  const { mutate: updateElement, isLoading: updating } = useUpdateElement();

  const handleSubmit = (data: { name: string; atomicNumber: number }) => {
    updateElement({ id: Number(id), element: data });
  };

  if (loadingElement) return <div>Loading...</div>;

  return (
    <ElementForm
      initialValues={element}
      onSubmit={handleSubmit}
      isLoading={updating}
      submitText="Update Element"
    />
  );
};

export default EditElementPage;
