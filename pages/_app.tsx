import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import Layout from '@/components/Layouts/Layout';
import { UIProvider } from '../contexts/UIContext';
import { DefaultSeo } from 'next-seo';
import { SEO } from '../next-seo.config';
import Head from 'next/head';

const vanilla = localFont({ src: 'fonts/Vanilla.otf' });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${vanilla.style.fontFamily};
        }
      `}</style>

      <DefaultSeo {...SEO} />

      <Head>
        <meta
          name="keywords"
          content="winter of code, woc, woc3, open source"
        />
        <meta name="author" content="GDSC IIIT Kalyani" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UIProvider>
    </>
  );
}
