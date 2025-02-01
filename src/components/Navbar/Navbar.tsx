'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FaGithub } from "react-icons/fa";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
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

        <div className="hidden md:flex items-center space-x-6">
          <ul className="text-zinc-600 font-secondary font-bold flex space-x-6">
            <li>
              <Link
                href="/"
                className="hover:bg-zinc-100 rounded-full py-2 px-4"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:bg-zinc-100 rounded-full py-2 px-4"
              >
                About
              </Link>
            </li>
          </ul>
          <Link
            href="https://github.com/engilore/matterait-site"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-700"
          >
            <FaGithub size={32} />
          </Link>
        </div>

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
        <ul className="md:hidden text-zinc-600 font-secondary font-bold border-b-4 border-zinc-300 space-y-2 text-center px-4 py-3">
          <li>
            <Link
              href="/"
              className="block hover:bg-zinc-100 rounded-full py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block hover:bg-zinc-100 rounded-full py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
