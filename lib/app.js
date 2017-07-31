const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const DEV_MODE = (process.env.NODE_ENV === 'development');

const app = express();

if (DEV_MODE) {
  const webpack = require('webpack');
  const config = require('../webpack.config.dev');
  const compiler = webpack(config);
  const webpackDev = webpackDevMiddleware(
    compiler,
    {
      contentBase: config.output.path,
      publicPath: config.output.publicPath
    }
  );
  app.use(webpackDev);
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static('public'));

module.exports = app;
