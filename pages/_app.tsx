import "../public/styles.css";
import "../public/nprogress.css";

import Layout from "../components/Layout";

import NProgress from "nprogress";
import Router from "next/router";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import React from "react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  // wtf? Type error: 'Component' cannot be used as a JSX component.
  return (
    <ThemeProvider>
      <Layout>
        <AnyComponent {...pageProps} />
        <Analytics />
      </Layout>
    </ThemeProvider>
  );
}
