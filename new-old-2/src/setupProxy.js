const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/more/*", { target: "http://localhost:8000/" }));
};
