"use client";

import React from "react";
import { useParams } from "next/navigation";

import { useSubatomicParticle } from "@/hooks/atomic/useSubatomics";

import SubatomicDetails from "../components/SubatomicDetails";


const SubatomicDetail: React.FC = () => {
  const params = useParams();
  const id = Number(params.id);

  const { data: particle, error } = useSubatomicParticle(id);

  if (error || !particle) {
    return <div>Error loading subatomic particle details</div>;
  }

  return (
    <section>
      <SubatomicDetails particle={particle} />
    </section>
  );
};

export default SubatomicDetail;
