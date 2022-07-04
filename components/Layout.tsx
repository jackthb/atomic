import React, { Component } from "react";
import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col">
      <Head>
        <meta
          name="description"
          content="hi, i'm jack, london-based engineer and compsci grad passionate about building product-centric software"
        />
      </Head>
      <Header />
      {children}
    </div>
  );
}
