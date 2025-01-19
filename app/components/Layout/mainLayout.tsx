import React from 'react';

import Navbar from '../Navbar';


const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
