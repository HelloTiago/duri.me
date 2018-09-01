import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <p>Welcome to the profile page</p>
  </div>
);

export default Home;
