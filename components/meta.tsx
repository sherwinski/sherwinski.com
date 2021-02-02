import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <meta
        name="description"
        content="sherwinski.com - A personal website for random musings and film photography"
      />
      <meta name="keywords" content="sherwinski.com GitHub blog nextjs photography imgix" />
      <meta property="og:title" content="sherwinski.com" />
      <meta property="og:description" content="Random musings and film photography" />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      <meta property="og:url" content="https://www.sherwinski.com" />

      <meta property="twitter:title" content="sherwinski.com" />
      <meta property="twitter:description" content="A personal website for random musings and film photography" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={HOME_OG_IMAGE_URL} />

      <script async defer data-domain="sherwinski.com" src="https://plausible.io/js/plausible.js"></script>
      <script async defer data-domain="sherwinski.com" src="https://stats.sherwinski.com/js/index.js"></script>
    </Head>
  )
}

export default Meta
