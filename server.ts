// import WebSocket, { WebSocketServer } from 'ws';
const Sockket = require('ws');

const wss = new Sockket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log(message.toString());
  });
});

// sockettt.Server.listen(8080);
