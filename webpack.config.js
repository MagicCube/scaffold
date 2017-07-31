const DEV_MODE = (process.env.NODE_ENV === 'development');

const configPath = `./webpack/${DEV_MODE ? 'development' : 'production'}`;
const config = require(configPath);
config.entry = {
  app: './app',
  vendor: './vendor',
};

module.exports = config;
