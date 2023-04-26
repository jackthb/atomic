import React from "react";
import Head from "next/head";
import Header from "./Header";

import { Manrope } from "next/font/google";
import localFont from "next/font/local";

const inter = Manrope({
  subsets: ["latin"],
});

// const madeDillan = localFont({
//   src: "./assets/fonts/made-dillan.woff",
//   variable: "--font-made-dillan",
// });

// const spaceText = localFont({
//   src: "./assets/fonts/space-text-medium.woff",
//   variable: "--font-space-text",
// });

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
