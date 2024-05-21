'use client';
import React, { useEffect, useState } from 'react';
import { cardio } from 'ldrs';
import { ping } from 'ldrs';
import { tailChase } from 'ldrs';
import NavBar from '../components/SideNavBar';
import useWebSocket from '../data/websocketConnection/useWebSocket';
import { metricMessages } from '../data/websocketConnection/metricMessages';
import Overview from '../components/Overview';
import TopBar from '../components/TopBar';

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

  return (
    <div className=' flex flex-row h-screen w-screen '>
      <aside className=' w-72'>
        {' '}
        <NavBar />
      </aside>

      <div className='flex flex-col w-full'>
        <div className=' flex flex-row items-center justify-center'>
          <TopBar loading={loading} isPaused={isPaused} />
        </div>

        <div className=' flex flex-col h-screen '>
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
    </div>
  );
};

export default Dashboard;
