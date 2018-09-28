import React from 'react';
import dynamic from 'next/dynamic';
import copy from 'copy-to-clipboard';

import Header from 'components/header';

const Dropzone = dynamic(import('react-dropzone'), {
  ssr: false,
  loading: () => <span />,
});

import css from './help.css';

class Help extends React.Component {
  state = {
    dataURI: null,
    width: null,
    height: null,
    files: [],
    isFinished: false,
  };

  handleDrop = files => {
    this.setState({
      files: files,
    });

    files.forEach(file => {
      var reader = new window.FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener(
        'load',
        () => {
          var img = new Image();
          img.onload = () => {
            this.setState({
              dataURI: reader.result,
              width: img.width,
              height: img.height,
            });
          };
          img.src = reader.result;
        },
        false,
      );
    });
  };

  startTimer = () => {
    this._timer != null ? clearTimeout(this._timer) : null;

    this._timer = setTimeout(
      function() {
        this.setState({
          isFinished: false,
        });
        this._timer = null;
      }.bind(this),
      2000,
    );
  };

  handleDataURIClick = () => {
    copy(this.state.dataURI);
    this.setState({
      isFinished: true,
    });
    this.startTimer();
  };

  handleCSSClick = () => {
    copy(removeLeadingWhitespace`.
            . width: ${this.state.width}px;
            . height: ${this.state.height}px;
            . background-repeat: no-repeat;
            . background-image: url(${this.state.dataURI});`);
    this.setState({
      isFinished: true,
    });
    this.startTimer();
  };

  handleHTMLClick = () => {
    copy(
      '<img width="' +
        this.state.width +
        '" height="' +
        this.state.height +
        '" title="" alt="" src="' +
        this.state.dataURI +
        '">',
    );
    this.setState({
      isFinished: true,
    });
    this.startTimer();
  };

  render() {
    return (
      <div className="app">
        <Header title="Duri.me - Help" />

        <div className={css.help}>
          <h2>What is a DataURI and when should I use one?</h2>
          <p>
            Treehouse has an excelent article explaining{' '}
            <a href="http://blog.teamtreehouse.com/using-data-uris-speed-website">
              what exactly a Data URI is and when you should use one
            </a>
            . Definitely worth a read!
          </p>

          <h2>My browser keeps crashing</h2>
          <p>
            This is likely caused by uploading a large image - keep in mind that the advantages of
            Data URI's are pretty limited to relatively small images. I personally avoid using them
            for images over 150~200px in size.
          </p>
          <h2>I have an idea, how can I help?</h2>
          <p>
            That's awesome! You can contribute to Duri.me{' '}
            <a href="https://github.com/HelloTiago/duri.me">directly via Github</a>. Feel free to
            submit an issue with any idea you might have, or even open a pull request. I'll get back
            to you for sure.
          </p>
          <h2>What's this built with and who built it?</h2>
          <p>
            Someone's really curious! This is a static website, built with React.js and a bunch of
            other great tools. You can check out the{' '}
            <a href="https://github.com/HelloTiago/duri.me">Github repo</a> for a proper look under
            the hood.
          </p>
          <p>
            And finally, this was built by me, <a href="http://tiagoduarte.com">Tiago Duarte</a>. I
            work fulltime as a freelance front-end developer. Feel free to hit me up, let's grab a
            coffee!
          </p>

          <h2>Didn't this look different a while ago?</h2>
          <p>
            Yes indeed! The first iteration of Duri.me, built in 2012, used jQuery for the file
            upload interactions and connected to a PHP backend to generate the DataURI. It looked
            quite a <a href="https://cl.ly/hVuF">bit different.</a>
          </p>
          <p>
            The second update, released in 2016, included not only a design overhaul to something
            similar to what you're seeing now, but also a move from PHP/jQuery to a React-powered
            app with no backend.
          </p>
          <p>
            And finally this current interation, last updated in 2018, is a port to a server-side
            rendered React app powered by Next.js.
          </p>
        </div>
      </div>
    );
  }
}

export default Help;

function removeLeadingWhitespace(strings) {
  var values = Array.prototype.slice.call(arguments, 1);
  var output = [];
  for (var i = 0; i < values.length; i++) {
    output.push(strings[i] + values[i]);
  }

  output.push(strings[values.length]);

  var lines = output.join('').split('\n');
  if (lines[0] === '.') {
    lines.shift();
  }

  return lines
    .map(function(line) {
      return line.replace(/^\s*\. |/gm, '');
    })
    .join('\n');
}
