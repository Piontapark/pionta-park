import '../styles/color.css'
import '../styles/modular-scale.css'
import '../styles/layout.css'
import '../styles/typography.css'
import '../styles/utilities.css'
import '../styles/styles.css'
import Head from 'flareact/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
