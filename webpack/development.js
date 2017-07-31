const webpack = require('webpack');

const config = require('./base');

module.exports = config;
config.module.rules.push(
  {
    enforce: 'pre',
    test: /\.jsx?$/,
    use: ['eslint-loader'],
    exclude: /node_modules/
  }
);

config.plugins.push(
  new webpack.SourceMapDevToolPlugin({
    filename: '[file].map',
    exclude: ['vendor.js']
  })
);
