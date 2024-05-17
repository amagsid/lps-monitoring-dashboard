'use client';
import React, { useEffect, useState } from 'react';
import { cardio } from 'ldrs';
import { ping } from 'ldrs';
import { tailChase } from 'ldrs';
import NavBar from '../components/NavBar';
import useWebSocket from '../data/useWebSocket';
import { metricMessages } from '../data/metricMessages';

ping.register();
tailChase.register();

const Dashboard = () => {
  // const [loading, setLoading] = useState(true);
  // const [serverData, setServerData] = useState(Array<{}>);
  // const [isPaused, setPause] = useState(false);
  const [ws, setWs] = useState(null);

  const { serverData, isPaused, loading, setPause } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages
  );

  console.log(serverData);

  // console.log(serverData, 'serverrrrrrData');

  // useEffect(() => {
  //   const socket = new WebSocket(
  //     'wss://lps-monitoring.up.railway.app/realtime'
  //   );

  //   if (!isPaused) {
  //     socket.onopen = () => {
  //       console.log('ws opened on browser');
  //       socket.send(
  //         JSON.stringify({
  //           type: 'all',
  //           machine: 'server01',
  //           subscribe: true,
  //         })
  //       );
  //       socket.send(
  //         JSON.stringify({
  //           type: 'all',
  //           machine: 'server02',
  //           subscribe: true,
  //         })
  //       );

  //       setLoading(false);
  //     };
  //   }

  //   socket.onmessage = (event) => {
  //     const receivedData = JSON.parse(event.data);
  //     if (!('success' in receivedData)) {
  //       // console.log(receivedData, 'receivedData');
  //       setServerData((prevMessages) => [...prevMessages, receivedData]);
  //       console.log(serverData, 'serverData');
  //     }
  //   };
  //   // Clean up the WebSocket connection when the component unmounts
  //   // return () => {
  //   //   socket.close();
  //   //   console.log('WebSocket connection is closed.');
  //   // };
  // }, [serverData, isPaused]);

  return (
    <div className=' flex flex-col h-screen w-screen '>
      <div className=' flex flex-row items-center justify-center'>
        <button onClick={() => setPause(!isPaused)}>
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        connection status:
        {loading && (
          <l-tail-chase size='40' speed='1.75' color='black'></l-tail-chase>
        )}
        {isPaused && <h1> paused</h1>}
        {!isPaused && !loading && (
          <div className='flex items-center align-center'>
            <h6>Ongoing</h6>
            <l-ping size='45' speed='2' color='green'></l-ping>
          </div>
        )}
        {/* {isPaused ? (
          <l-tail-chase size='40' speed='1.75' color='black'></l-tail-chase>
        ) : (
         
        )} */}
      </div>

      <div className=' flex flex-row'>
        <aside className=' w-96'>
          {' '}
          <NavBar />
        </aside>
        <div>{/* <WebSocketData />{' '} */}</div>
      </div>
    </div>
  );
};

export default Dashboard;
