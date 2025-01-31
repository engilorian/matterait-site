'use client';

import React, { useState } from 'react';

import Button from '../Button';


interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "" }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchQuery.trim());
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2 w-full">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-grow text-gray-700 font-secondary font-bold border-4 border-zinc-400 rounded-full px-4 py-2 focus:outline-none "
        aria-label={placeholder}
      />
      <Button size="medium" variant="primary" type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
