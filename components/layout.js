import React, { Component } from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }) {
    return (
      <div className='layout'>
        <Header />
        {children}
        <Footer />
      </div>
    );
}