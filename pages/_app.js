import '../styles/index.css'
import Layout  from "../components/Layout";
import '../styles/blog.css'
import Script from 'next/script'
import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import '../public/nprogress.css';

function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
  
    NProgress.configure({
      minimum: 0.3,
      easing: 'ease',
      speed: 800,
      showSpinner: true
    });
    
    Router.events.on('routeChangeStart', () => NProgress.start());
    Router.events.on('routeChangeComplete', () => NProgress.done());
    Router.events.on('routeChangeError', () => NProgress.done());
    
    return () => {
      Router.events.on('routeChangeStart', () => NProgress.start());
      Router.events.on('routeChangeComplete', () => NProgress.done());
      Router.events.on('routeChangeError', () => NProgress.done());
      
    };
  }, []);
  // return (
  //   <>
  //     {loading ? (
  //       <h1>Loading...</h1>
  //     ) : (
  //       <Layout>
  //         <Script
  //             strategy="lazyOnload"
  //             src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_MEASUREMENT_ID}`}
  //           />

  //           <Script strategy="lazyOnload">
  //             {`
  //               window.dataLayer = window.dataLayer || [];
  //               function gtag(){dataLayer.push(arguments);}
  //               gtag('js', new Date());

  //               gtag('config', '${process.env.GOOGLE_MEASUREMENT_ID}');
  //             `}
  //         </Script>
  //         <Component {...pageProps} />        
  //       </Layout>
  //     )}
  //   </>
  // );
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
