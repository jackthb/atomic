import React from "react";
import Head from "next/head";
import Header from "./Header";

import { Manrope } from "next/font/google";

const inter = Manrope({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`h-screen flex flex-col ${inter.className}`}>
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
