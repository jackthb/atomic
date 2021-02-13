import React, { Component } from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
