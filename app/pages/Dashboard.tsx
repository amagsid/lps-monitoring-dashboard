'use client';
import React, { useEffect, useState } from 'react';
import { cardio } from 'ldrs';
import { ping } from 'ldrs';
import { tailChase } from 'ldrs';
import NavBar from '../components/NavBar';
import WebSocketData from '../data/WebSocketData';

ping.register();
tailChase.register();

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

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
  };
  return (
    <div className=' flex flex-row h-screen w-screen '>
      <aside className=' w-96'>
        {' '}
        <NavBar />
      </aside>
      <div>
        <WebSocketData />{' '}
        {loading ? (
          <l-tail-chase size='40' speed='1.75' color='black'></l-tail-chase>
        ) : (
          <div className='flex items-center align-center'>
            {' '}
            <h6>connection ongoing</h6>
            <l-ping size='45' speed='2' color='black'></l-ping>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
