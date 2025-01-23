'use client';

import React from "react";
import { useParams } from "next/navigation";

import { useElement } from "@/hooks/useElements";
import ElementDetails from "@/elements/components/ElementDetails";


const ElementsDetail: React.FC = () => {
  const { id } = useParams();

  const { data: element, isLoading, error } = useElement(Number(id));

  if (isLoading) return <div>Loading...</div>;
  if (error || !element) return <div>Error loading element details</div>;

  return (
    <div>
      <ElementDetails element={element} />
    </div>
  );
};

export default ElementsDetail;
