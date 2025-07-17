const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data.json')); // agora está na raiz
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3001, () => {
  console.log('🔥 JSON Server rodando em http://localhost:3001, Vida!');
});
