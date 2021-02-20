import React, { Component } from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

export default function Layout({ children }) {
  return (
    <div>
      <div className='wrapper'>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}
