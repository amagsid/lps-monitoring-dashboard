import React, { ReactNode } from 'react';
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

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  const { serverData, isPaused, loading, setPause } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages
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

        <div className=' flex flex-col h-screen '>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
