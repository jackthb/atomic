import React, { Component } from 'react';

import Header from './Header.js';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
