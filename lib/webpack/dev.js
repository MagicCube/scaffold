const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

function injectWebpackDev(app) {
  const config = require('../../webpack.config.dev');
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

module.exports = injectWebpackDev;
