import "../public/styles.css";
import "../public/nprogress.css";

import * as gtag from "../lib/gtag";
import Script from "next/script";

import Layout from "../components/Layout";

import NProgress from "nprogress";
import Router, { useRouter } from "next/router";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import React, { useEffect } from "react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  // wtf? Type error: 'Component' cannot be used as a JSX component.

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider>
      <Layout>
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}');
            `}
        </Script>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
        <AnyComponent {...pageProps} />
        <Analytics />
      </Layout>
    </ThemeProvider>
  );
}
