const express = require('express');

const routers = require('./routers');

const DEV_MODE = (process.env.NODE_ENV === 'development');

const app = express();

if (DEV_MODE) {
  // Inject webpack-dev-middleware
  const injectWebpackDev = require('./webpack/dev');
  injectWebpackDev(app);
} else {
  // Use 'build/assets' as the public path of '/assets'.
  app.use('/assets', express.static('build/assets'));
}

// Use 'public' folder as the root path.
app.use(express.static('public'));

// Use ejs as the default view engine.
app.set('view engine', 'ejs');

// Use routers.
app.use(routers);

module.exports = app;
