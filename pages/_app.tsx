import "../public/styles.css";
import "../public/nprogress.css";
import "react-notion/src/styles.css";

import React from "react";

import Layout from "../components/Layout";

import NProgress from "nprogress";
import Router from "next/router";
import { AppProps } from "next/app";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
