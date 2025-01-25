'use client';

import React, { useState } from 'react';
import Button from '../Button';


interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="container mx-auto px-4 py-4">
      <form onSubmit={handleSearch} className="flex items-center space-x-2">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="text-gray-700 font-secondary flex-grow border-2 border-gray-300 rounded-full px-4 py-2 focus:outline-none "
        />
        <Button size="medium" variant="primary" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
