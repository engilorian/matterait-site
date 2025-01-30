'use client';

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

import usePagination from "@/hooks/usePagination";
import { useElements } from "@/hooks/atomic/useElements";
import { useFundamentalParticles } from "@/hooks/atomic/useFundamentals";
import { useSubatomicParticles } from "@/hooks/atomic/useSubatomics";

import ElementCard from "@/components/Cards/ElementCard";
import SubatomicCard from "@/components/Cards/SubatomicCard";
import Carousel from "@/components/Carousel/Carousel";
import StandardModel from "@/components/StandardModel";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";
import Load from "@/components/Load"; 


const Atomic: React.FC = () => {
  const { data: elements, isLoading: elementsLoading, error: elementsError } = useElements();
  const { data: fundamentals, isLoading: fundamentalsLoading, error: fundamentalsError } = useFundamentalParticles();
  const { data: subatomics, isLoading: subatomicsLoading, error: subatomicsError } = useSubatomicParticles();

  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredSubatomics = useMemo(() => {
    if (!subatomics) return [];
    return subatomics.filter((particle) =>
      particle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      particle.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [subatomics, searchQuery]);

  const { currentPage, totalPages, currentData: currentSubatomics, goToPage } = usePagination(filteredSubatomics, 2);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    goToPage(1);
  };

  const handlePageChange = (page: number) => {
    goToPage(page);
    document.getElementById("subatomic-section")?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-24 text-gray-900 font-bold">
            <h2 className="text-5xl md:text-7xl font-main">Elements</h2>
            <p className="text-lg font-secondary">Fundamental units of matter, each defined by its unique atomic structure.</p>
          </div>

          <div className="my-4 text-center font-secondary">
            {elementsLoading && <Load variant="dark" />}
            {elementsError && <p className="text-red-500">{elementsError.message}</p>}
            {!elementsLoading && !elementsError && elements?.length === 0 && <p className="text-gray-400">No elements available.</p>}
          </div>

          {elements && elements.length > 0 && (
            <Carousel>
              {elements.map((element) => (
                <ElementCard
                  key={element.id}
                  name={element.name}
                  brief={element.brief || "No description available."}
                  symbol={element.symbol}
                  atomic_number={element.atomic_number}
                  atomic_mass={element.atomic_mass}
                  category={element.category || "Unknown"}
                  link={`/atomic/elements/${element.id}`}
                />
              ))}
            </Carousel>
          )}
        </div>
      </section>

      <section className="bg-cyan-500 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-24 text-white font-main font-bold">
            <h2 className="text-5xl md:text-7xl font-main ">Fundamentals</h2>
            <p className="text-lg font-secondary">The most basic particles, responsible for forming all known matter and forces.</p>
          </div>

          <div className="my-4 text-center font-secondary">
            {fundamentalsLoading && <Load variant="light" />}
            {fundamentalsError && <p className="text-red-500">{fundamentalsError.message}</p>}
            {!fundamentalsLoading && !fundamentalsError && fundamentals?.length === 0 && <p className="text-gray-400">No fundamental particles available.</p>}
          </div>

          {fundamentals && fundamentals.length > 0 && (
            <div className="flex justify-center">
              <StandardModel particles={fundamentals} />
            </div>
          )}
        </div>
      </section>

      <section id="subatomic-section" className="min-h-[50vh] py-16">
        <div className="h-full mx-auto max-w-7xl px-6 flex flex-col">
          <div className="mb-24 text-gray-900 font-bold">
            <h2 className="text-5xl md:text-7xl font-main">Subatomics</h2>
            <p className="text-lg font-secondary">Particles that exist within atoms or arise from high-energy interactions.</p>
          </div>

          <div className="mx-auto mb-10">
            <SearchBar onSearch={handleSearchChange} />
          </div>

          <div className="my-4 text-center font-secondary">
            {subatomicsLoading && <Load variant="dark" />}
            {subatomicsError && <p className="text-red-500">{subatomicsError.message}</p>}
            {!subatomicsLoading && !subatomicsError && filteredSubatomics.length === 0 && (
              <p className="text-gray-400">No subatomic particles found.</p>
            )}
          </div>

          {filteredSubatomics.length > 0 && (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 flex-grow"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {currentSubatomics.map((particle) => (
                <SubatomicCard
                  key={particle.id}
                  name={particle.name}
                  brief={particle.brief || "No description available."}
                  symbol={particle.symbol}
                  mass={particle.mass}
                  charge={particle.charge}
                  spin={particle.spin}
                  particle_type={particle.particle_type}
                  is_antiparticle={particle.is_antiparticle}
                  is_stable={particle.is_stable}
                  link={`/atomic/subatomic/${particle.id}`}
                />
              ))}
            </motion.div>
          )}

          <div className="py-8 flex justify-center">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Atomic;
