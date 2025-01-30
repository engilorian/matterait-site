"use client";

import React from "react";

import Load from "../Load/Load";


const Loading: React.FC = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-cyan-500">
      <Load variant="light"/>
    </section>
  );
};

export default Loading;

