import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';


const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
