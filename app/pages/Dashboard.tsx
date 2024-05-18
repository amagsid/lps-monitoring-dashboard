'use client';
import React, { useEffect, useState } from 'react';
import { cardio } from 'ldrs';
import { ping } from 'ldrs';
import { tailChase } from 'ldrs';
import NavBar from '../components/NavBar';
import useWebSocket from '../data/websocketConnection/useWebSocket';
import { metricMessages } from '../data/websocketConnection/metricMessages';
import Overview from '../components/Overview';

ping.register();
tailChase.register();

const Dashboard = () => {
  const { serverData, isPaused, loading, setPause } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages
  );
  const { serverData: server1 } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages[0]
  );
  const { serverData: server2 } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages[1]
  );
  const { serverData: server3 } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages[2]
  );
  const { serverData: server4 } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages[3]
  );
  const { serverData: server5 } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages[4]
  );

  // console.log(serverData);

  return (
    <div className=' flex flex-col h-screen w-screen '>
      <div className=' flex flex-row items-center justify-center'>
        {/* <button onClick={() => setPause(!isPaused)}>
          {isPaused ? 'Resume' : 'Pause'}
        </button> */}
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
        <Overview
          // allServers={serverData}
          server1={server1}
          server2={server2}
          server3={server3}
          server4={server4}
          server5={server5}
        />
      </div>
    </div>
  );
};

export default Dashboard;
