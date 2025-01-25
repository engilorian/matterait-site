'use client';

import React from 'react';

import { useElements } from '@/hooks/atomic/useElements';

import ElementList from './components/ElementList';


const ElementsPage = () => {
  const { data: elements, isLoading, error } = useElements();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <ElementList elements={elements ?? []} />;
};

export default ElementsPage;
