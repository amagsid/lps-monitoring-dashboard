'use client';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  // const socket = new WebSocket('wss://lps-monitoring.up.railway.app/realtime');
  const socket = new WebSocket('ws://localhost:8080');

  socket.addEventListener('open', (e) => {
    console.log('opened');
    setLoading(false);
    socket.send('decode');
    socket.send(
      JSON.stringify({
        x: 254,
        y: 100,
      })
    );
  });

  // socket.onopen = () => {
  //   console.log('ws opened on browser');
  //   socket.send('hello world');
  //   setLoading(false);
  // };

  // socket.onmessage = (message) => {
  //   console.log(`message received`, message.data);
  // };
  return (
    <div className=' text-sky-900 '>
      <h1 id='wsstatus'> {loading ? 'loading' : 'connection established'} </h1>
    </div>
  );
};

export default Dashboard;
