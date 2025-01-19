import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/peacock.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;