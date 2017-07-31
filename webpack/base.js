const path = require('path');

const CLIENT_SRC_ROOT = path.resolve('./src');
const CLIENT_ASSETS_BUILD_PATH = path.resolve('./build/assets');
const CLIENT_ASSETS_PUBLIC_PATH = '/assets/';

module.exports = {
  context: CLIENT_SRC_ROOT,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: CLIENT_ASSETS_BUILD_PATH,
    publicPath: CLIENT_ASSETS_PUBLIC_PATH,
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use:
        [
          {
            loader: 'babel-loader',
            options: { cacheDirectory: true }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  stats: {
    children: false,
    maxModules: 0
  }
};
