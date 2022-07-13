const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // /api URI를 활용하여, 3000 포트를 사용하는 REACT에서 요청을 보낼 수 있음
    createProxyMiddleware({
      target: 'http://localhost:8080',	// 8000번을 사용하는 스프링으로 요첨을 보냄
      changeOrigin: true,
    })
  );
};