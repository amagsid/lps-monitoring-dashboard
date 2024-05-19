'use client';
import React from 'react';
import DashboardLayout from '../dashboardLayout/dashboardLayout';
import Overview from '../components/Overview';
import useWebSocket from '../data/websocketConnection/useWebSocket';
import { metricMessages } from '../data/websocketConnection/metricMessages';
import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import DetailedStats from '../components/detailedStats';

const page = () => {
  const [theme, colorMode] = useMode();

  const { serverData: server1 } = useWebSocket(
    'wss://lps-monitoring.up.railway.app/realtime',
    metricMessages[0]
  );

  console.log(server1, 'server1');

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DashboardLayout>
          {' '}
          <DetailedStats serverNumber={'1'} />
        </DashboardLayout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default page;