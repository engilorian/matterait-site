"use client";

import React from "react";
import { motion } from "framer-motion";

import Button from "src/components/Button";


const About: React.FC = () => {
  const aboutSections = [
    {
      title: "Our Mission",
      description:
        "At Matterait, we strive to uncover the fundamental traits of matter, connecting science enthusiasts and experts alike in a quest to understand the universe at its core.",
    },
    {
      title: "Our Vision",
      description:
        "To become the leading platform for exploring the building blocks of reality, fostering curiosity, innovation, and knowledge-sharing among individuals worldwide.",
    },
    {
      title: "Our Approach",
      description:
        "We blend cutting-edge research, interactive learning, and a passion for science to create a space where exploration and discovery thrive.",
    },
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="text-center px-6">
          <motion.h1
            className="font-main text-5xl md:text-7xl text-gray-900 font-extrabold mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About <strong className="text-emerald-700">Matterait</strong>
          </motion.h1>
          <p className="text-lg md:text-2xl text-gray-700 font-secondary font-medium max-w-2xl mx-auto">
            Learn more about our journey, mission, and vision to inspire curiosity about matter and the universe.
          </p>
        </div>
      </section>

      <section className="py-32 bg-emerald-800">
        <div className="max-w-5xl mx-auto px-6 text-white">
          {aboutSections.map((section, index) => (
            <motion.div
              key={index}
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h2 className="font-main text-3xl md:text-4xl font-bold mb-4">
                {section.title}
              </h2>
              <p className="text-lg md:text-xl font-secondary">
                {section.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="text-center px-6">
          <motion.h2
            className="font-main text-4xl md:text-5xl text-gray-900 font-extrabold mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Join Our Journey
          </motion.h2>
          <p className="text-lg md:text-2xl text-gray-700 font-secondary font-medium max-w-2xl mx-auto mb-8">
            Be part of the community that uncovers the wonders of matter and beyond. Together, we explore the universe.
          </p>
            <Button size="large" variant="primary" type="submit">
              Contact Us
            </Button>
        </div>
      </section>
    </>
  );
};

export default About;
