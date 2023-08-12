import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import Script from "next/script";
import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
          <meta
            name="og:image"
            content="https://res.cloudinary.com/du2zxsy39/image/upload/v1631560504/site_voffuw.png"
          />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `}
          </Script>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
