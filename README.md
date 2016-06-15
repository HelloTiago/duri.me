# Duri.me
A simple tool that allows you to convert images to DataURIs.

## Features
- [ES2015](https://babeljs.io/docs/learn-es2015)
- [React](https://github.com/facebook/react)
- [React Router](https://github.com/reactjs/react-router)
- [CSS modules](https://github.com/css-modules/css-modules)

## Tools
- [Webpack](https://github.com/webpack/webpack)
    - [webpack-dev-server](https://github.com/webpack/webpack-dev-server) with HMR support
    - [webpack-notifier](https://github.com/Turbo87/webpack-notifier)
- [Babel 6](https://github.com/babel/babel) with presets for:
    - ES2015 using [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015)
    - React using [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
    - React HMR and error catching using [babel-preset-react-hmre](https://github.com/babel/babel/tree/master/packages/babel-preset-react-hmre)
- [ESLint](https://github.com/eslint/eslint) configured to:
    - use Babel 6 as parser using [babel-eslint](https://github.com/babel/babel-eslint)
    - lint page on save using [eslint-loader](https://github.com/MoOx/eslint-loader)

## Getting started
```bash
$ git clone https://github.com/hellotiago/duri.me.git
$ npm i # shortcut for npm install
$ npm start
```
