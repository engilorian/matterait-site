'use client';

import React from 'react';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="bg-zinc-50">
      <div className="container mx-auto px-4 py-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-main font-bold mb-4 md:mb-0">
            <Link href="/">Matterait</Link>
          </div>

          <ul className="text-zinc-600 font-secondary font-bold flex space-x-6 mb-4 md:mb-0">
            <li>
              <Link
                href="/about"
                className="hover:text-cyan-700 rounded py-2 px-4"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/tos"
                className="hover:text-cyan-700 rounded py-2 px-4"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-cyan-700 rounded py-2 px-4"
              >
                Contact   
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-zinc-500 font-secondary mt-4">
          &copy; {new Date().getFullYear()} Matterait. By <strong>Engilore</strong>
        </div>
      </div>
    </footer>
  );
}