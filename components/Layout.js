import React, { Component } from "react";
import Head from "next/head";
import Header from "./Header.js";
import Footer from "./Footer.js";

export default function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <Head>
        <meta
          name="description"
          content="London-based software developer and CompSci undergrad"
        />
      </Head>
      <Header />
      {children}
    </div>
  );
}
