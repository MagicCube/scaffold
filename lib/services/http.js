const http = require('http');

const app = require('../app');

const port = process.env.PORT ? parseInt(process.env.PORT, 0) : 3000;
let httpServer = null;

module.exports = {
  setup() {
    httpServer = http.createServer(app);
  },

  start() {
    return new Promise((resolve, reject) => {
      httpServer.listen(port, (err) => {
        if (!err) {
          console.info(`HTTP service is now listening at port ${port}`);
          resolve();
        } else {
          reject(err);
        }
      });
    });
  }
};
