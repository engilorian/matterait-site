'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

import usePagination from '@/hooks/usePagination';
import { useQuantumPhenomena } from '@/hooks/quantum/usePhenomena';

import Load from '@/components/Load';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import QuantumPhenomenaCard from '@/components/Cards/QuantumPhenomenaCard';


const Quantum: React.FC = () => {
  const { data: phenomena, isLoading, error } = useQuantumPhenomena();

  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredPhenomena = useMemo(() => {
    if (!phenomena) return [];
    return phenomena.filter((phenomenon) =>
      phenomenon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (phenomenon.brief && phenomenon.brief.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (phenomenon.description && phenomenon.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [phenomena, searchQuery]);

  const { currentPage, totalPages, currentData: currentPhenomena, goToPage } = usePagination(filteredPhenomena, 2);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    goToPage(1);
  };

  const handlePageChange = (page: number) => {
    goToPage(page);
    document.getElementById('quantum-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="quantum-section" className="min-h-screen py-16 bg-white">
      <div className="h-full mx-auto max-w-7xl px-6 flex flex-col">

        <div className="mb-24 text-gray-900 font-bold">
          <h2 className="text-5xl md:text-7xl font-main">Quantum Phenomena</h2>
          <p className="text-lg font-secondary">Explore the fascinating phenomena that occur at the quantum level.</p>
        </div>

        <div className="mx-auto mb-10">
          <SearchBar onSearch={handleSearchChange} />
        </div>

        <div className="my-4 text-center font-secondary">
          {isLoading && <Load variant="light" />}
          {error && <p className="text-red-500">{error.message}</p>}
          {!isLoading && !error && filteredPhenomena.length === 0 && <p className="text-gray-400">No quantum phenomena found.</p>}
        </div>

        {filteredPhenomena.length > 0 && (
          <motion.div
            className="grid grid-cols-1 gap-8 flex-grow"
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
            {currentPhenomena.map((phenomenon) => (
              <QuantumPhenomenaCard
                key={phenomenon.id}
                name={phenomenon.name}
                brief={phenomenon.brief || 'No description available.'}
                description={phenomenon.description}
                is_common={phenomenon.is_common}
                slug={phenomenon.slug}
              />
            ))}
          </motion.div>
        )}

        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Quantum;
