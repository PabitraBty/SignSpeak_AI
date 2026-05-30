import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
