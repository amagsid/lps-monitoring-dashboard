// import WebSocket, { WebSocketServer } from 'ws';
const Sockket = require('ws');

const wss = new Sockket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    try {
      console.log(JSON.parse(message));
    } catch (e) {
      console.log(`sonemthing went wrong with the message:${e.message}`);
    }
  });
});

// sockettt.Server.listen(8080);
