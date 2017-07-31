const services = require('./lib/services');

async function startup() {
  services.setup();
  await services.start();
}

startup();
