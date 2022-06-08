import '../styles/color.css'
import '../styles/modular-scale.css'
import '../styles/layout.css'
import '../styles/typography.css'
import '../styles/utilities.css'
import '../styles/styles.css'
import Head from 'flareact/head'

export default function App({ Component, pageProps }) {
  const title = 'Pionta Park'
  const description = 'Il sito del parco Pionta di Arezzo'
  const domain = 'piontapark.it'
  const url = `https://www.${domain}/`

  const ogp = {
    image: 'https://piontapark.it/images/educazione-02.jpg',
    imageAlt: 'persone attorno a una fontana'
  }

  const twitter = {
    handle: '@piontapark',
    image: 'https://piontapark.it/images/educazione-02.jpg',
    imageAlt: 'persone attorno a una fontana'
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap"
          rel="stylesheet"
        />
        {/* OGP meta Tags for Facebook */}
        {/* https://ogp.me/ */}
        {/* https://www.opengraph.xyz/ */}
        <meta property="og:title" content={title}></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:image" content={ogp.image}></meta>
        <meta property="og:image:alt" content={ogp.imageAlt}></meta>
        <meta property="og:url" content={url}></meta>
        <meta property="og:description" content={description}></meta>
        <meta property="og:locale" content="it_IT"></meta>

        {/* Twitter card */}
        {/* https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content={twitter.handle}></meta>
        <meta name="twitter:title" content={title}></meta>
        <meta name="twitter:description" content={description}></meta>
        <meta name="twitter:image" content={twitter.image}></meta>
        <meta name="twitter:image:alt" content={twitter.imageAlt}></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
