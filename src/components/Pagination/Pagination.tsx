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
    const pages: (number | "...")[] = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftBound = Math.max(2, currentPage - 1);
    const rightBound = Math.min(totalPages - 1, currentPage + 1);

    pages.push(1);
    if (leftBound > 2) pages.push("...");

    for (let i = leftBound; i <= rightBound; i++) {
      pages.push(i);
    }

    if (rightBound < totalPages - 1) pages.push("...");
    pages.push(totalPages);

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

      {getPageNumbers().map((number, index) => (
        <button
          key={index}
          onClick={() => typeof number === "number" && onPageChange(number)}
          disabled={number === "..."}
          className={`py-2 px-3 rounded-lg border-4 ${
            currentPage === number
              ? "bg-zinc-400 hover:bg-zinc-600 border-zinc-500 text-zinc-900"
              : number === "..."
              ? "bg-transparent border-transparent text-zinc-500 cursor-default"
              : "bg-zinc-300 hover:bg-zinc-400 border-zinc-500 text-zinc-500"
          }`}
          aria-label={typeof number === "number" ? `Page ${number}` : "Ellipsis"}
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
