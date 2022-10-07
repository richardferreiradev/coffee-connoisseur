import Document, { Html, Head, NextScript, Main } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            as="font"
            crossOrigin="anonymous"
            href="/fonts/IBMPlexSans-Bold.ttf"
          ></link>
          <link
            rel="preload"
            as="font"
            crossOrigin="anonymous"
            href="/fonts/IBMPlexSans-SemiBold.ttf"
          ></link>
          <link
            rel="preload"
            as="font"
            crossOrigin="anonymous"
            href="/fonts/IBMPlexSans-Regular.ttf"
          ></link>
        </Head>
        <body>
          <Main></Main>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
