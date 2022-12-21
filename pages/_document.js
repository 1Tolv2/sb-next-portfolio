import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Sofia Johnsson S.</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
