const services = [
  'http'
].map(id => require(`./${id}`));

module.exports = {
  setup() {
    return Promise.all(
      services.map(service => service.setup())
    );
  },

  start() {
    return Promise.all(
      services.map(service => service.start())
    );
  }
};
