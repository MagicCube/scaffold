const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

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
      },
      {
        test: /\.(png|jpg)$/,
        use:
        [
          {
            loader: 'url-loader',
            options:
            {
              limit: 8192,
              name: 'images/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:
        [
          {
            loader: 'url-loader',
            options:
            {
              limit: 8192,
              mimetype: 'application/font-woff',
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use:
        [
          {
            loader: 'file-loader',
            options:
            {
              limit: 8192,
              mimetype: 'application/font-woff',
              name: 'fonts/[name].[ext]'
            }
          }
        ]
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
    ),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
      minChunks: Infinity
    })
  ]
};
