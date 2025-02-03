"use client";

import React from "react";
import { useParams } from "next/navigation";

import { useFundamentalParticle } from "@/hooks/atomic/useFundamentals";

import FundamentalDetails from "../components/FundamentalDetails";


const FundamentalDetail: React.FC = () => {
  const params = useParams();
  const id = Number(params.id);

  const { data: particle, error } = useFundamentalParticle(id);

  if (error || !particle) {
    return <div>Error loading fundamental particle details</div>;
  }

  return (
    <section>
      <FundamentalDetails particle={particle} />
    </section>
  );
};

export default FundamentalDetail;
