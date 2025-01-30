'use client';

import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const getPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 my-8 font-bold font-secondary">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`flex items-center justify-center p-3 rounded-lg border-4 ${
          currentPage === 1
            ? "bg-zinc-200 hover:bg-zinc-300 border-zinc-300 text-zinc-400"
            : "bg-zinc-700 hover:bg-zinc-600 border-zinc-800 text-zinc-100"
        }`}
        aria-label="Previous Page"
      >
        <FaArrowLeft />
      </button>

      {getPageNumbers().map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`py-2 px-3 rounded-lg border-4 ${
            currentPage === number
              ? "bg-zinc-400 hover:bg-zinc-600 border-zinc-500 text-zinc-900"
              : "bg-zinc-300 hover:bg-zinc-400 border-zinc-500 text-zinc-500"
          }`}
          aria-label={`Page ${number}`}
        >
          {number}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center p-3 rounded-lg border-4 ${
          currentPage === totalPages
            ? "bg-zinc-200 hover:bg-zinc-300 border-zinc-300 text-zinc-400"
            : "bg-zinc-700 hover:bg-zinc-600 border-zinc-800 text-zinc-100"
        }`}
        aria-label="Next Page"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
