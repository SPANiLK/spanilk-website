import '../styles/index.css'
import Layout  from "../components/Layout";
import '../styles/blog.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
     <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_MEASUREMENT_ID}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GOOGLE_MEASUREMENT_ID}');
        `}
      </Script>
      <Component {...pageProps} />        
    </Layout>
  )
}

export default MyApp
