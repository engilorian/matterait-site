"use client";

import React from "react";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="text-center px-6">
        <motion.h1
          className="font-main text-5xl md:text-6xl text-gray-800 mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <strong className="text-emerald-700">Matterait /</strong> Traits of Matter
        </motion.h1>
      </div>
    </section>
  );
}
