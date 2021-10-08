const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/api/v2/**', { target: 'https://pokeapi.co/api/v2' }));
};