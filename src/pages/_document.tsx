import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <body className='bg-gray-100 dark:bg-gray-800'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument