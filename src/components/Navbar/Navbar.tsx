'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">

        <div className="text-2xl font-main font-bold">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/matterait.svg"
              alt="Matterait"
              width={40}
              height={40}
              priority
            />
          </Link>
        </div>

        <ul className="text-gray-600 font-secondary font-bold hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:bg-emerald-700 hover:text-white rounded-full py-2 px-4">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:bg-emerald-700 hover:text-white rounded-full py-2 px-4">
              About
            </Link>
          </li>
        </ul>

        <button
          onClick={toggleMenu}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden text-gray-600 font-secondary font-bold border-b-4 border-gray-300 space-y-2 text-center px-4 py-3">
          <li>
            <Link href="/" className="block hover:bg-emerald-700 hover:text-white rounded-full py-2" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block hover:bg-emerald-700 hover:text-white rounded-full py-2" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
