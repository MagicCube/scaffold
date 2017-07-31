const webpack = require('webpack');

const config = require('./webpack.config.base');

module.exports = config;
config.module.rules.push(
  {
    enforce: 'pre',
    test: /\.jsx?$/,
    use: ['eslint-loader'],
    exclude: /node_modules/
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
    include: /node_modules/
  },
  {
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'less-loader'],
    include: /node_modules/
  },
  {
    test: /\.less$/,
    use:
    [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          sourceMap: true,
          localIdentName: '[path]-[local]'
        }
      },
      'less-loader'
    ],
    exclude: /node_modules/
  }
);

config.plugins.push(
  new webpack.SourceMapDevToolPlugin({
    filename: '[file].map',
    exclude: ['vendor.js']
  })
);

Object.keys(config.entry).forEach((key) => {
  if (!Array.isArray(config.entry[key])) {
    const entry = config.entry[key];
    config.entry[key] = [
      entry
    ];
  }
  if (key !== 'vendor') {
    config.entry[key].unshift(
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?quiet=true'
    );
  }
});

config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);
