const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const SRC_PATH = path.resolve('./src');
const ASSETS_BUILD_PATH = path.resolve('./build/assets');
const ASSETS_PUBLIC_PATH = '/assets/';

module.exports = {
  context: SRC_PATH,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: ASSETS_BUILD_PATH,
    publicPath: ASSETS_PUBLIC_PATH,
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
  },
  plugins: [
    new CleanWebpackPlugin(
      ['build/assets'],
      { root: path.resolve('./'), verbose: true }
    )
  ]
};
