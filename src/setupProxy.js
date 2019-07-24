const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'https://www.easy-mock.com/mock/5bc6febea5c01d3a2b6beec0/', changeOrigin: true }));
};
