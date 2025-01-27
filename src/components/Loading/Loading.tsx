"use client";

import React from "react";

import Load from "../Load/Load";


const Loading: React.FC = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-emerald-800">
      <Load />
    </section>
  );
};

export default Loading;

