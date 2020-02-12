import React from 'react';

import Header from 'components/header';

import css from './help.module.css';

function Help() {
  return (
    <div className="app">
      <Header title="Duri.me - Help - A beautifully simple image-to-DataURI converter" />

      <div className={css.help}>
        <h2>What is a DataURI and when should I use one?</h2>
        <p>
            Treehouse has an excelent article explaining
          {' '}
          <a href="http://blog.teamtreehouse.com/using-data-uris-speed-website">
              what exactly a Data URI is and when you should use one
          </a>
            . Definitely worth a read!
        </p>

        <h2>My browser keeps crashing</h2>
        <p>
            This is likely caused by uploading a large image - keep in mind that the advantages of
            Data URI&apos;s are pretty limited to relatively small images. I personally avoid using them
            for images over 150~200px in size.
        </p>
        <h2>I have an idea, how can I help?</h2>
        <p>
            That&apos;s awesome! You can contribute to Duri.me
          {' '}
          <a href="https://github.com/HelloTiago/duri.me">directly via Github</a>
. Feel free to
            submit an issue with any idea you might have, or even open a pull request. I'll get back
            to you for sure.
        </p>
        <h2>What&apos;s this built with and who built it?</h2>
        <p>
            Someone&apos;s really curious! This is a static website, built with React.js and a bunch of
            other great tools. You can check out the
          {' '}
          <a href="https://github.com/HelloTiago/duri.me">Github repo</a>
          {' '}
for a proper look under
            the hood.
        </p>
        <p>
            And finally, this was built by me,
          {' '}
          <a href="http://tiagoduarte.com">Tiago Duarte</a>
. I
            work fulltime as a freelance front-end developer. Feel free to hit me up, let's grab a
            coffee!
        </p>

        <h2>Didn&apos;t this look different a while ago?</h2>
        <p>
            Yes indeed! The first iteration of Duri.me, built in 2012, used jQuery for the file
            upload interactions and connected to a PHP backend to generate the DataURI. It looked
            quite a
          {' '}
          <a href="https://cl.ly/hVuF">bit different.</a>
        </p>
        <p>
            The second update, released in 2016, included not only a design overhaul to something
            similar to what you&apos;re seeing now, but also a move from PHP/jQuery to a React-powered
            app with no backend.
        </p>
        <p>
            And finally this current interation, last updated in 2020, is a
            statically-exported React app powered by Next.js
        </p>
      </div>
    </div>
  );
}

export default Help;
