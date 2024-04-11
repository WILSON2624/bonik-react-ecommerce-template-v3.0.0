import Script from "next/script";
import { Fragment } from "react";

export default function GoogleAnalytics() {
  const MARKUP = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-FLCDXWTVMD');
  `;

  return (
    <Fragment>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-SGG7GE7HZC"
        strategy="lazyOnload"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: MARKUP }}
      />
    </Fragment>
  );
}
