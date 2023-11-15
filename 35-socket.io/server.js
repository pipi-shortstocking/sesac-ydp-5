const express = require('express');
const http = reqire('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app); // express 앱으로 http 서버를 생성
const io = socketIO(server);
const PORT = 8080;

app.set('view engine, ejs');

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
