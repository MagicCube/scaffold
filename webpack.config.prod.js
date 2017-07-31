const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./webpack.config.base');

config.module.rules.push(
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      use: ['css-loader'],
      fallback: 'style-loader'
    }),
    include: /node_modules/
  },
  {
    test: /\.less$/,
    use: ExtractTextPlugin.extract({
      use: ['css-loader', 'less-loader'],
      fallback: 'style-loader'
    }),
    include: /node_modules/
  },
  {
    test: /\.less$/,
    use: ExtractTextPlugin.extract(
      {
        use:
        [
          {
            loader: 'css-loader',
            options:
            {
              modules: true,
              localIdentName: '[path]-[local]'
            }
          },
          'less-loader'
        ],
        fallback: 'style-loader'
      }
    ),
    exclude: /node_modules/
  }
);

config.plugins.push(
  new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true,
    ignoreOrder: true
  }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify('production') }
  })
);

module.exports = config;
