// import App from 'next/app';
import Router from 'next/router';

import '../styles/global.css';

import * as gtag from '../utils/gtag';

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
