import { useState } from 'react';

const WebSocketData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const socket = new WebSocket('wss://lps-monitoring.up.railway.app/realtime');

  socket.onopen = () => {
    console.log('ws opened on browser');
    socket.send(
      JSON.stringify({
        type: 'all',
        machine: 'server01',
        subscribe: true,
      })
    );
    socket.send(
      JSON.stringify({
        type: 'all',
        machine: 'server02',
        subscribe: true,
      })
    );
    socket.send(
      JSON.stringify({
        type: 'all',
        machine: 'server03',
        subscribe: true,
      })
    );
    setLoading(false);
  };

  socket.onmessage = (message) => {
    console.log(`message received`, message.data);
    setData(message.data);
  };

  return (
    <div>
      <h3>Data = {data}</h3>
    </div>
  );
};

export default WebSocketData;
