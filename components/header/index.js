import React from 'react';
import NextHead from 'next/head';
import Link from 'next/link';
import { string } from 'prop-types';

import css from './header.module.css';

const defaultDescription = "A simple tool designed to help you convert images to dataURI's.";
const defaultOGURL = 'https://duri.me';

const Head = (props) => (
  <header className={css.header}>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title || ''}</title>
      <meta name="description" content={props.description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || ''} />
      <meta property="og:description" content={props.description || defaultDescription} />
      <meta name="twitter:site" content={props.url || defaultOGURL} />
    </NextHead>

    <Link href="/">
      <a className={css.logo}>Duri.me</a>
    </Link>

    <nav>
      <Link href="/help">
        <a className={css.navLink}>Help</a>
      </Link>
    </nav>
  </header>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

export default Head;
