import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="description"
            content="Full stack developer Sofia Johnsson S.'s portfolio"
          />
          <meta name="author" content="Sofia Johnsson S." />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
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
