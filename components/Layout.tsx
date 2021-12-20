import React, { Component } from "react";
import Head from "next/head";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
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
