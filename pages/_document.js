import Document, { Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Navbar/>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}