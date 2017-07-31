const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const DEV_MODE = (process.env.NODE_ENV === 'development');

const app = express();

if (DEV_MODE) {
  const injectWebpackDev = require('./webpack/dev');
  injectWebpackDev(app);
}

app.use(express.static('public'));

module.exports = app;
