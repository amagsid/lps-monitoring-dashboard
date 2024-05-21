import React, { ReactNode } from 'react';
import { cardio } from 'ldrs';
import { ping } from 'ldrs';
import { tailChase } from 'ldrs';
import NavBar from '../components/SideNavBar';
import useWebSocket from '../data/websocketConnection/useWebSocket';
import { metricMessages } from '../data/websocketConnection/metricMessages';
import Overview from '../components/Overview';
import TopBar from '../components/TopBar';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';

ping.register();
tailChase.register();

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { serverData, isPaused, loading, setPause } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages
  );

  return (
    <div className=' flex flex-row h-screen w-screen '>
      <aside className='w-48'>
        {' '}
        <NavBar />
      </aside>

      <div className='flex flex-col w-full'>
        <div className=' flex flex-row items-center justify-center'>
          <TopBar loading={loading} isPaused={isPaused} />
        </div>

        <div className='h-screen'>
          {!loading ? (
            children
          ) : (
            <div className='w-full h-full flex items-center justify-center'>
              <l-tail-chase
                size='180'
                speed='1.75'
                color={colors.colorPop}
              ></l-tail-chase>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
