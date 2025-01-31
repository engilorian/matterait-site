"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useElement } from "@/hooks/atomic/useElements";

import ElementDetails from "../components/ElementDetails";


const ElementDetail: React.FC = () => {
  const params = useParams();
  const id = Number(params.id); 

  const { data: element, error } = useElement(id);

  if (error || !element) return <div>Error loading element details</div>;

  return (
    <section>
      <ElementDetails element={element} />
    </section>
  );
};

export default ElementDetail;
