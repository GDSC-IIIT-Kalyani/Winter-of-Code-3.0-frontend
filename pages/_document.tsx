import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
      <Script
        src="https://apply.devfolio.co/v2/sdk.js"
        async
        defer
        onError={(err) => {
          console.error(err);
        }}
        // onLoad={() => {
        //   console.log('Loaded');
        // }}
      />
    </Html>
  );
}
